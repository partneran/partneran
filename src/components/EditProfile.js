import React, { Component } from 'react';
import Footer from './Footer/Footer'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import Loading from './Lib/Loading';
import { assign } from 'lodash'
// import { isLoggedIn } from '../../helpers/verification';
import Auth from '../helpers/token';
import { editProfile } from '../actions/user'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const imgur = require('imgur');

const ImgUpload = (file) => {
  imgur.uploadFile(file)
    .then(function (json) {
      console.log(json.data.link);
      return json.data.link;
    })
    .catch(function (err) {
      console.error(err.message);
    });
}

// import {
//   convertFromHTML,
//   convertToRaw,
//   ContentState,
// } from 'draft-js';



class EditProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "" || Auth.getUser().name,
      email: "" || Auth.getUser().email,
      bio: "",
      photo_URL: "",
      imagePreviewUrl: "",
      loading: false
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onChangeFile = this.onChangeFile.bind(this)
    this.onEditorChange = this.onEditorChange.bind(this)
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        photo_URL: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
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

  // ImgUpload(e) {
  //   imgur.uploadFile(file)
  //     .then(function (json) {
  //       console.log(json.data.link);
  //       return json.data.link;
  //     })
  //     .catch(function (err) {
  //       console.error(err.message);
  //     });
  // }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onChangeFile(e) {
    const fReader = new FileReader();
    this.setState({ "photo" :  e.target.files[0].name });
    console.log('isitblob: '+ JSON.stringify(e.target.files[0]));
    console.log('freader :' + fReader.readAsDataURL(e.target.files[0]));
  }

  onSubmit(e) {
    e.preventDefault()
    // call dispatch to state
    console.log(this.state)
  }
  onSubmit(e) {
    e.preventDefault()
    // call dispatch to state
    editProfile(assign(this.state, {UserId: Auth.getUser().sub}))
  }

  onEditorChange(bio) {
    this.setState({
      bio: draftToHtml(bio)
    })
  }

  render() {
    const { name, email, photo, bio, loading, file, imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} className="img-responsive"/>);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
    // isLoggedIn()
    return (
      <div>
        {(loading) ? <Loading /> :
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
                            <div className="row">
                              <div className="col-md-offset-3 col-md-6 text-center">
                                {$imagePreview}
                              </div>
                            </div>
                              <label className="btn btn-info btn-sm">Upload Image</label>
                              <input
                                className="fileInput"
                                type="file"
                                onChange={(e)=>this._handleImageChange(e)}
                                name="photo_URL"
                                id="exampleInputFile"
                                required
                              />
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
      }
    </div>
    )
  }
}

// export default EditProfile;
function mapDispatchToProps(dispatch) {
  return {
    editProfile: bindActionCreators(EditProfile, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(EditProfile)
