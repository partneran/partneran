import React, { Component } from 'react';
import Footer from './Footer/Footer'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
// import { isLoggedIn } from '../../helpers/verification';
import Auth from '../helpers/token'

// import {
//   convertFromHTML,
//   convertToRaw,
//   ContentState,
// } from 'draft-js';
const imgur = require('imgur');


class EditProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "" || Auth.getUser().name,
      email: "" || Auth.getUser().email,
      bio: "",
      photo: "",
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onEditorChange = this.onEditorChange.bind(this)
  }

  // ImgUpload(e) {
  //   imgur.uploadFile({this.state})
  //     .then(function (json) {
  //       this.setState({
  //         image: json.data.link
  //       })
  //     })
  //     .catch(function (err) {
  //       console.error(err.message);
  //     });
  // }


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault()
    // call dispatch to state
    console.log(this.state)
  }

  onEditorChange(bio) {
    this.setState({
      bio: draftToHtml(bio)
    })
  }

  render() {
    const { name, email, photo, bio} = this.state
    // isLoggedIn()
    return (
        <div className="components-page">
          <div className="wrapper">
            <div id="new-idea-intro" className="header header-filter">
              <div className="container">
                <div className="row text-center">
                  <h1 className="title">Edit Profile</h1>
                  <h5>Change something about your profile</h5>
                </div>
              </div>
            </div>
            <div className="main">
              <div className="container">
                <div className="row">
                  <div className="card form-card">
                    <div className="card-header" data-background-color="blue">
                      <h4 className="title">Your Profile</h4>
                      <p className="category">Tell us about you</p>
                    </div>
                    <div className="card-signup">
                      <div className="container">
                        <form encType="multipart/form-data" onSubmit={this.onSubmit}>
                          <div className="form-group label-floating">
                            <label className="control-label">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              value={name}
                              onChange={this.onChange}
                              required
                            />
                          </div>
                          <div className="form-group label-floating">
                            <label className="control-label">Email</label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              value={email}
                              onChange={this.onChange}
                              required
                            />
                          </div>
                          <div className="form-group label-floating">
                            <div className="col-md-10 no-padding-left">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Profile Picture"
                              name="photo"
                              value={photo}
                              onChange={this.onChange}
                            />
                            </div>
                            <div className="col-md-2 no-padding-left">
                            <label className="btn btn-info btn-sm">Upload Image</label>
                            <input
                              value={photo}
                              onChange={this.onChange}
                              name="photo"
                              type="file"
                              id="exampleInputFile"
                              required
                            />
                            </div>
                          </div>
                          <br/>
                          <br/>
                          <div className="form-group">
                            <br/>
                            <label>Tell us more about you</label>
                            <Editor
                              bio={bio}
                              onChange={this.onEditorChange}
                            />
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


export default EditProfile;
