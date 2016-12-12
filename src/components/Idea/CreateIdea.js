import React, { Component } from 'react';
import Footer from '../Footer/Footer'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import CategoryDetail from './CategoryDetail';
// import { isLoggedIn } from '../../helpers/verification';

// import {
//   convertFromHTML,
//   convertToRaw,
//   ContentState,
// } from 'draft-js';

class CreateIdea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      video: "",
      image: "",
      description: "",
      category: ""
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
    const { title, video, image, category, description} = this.state
    // isLoggedIn()
    return (
        <div className="components-page">
          <div className="wrapper">
            <div id="new-idea-intro" className="header header-filter">
              <div className="container">
                <div className="row text-center">
                  <h1 className="title">Share New Idea</h1>
                  <h5>Make a great impact! Start from sharing your idea!</h5>
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
                              value={title}
                              onChange={this.onChange}
                              // required
                            />
                          </div>
                          <p>{title}</p>
                          <div className="form-group label-floating">
                            <label className="control-label">Featured Video (Youtube-Link)</label>
                            <input
                              type="url"
                              className="form-control"
                              name="video"
                              value={video}
                              onChange={this.onChange}
                              // required
                            />
                          </div>
                          <div className="form-group label-floating">
                            <div className="col-md-10 no-padding-left">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Featured Image URL"
                              name="image"
                              value={image}
                              onChange={this.onChange}
                            />
                            </div>
                            <div className="col-md-2 no-padding-left">
                            <label className="btn btn-info btn-sm">Upload Image</label>
                            <input
                              type="file"
                              id="exampleInputFile"
                              // required
                            />
                            </div>
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
                              description={description}
                              onChange={this.onEditorChange}
                            />
                          </div>
                          <div className="form-group">
                            <button type="submit" className="btn btn-info">Save</button>
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


export default CreateIdea;
