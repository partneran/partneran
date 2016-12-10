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
                        <label className="btn btn-info btn-sm">Upload Feautured Image</label>
                        <input type="file" id="exampleInputFile" />
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
