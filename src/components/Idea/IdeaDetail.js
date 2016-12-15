import React, { Component } from 'react';
// import Link from 'react-router';
import Footer from '../Footer/Footer';
import { loadOneIdea, deleteIdea, fetchData } from '../../actions/idea'
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
import Loading from '../Lib/Loading'

// import {
//   convertFromHTML,
//   convertToRaw,
//   ContentState,
// } from 'draft-js';

class IdeaDetail extends Component {

  onClickDelete(){
    // console.log(this.props.router);
    this.props.deleteIdea(this.props.data_idea.id, this.props.router)
  }

  onEditClick(){
    this.props.fetchData(this.props.data_idea)
    this.props.router.replace('/edit-idea')
  }

  componentDidMount(){
    !Auth.getToken() ? this.props.router.replace('/login') : this.props.loadOneIdea(this.props.params.title)
  }

  render(){
    const { data_idea , addComment } = this.props
    // console.log(data_idea.video)
    // let video = data_idea.video.replace(/watch?v=/g, "embed/")

    console.log("render", data_idea);
    var itstatus;
    // console.log(data_idea)
    // switch (data_idea.status) {
    //   case 'baby':
    //     itstatus = <p>It means all of the stories about it have just begin</p>
    //   case 'kid':
    //     itstatus = <p>Well, it seems, it's gonna be big.</p>
    //   case 'teenager':
    //     itstatus = <p>Teenager, It's gonna be big, but we should keep an eye on it, so it won't go wrong</p>
    //   case 'mature':
    //     itstatus = <p>Well it's already great! It's initiator should be happy right now!</p>
    //   case 'rip':
    //     itstatus = <p>In Memoriam, may this idea rest in peace</p>
    //   default:
    // }
    if(data_idea.status === 'baby'){
      itstatus = <p>It means all of the stories about it have just begin</p>
    }else if(data_idea.status === 'Kid'){
      itstatus = <p>Well, it seems, it's gonna be big.</p>
    }else if(data_idea.status === 'Teenager'){
      itstatus = <p>Teenager, It's gonna be big, but we should keep an eye on it, so it won't go wrong</p>
    }else if(data_idea.status === 'Mature'){
      itstatus = <p>Well it's already great! It's initiator should be happy right now!</p>
    }else if(data_idea.status === 'Rip'){
      itstatus = <p>In Memoriam, may this idea rest in peace</p>
    }

    if(data_idea.hasOwnProperty('id') === false){
      //loading
      return(
        <Loading />
      )
    }else{
      // this.props.hideLoading()
      // console.log('what inside props', data_idea)
      console.log(data_idea.User.name);
      console.log(Auth.getUser().name);
      let  warning="Deleting this idea will permanently remove it along with all of it's comments and update."
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
                        <i className="fa fa-icon fa-tag"></i> {data_idea.Category.name}
                        &nbsp;
                        <i className="fa fa-icon fa-calendar"></i> {data_idea.createdAt}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <ul className="nav nav-tabs nav-info" role="tablist">
                    <li role="presentation" className="active"><a href="#details" aria-controls="details" role="tab" data-toggle="tab">Details</a></li>
                    <li role="presentation"><a href="#status" aria-controls="status" role="tab" data-toggle="tab">Status</a></li>
                    <li role="presentation"><a href="#comment" aria-controls="comment" role="tab" data-toggle="tab">Comment</a></li>
                    <li role="presentation"><a href="#members" aria-controls="members" role="tab" data-toggle="tab">Members</a></li>

                    {data_idea.User.id === Auth.getUser().sub
                    ?
                    <div>
                      <button type="button" className="close delete-detail" data-toggle="modal" data-placement="top" title="Delete This Idea" data-target="#deleteModal" aria-label="Delete"><span aria-hidden="true"><i className="fa fa-icon fa-trash"></i></span></button>

                      <button type="button" className="close edit-detail" data-toggle="tooltip" data-placement="top" title="Edit This Idea" onClick={this.onEditClick.bind(this)}><span aria-hidden="true"><i className="fa fa-icon fa-edit"></i></span></button>
                    </div>
                    :
                    ''}

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

                    <div role="tabpanel" className="tab-pane fade" id="status">

                      <h2 style={{textTransform:'capitalize'}}>{data_idea.status}</h2>
                      <p>{itstatus}</p>
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
                  {warning}
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">No, Keep Idea</button>
                  <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={this.onClickDelete.bind(this)}>Yes, Delete Idea</button>
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
    deleteIdea: bindActionCreators(deleteIdea, dispatch),
    fetchData: bindActionCreators(fetchData, dispatch),
    addComment: bindActionCreators(addComment, dispatch),
    showLoading: bindActionCreators(showLoading, dispatch),
    hideLoading: bindActionCreators(hideLoading, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaDetail)
