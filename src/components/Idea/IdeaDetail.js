import React, { Component } from 'react';
// import Link from 'react-router';
import Footer from '../Footer/Footer';
import { loadOneIdea } from '../../actions/idea'
import { showLoading, hideLoading } from '../../actions/loading'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CommentForm from '../Comment/CommentForm'
import ListComments from '../Comment/ListComments'
import ListMembers from '../Comment/ListMembers'
import Auth from '../../helpers/token'
import { addComment } from '../../actions/comment'
import renderHTML from 'react-render-html'
import { Link } from 'react-router'

import {
  convertFromHTML,
  convertToRaw,
  ContentState,
} from 'draft-js';

class IdeaDetail extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    this.props.loadOneIdea(this.props.params.title)
  }

  render(){
    const { data_idea , addComment } = this.props
    console.log(data_idea.video)
    // let video = data_idea.video.replace(/watch?v=/g, "embed/")

    console.log("render", data_idea);
    if(data_idea.hasOwnProperty('id') === false){
      //loading
      return(
        <h1>loading bar nih</h1>
      )
    }else{
      // this.props.hideLoading()
      console.log('what inside props', data_idea)

      return (
        <div className="components-page">
          <div className="wrapper">
            <div className="header header-filter header-detail">
              <div className="container">
                <div className="row text-center">
                  <h1 className="title">
                    {data_idea.title}
                  </h1>
                  <h5>Get more insight about the Idea . . .</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="main">
            <br/>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="card thumbnail">

                    <img src={data_idea.image} alt="..."  className="img-responsive"/>
                    <div className="caption">
                      <h3>{data_idea.title}</h3>
                      <p>
                        <i className="fa fa-icon fa-user"></i> {data_idea.User.name}
                        &nbsp;
                        <i className="fa fa-icon fa-tag"></i> <Link to="/explore">{data_idea.Category.name}</Link>
                        &nbsp;
                        <i className="fa fa-icon fa-calendar"></i> {data_idea.createdAt}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <ul className="nav nav-tabs nav-info" role="tablist">
                    <li role="presentation" className="active"><a href="#details" aria-controls="details" role="tab" data-toggle="tab">Details</a></li>
                    {/* <li role="presentation"><a href="#status" aria-controls="status" role="tab" data-toggle="tab">Status</a></li> */}
                    <li role="presentation"><a href="#comment" aria-controls="comment" role="tab" data-toggle="tab">Comment</a></li>
                    <li role="presentation"><a href="#members" aria-controls="members" role="tab" data-toggle="tab">Members</a></li>

                    <button type="button" className="close delete-detail" data-toggle="modal" data-placement="top" title="Delete This Idea" data-target="#deleteModal" aria-label="Delete"><span aria-hidden="true"><i className="fa fa-icon fa-trash"></i></span></button>
                    <button type="button" className="close edit-detail" data-toggle="tooltip" data-placement="top" title="Edit This Idea"><span aria-hidden="true"><i className="fa fa-icon fa-edit"></i></span></button>
                </ul>

                  <div className="tab-content">
                    <div role="tabpanel" className="tab-pane fade in active" id="details">
                      <br/>
                      <p><strong>Featured Video : </strong></p>
                      <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src={data_idea.video.replace(/watch\?v=/g, 'embed/')}></iframe>
                      </div>
                      <br/>
                      <p><strong>Description : </strong></p>
                      <p>{renderHTML(data_idea.description)}</p>
                    </div>

                    <div role="tabpanel" className="tab-pane fade" id="comment">
                      <div className="row">
                        <div className="card form-card">
                          <div className="card-header" data-background-color="blue">
                            <h4 className="title">Give Comment</h4>
                          </div>
                          <div className="card-signup">
                            <div className="col-md-12">
                              <CommentForm UserId={Auth.getUser().sub} data_idea={data_idea} addComment={addComment}/>
                            </div>
                          </div>
                        </div>
                      </div>

                      <ListComments data_idea={data_idea} />

                    </div>
                    <div role="tabpanel" className="tab-pane fade" id="members">
                      <ListMembers membersComment={data_idea.Comments} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="deleteModalLabel">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 className="modal-title" id="deleteModalLabel">Delete This Idea?</h4>
                </div>
                <div className="modal-body">
                  Deleting this idea will permanently remove it along with all of it's comments and update.
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">No, Keep Idea</button>
                  <button type="button" className="btn btn-danger">Yes, Delete Idea</button>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    data_idea: state.idea,
    loading: state.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadOneIdea: bindActionCreators(loadOneIdea, dispatch),
    addComment: bindActionCreators(addComment, dispatch),
    showLoading: bindActionCreators(showLoading, dispatch),
    hideLoading: bindActionCreators(hideLoading, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaDetail)

/*
<div role="tabpanel" className="tab-pane fade" id="status">

  <h2>{data_idea.status}</h2>
  <p>It means all of the stories about it have just begin</p>

  <div className="row">
    <div className="card form-card">
      <div className="card-header" data-background-color="blue">
        <h4 className="title">Update</h4>
      </div>
      <div className="card-signup">
        <div className="col-md-12">
          <form>
            <div className="form-group">
              <label className="control-label">New Update</label>
              <select className="form-control">
                <option>Baby</option>
                <option>Kid</option>
                <option>Teen</option>
                <option>Mature</option>
                <option>RIP</option>
              </select>
            </div>

            <div className="form-group">
              <label className="control-label">About this update</label>
              <textarea className="form-control" rows={4} placeholder="Tell us something about this update"></textarea>
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-info">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    <div className="col-md-12">

        <div>
          <div className="page-header">
              <h2 id="">Timeline</h2>
          </div>
        <div id="timeline"><div className="row timeline-movement timeline-movement-top">
          <div className="timeline-badge timeline-future-movement">
              <a href="#">
                  <span className="glyphicon glyphicon-plus"></span>
              </a>
          </div>
          <div className="timeline-badge timeline-filter-movement">
              <a href="#">
                  <span className="glyphicon glyphicon-time"></span>
              </a>
          </div>

      </div>
      <div className="row timeline-movement">

          <div className="timeline-badge">
              <span className="timeline-balloon-date-day">18</span>
              <span className="timeline-balloon-date-month">APR</span>
          </div>


          <div className="col-sm-6  timeline-item">
              <div className="row">
                  <div className="col-sm-11">
                      <div className="timeline-panel credits">
                          <ul className="timeline-panel-ul">
                              <li><span className="importo">Kenduigraha</span></li>
                              <li><span className="causale">Akhirnya partneran dapet investor!</span> </li>
                              <li><p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 11/09/2014</small></p> </li>
                          </ul>
                      </div>

                  </div>
              </div>
          </div>

          <div className="col-sm-6  timeline-item">
              <div className="row">
                  <div className="col-sm-offset-1 col-sm-11">
                      <div className="timeline-panel debits">
                          <ul className="timeline-panel-ul">
                              <li><span className="importo">Mussum ipsum cacilds</span></li>
                              <li><span className="causale">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span> </li>
                              <li><p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 11/09/2014</small></p> </li>
                          </ul>
                      </div>

                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</div>

</div>
*/
