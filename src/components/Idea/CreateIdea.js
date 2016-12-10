import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

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
                        <label className="control-label">Featured Video (Youtube-Link)</label>
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
                      <div className="form-group">
                        <br/>
                        <label>Your Idea Detail</label>
                        <Editor/>
                      </div>

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

export default CreateIdea;
