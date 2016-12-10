import React from 'react';

const Intro = () => {
    return (
        <div id="intro" className="header header-filter" >
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="title">Your idea is a start of something great . . .</h1>
                          <h4>Each of us has a strength to make a difference and change the world. Don't let your idea for yourself, share it, find your partner, and collaborate with them to give a great impact to the society!</h4>
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
