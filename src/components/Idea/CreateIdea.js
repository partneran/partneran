import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftToHtml from 'draftjs-to-html'
import CategoryDetail from './CategoryDetail'
import { assign } from 'lodash'
import Auth from '../../helpers/token'
import { addIdea } from '../../actions/idea'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class CreateIdea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      video: "",
      image: "",
      description: "",
      category: "",
      imageTitle: ""
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onEditorChange = this.onEditorChange.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount(){
    !Auth.getToken() || Auth.getUser().verify === false ? this.props.router.replace('/') : this.props.router.replace('/share-idea')
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        image: reader.result,
        imageTitle: file
      });
    }

    reader.readAsDataURL(file)
  }

  onSubmit(e) {
    e.preventDefault()
    // call dispatch to state
    this.props.addIdea(assign(this.state, {UserId: Auth.getUser().sub}))
  }

  onEditorChange(description) {
    this.setState({
      description: draftToHtml(description)
    })
  }

  render() {
    const { title, video, image, category, description, imageTitle} = this.state
    let $imagePreview = null;
    if (image) {
      $imagePreview = (<img src={image} alt={imageTitle} title={imageTitle} className="img-responsive"/>);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
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
                              required
                            />
                          </div>
                          <div className="form-group label-floating">
                            <label className="control-label">Featured Video (Youtube-Link)</label>
                            <input
                              type="url"
                              className="form-control"
                              name="video"
                              value={video}
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
                              className="fileInput" type="file" onChange={(e)=>this._handleImageChange(e)}
                              name="photo"
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

function mapDispatchToProps(dispatch) {
  return {
    addIdea: bindActionCreators(addIdea, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(CreateIdea)
