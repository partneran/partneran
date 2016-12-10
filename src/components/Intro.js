import React from 'react';

const Intro = () => {
    return (
        <div id="intro" className="header header-filter" >
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="title">Write the best title for your page.</h1>
                          <h4>Every landing page needs a small description after the big bold title, that's why we added this text here. Add here all the information that can make you or your product create the first impression.</h4>
                          <br />
                          <button type="button" data-toggle="modal" data-target="#myModal" className="btn btn-info btn-raised btn-lg">
                  <i className="fa fa-play"></i> Watch video
                </button>
              </div>
            </div>
          </div>
      </div>
    )
}

export default Intro
