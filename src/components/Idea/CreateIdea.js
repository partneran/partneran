import React from 'react';

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
              <form encType="multipart/form-data">
                <div className="form-group label-floating">
                  <label className="control-label">Your Idea's Title</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="form-group label-floating">
                  <label >Upload Feautured Image</label>
                  <input type="file" id="exampleInputFile" />
                  <p className="help-block">Example block-level help text here.</p>
                </div>
                <div className="form-group label-floating">
                  <label className="control-label">Featured Video</label>
                  <input type="text" className="form-control" required />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateIdea;
