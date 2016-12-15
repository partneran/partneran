import React, { Component } from 'react';
import Footer from '../Footer/Footer'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import CategoryDetail from './CategoryDetail';
// import { isLoggedIn } from '../../helpers/verification';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { editIdea } from '../../actions/idea'
import { bindActionCreators } from 'redux'

// import {
//   convertFromHTML,
//   convertToRaw,
//   ContentState,
// } from 'draft-js';

class EditIdea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.fetchData.hasOwnProperty('id') === true ? this.props.fetchData.title : '',
      video: this.props.fetchData.hasOwnProperty('id') === true ? this.props.fetchData.video : '',
      image: this.props.fetchData.hasOwnProperty('id') === true ? this.props.fetchData.image : '',
      description: this.props.fetchData.hasOwnProperty('id') === true ? this.props.fetchData.description: '',
      category: this.props.fetchData.hasOwnProperty('id') === true ? this.props.fetchData.Category.name : '',
      status: this.props.fetchData.hasOwnProperty('id') === true ? this.props.fetchData.status : '',
      ideaid: this.props.fetchData.hasOwnProperty('id') === true ? this.props.fetchData.id : '',
      imageTitle: ""
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onEditorChange = this.onEditorChange.bind(this)
  }

  onChange(e) {
    console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state);
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
    // console.log(this.state)
    this.props.editIdea(this.state)
  }

  onEditorChange(description) {
    this.setState({
      description: draftToHtml(description)
    })
  }

  render() {
    const { title, video, image, category, description, imageTitle, status} = this.state
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
                                type="file"
                                id="exampleInputFile"
                                onChange={(e)=>this._handleImageChange(e)}
                                required
                              />
                            </div>
                            <br/>
                            <br/>
                              <div className="form-group label-floating">
                                <label className="control-label">Category</label>
                                <CategoryDetail onChange={this.onChange} value={category} selected={category} name="category" />
                              </div>
                            <div className="form-group">
                              <br/>
                              <label>Your Idea Detail</label>
                              <Editor
                                description={description}
                                onChange={this.onEditorChange}
                              />
                            </div>
                            <div className="form-group label-floating">
                              <label className="control-label">Status</label>
                              <select id="dropdown-menu" className="form-control" onChange={this.onChange} value={status} name="status">
                                <option value="Baby">Baby</option>
                                <option value="Kid">Kid</option>
                                <option value="Teenager">Teenager</option>
                                <option value="Mature">Mature</option>
                                <option value="RIP">RIP</option>
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

function mapDispatchToProps(dispatch){
  return {
    editIdea: bindActionCreators(editIdea, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditIdea)
