import React from 'react';

const LatestIdea = () => {
    return (
        <div className="container">
            <div className="section text-center">
                <h2>Newest Ideas</h2>
                <div className="row">
                    <div className="col-md-4 text-left">
                      <div className="card thumbnail">

                        <img src="https://images.pexels.com/photos/205316/pexels-photo-205316.png?dl&fit=crop&w=640&h=426" alt="..."  className="img-responsive"/>
                        <div className="caption">
                          <h3>Idea Title</h3>
                          <p>
                            <i className="fa fa-icon fa-user"></i> Ken Duigraha
                            &nbsp;
                            <i className="fa fa-icon fa-tag"></i> Social Network
                            &nbsp;
                            <i className="fa fa-icon fa-calendar"></i> Dec 12th, 2016
                          </p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          <ul className="pager">
                            <li className="next"><a href="#">See Details <span aria-hidden="true">&rarr;</span></a></li>
                          </ul>
                        </div>

                      </div>
                    </div>

                    <div className="col-md-4 text-left">
                      <div className="card thumbnail">

                        <img src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?dl&fit=crop&w=640&h=425" alt="..."  className="img-responsive"/>
                        <div className="caption">
                          <h3>Idea Title</h3>
                          <p>
                            <i className="fa fa-icon fa-user"></i> Ken Duigraha
                            &nbsp;
                            <i className="fa fa-icon fa-tag"></i> Social Network
                            &nbsp;
                            <i className="fa fa-icon fa-calendar"></i> Dec 12th, 2016
                          </p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          <ul className="pager">
                            <li className="next"><a href="#">See Details <span aria-hidden="true">&rarr;</span></a></li>
                          </ul>
                        </div>

                      </div>
                    </div>

                    <div className="col-md-4 text-left">
                      <div className="card thumbnail">

                        <img src="https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg?dl&fit=crop&w=640&h=425" alt="..."  className="img-responsive"/>
                        <div className="caption">
                          <h3>Idea Title</h3>
                          <p>
                            <i className="fa fa-icon fa-user"></i> Ken Duigraha
                            &nbsp;
                            <i className="fa fa-icon fa-tag"></i> Social Network
                            &nbsp;
                            <i className="fa fa-icon fa-calendar"></i> Dec 12th, 2016
                          </p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          <ul className="pager">
                            <li className="next"><a href="#">See Details <span aria-hidden="true">&rarr;</span></a></li>
                          </ul>
                        </div>

                      </div>
                    </div>
                </div>
                <ul className="pager">
                  <li className="next"><a href="#">Explore More <span aria-hidden="true">&rarr;</span></a></li>
                </ul>
            </div>
        </div>
    )
}

export default LatestIdea
