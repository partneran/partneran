import React, { Component } from 'react';
import Footer from '../Footer/Footer'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import CategoryDetail from './CategoryDetail';
// import { isLoggedIn } from '../../helpers/verification';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

// import {
//   convertFromHTML,
//   convertToRaw,
//   ContentState,
// } from 'draft-js';

class EditIdea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      video: "",
      image: "",
      description: "",
      category: "",
      statuses: "",
      imageTitle: ""
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onEditorChange = this.onEditorChange.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault()
    // call dispatch to state
    console.log(this.state)
  }

  onEditorChange(description) {
    this.setState({
      description: draftToHtml(description)
    })
  }

  render() {
    const { title, video, image, category, description, imageTitle} = this.state
    // isLoggedIn()
    // console.log(this.props.fetchData);
    const { fetchData } = this.props
    if(fetchData.hasOwnProperty('id') === false){
      // this.props.router.replace('/explore')
      browserHistory.push('/explore')
      return(
        <div>LOADING NIH bro</div>
      )
    }else{
      let $imagePreview = null;
      if (image) {
        $imagePreview = (<img src={image} alt={imageTitle} title={imageTitle} className="img-responsive"/>);
      } else {
        $imagePreview = (<img src={fetchData.image} alt={imageTitle} title={imageTitle} className="img-responsive"/>);
      }
      return (

          <div className="components-page">
            <div className="wrapper">
              <div id="new-idea-intro" className="header header-filter">
                <div className="container">
                  <div className="row text-center">
                    <h1 className="title">Edit Idea</h1>
                    <h5>Change something about your idea</h5>
                  </div>
                </div>
              </div>
              <div className="main">
                <div className="container">
                  <div className="row">
                    <div className="card form-card">
                      <div className="card-header" data-background-color="blue">
                        <h4 className="title">Your Idea</h4>
                        <p className="category">Tell us about your idea</p>
                      </div>
                      <div className="card-signup">
                        <div className="container">
                          <form encType="multipart/form-data" onSubmit={this.onSubmit}>
                            <div className="form-group label-floating">
                              <label className="control-label">Your Idea's Title</label>
                              <input
                                type="text"
                                className="form-control"
                                name="title"
                                value={fetchData.title}
                                onChange={this.onChange}
                                required
                              />
                            </div>
                            <p>{title}</p>
                            <div className="form-group label-floating">
                              <label className="control-label">Featured Video (Youtube-Link)</label>
                              <input
                                type="url"
                                className="form-control"
                                name="video"
                                value={fetchData.video}
                                onChange={this.onChange}
                                required
                              />
                            </div>
                            <div className="form-group label-floating">
                              <div className="row">
                                <div className="col-md-offset-3 col-md-6 text-center">
                                  {$imagePreview}
                                </div>
                              </div>
                              <label className="btn btn-info btn-sm">Upload Image</label>
                              <input
                                type="file"
                                id="exampleInputFile"
                                required
                              />
                            </div>
                            <br/>
                            <br/>
                              <div className="form-group label-floating">
                                <label className="control-label">Category</label>
                                <CategoryDetail onChange={this.onChange} value={category} name="category"/>
                              </div>
                            <div className="form-group">
                              <br/>
                              <label>Your Idea Detail</label>
                              <Editor
                                description={fetchData.description}
                                onChange={this.onEditorChange}
                              />
                            </div>
                            <div className="form-group label-floating">
                              <label className="control-label">Status</label>
                              <select id="dropdown-menu" className="form-control" onChange={this.onChange} value={category} name="category">
                                <option value="option1">Baby</option>
                                <option value="option2">Kid</option>
                                <option value="option3">Teenager</option>
                                <option value="option4">Mature</option>
                                <option value="option5">RIP</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <button type="submit" className="btn btn-info">Submit</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    fetchData: state.idea
  }
}

export default connect(mapStateToProps)(EditIdea)
