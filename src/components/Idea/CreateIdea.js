import React, { Component } from 'react';
import 'jquery/dist/jquery.min.js'
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles

// Import bootstrap(v3 or v4) dependencies

import 'bootstrap/js/modal';
import 'bootstrap/js/dropdown';
import 'bootstrap/js/tooltip';
import 'bootstrap/dist/css/bootstrap.css';

const CreateIdea = () => {
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
                    <form encType="multipart/form-data">
                      <div className="form-group label-floating">
                        <label className="control-label">Your Idea's Title</label>
                        <input type="text" className="form-control" required />
                      </div>
                      <div className="form-group label-floating">
                        <label className="control-label">Featured Video (Youtube Link)</label>
                        <input type="text" className="form-control" required />
                      </div>
                      <div className="form-group label-floating">
                        <div className="col-md-10 no-padding-left">
                        <input type="text" className="form-control" placeholder="Featured Image URL"/>
                        </div>
                        <div className="col-md-2 no-padding-left">
                        <label className="btn btn-info btn-sm">Upload Image</label>
                        <input type="file" id="exampleInputFile" required/>
                        </div>
                      </div>
                      <RichTextEditor/>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

class RichTextEditor extends Component {
  onChange(content) {
    console.log('onChange', content);
  }

  render() {
    return (
      <ReactSummernote
        value="Default value"
        options={{
          height: 350,
          dialogsInBody: true,
          toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'underline', 'clear']],
            ['fontname', ['fontname']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['table', ['table']],
            ['insert', ['link', 'picture', 'video']],
            ['view', ['fullscreen', 'codeview']]
          ]
        }}
        onChange={this.onChange}
      />
    );
  }
}

export default CreateIdea;
