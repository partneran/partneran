import React, { Component } from 'react';
import { Link } from 'react-router';

class SignupForm extends Component {

  render() {
    return (
            <form className="form">
								<div className="header header-info text-center" style={{height:'auto'}}>
									<h4>Sign Up</h4>
									<div className="social-line">
										<a href="#pablo" className="btn btn-simple btn-just-icon">
											<i className="fa fa-facebook-square"></i>
										</a>
									</div>
								</div>
								<p className="text-divider">Or Be classNameical</p>
								<div className="content">

									<div className="input-group">
										<span className="input-group-addon">
											<i className="material-icons">face</i>
										</span>
										<input 
                      type="text" 
                      className="form-control" 
                      placeholder="Name" 
                    />
									</div>

									<div className="input-group">
										<span className="input-group-addon">
											<i className="material-icons">email</i>
										</span>
										<input 
                      type="text" 
                      className="form-control" 
                      placeholder="Email..." 
                    />
									</div>

									<div className="input-group">
										<span className="input-group-addon">
											<i className="material-icons">lock_outline</i>
										</span>
										<input 
                      type="password" 
                      placeholder="Password..." 
                      className="form-control" 
                    />
									</div>

                  <div className="input-group">
										<span className="input-group-addon">
											<i className="material-icons">lock_outline</i>
										</span>
										<input 
                      type="password" 
                      placeholder="Confirm your password..." 
                      className="form-control" 
                    />
									</div>

								</div>
								<div className="footer text-center">
                  <Link to="login" className="btn btn-simple btm-sm btn-info"> Already have an account? Sign In here </Link>
									<a href="#pablo" className="btn btn-info btn-lg">Sign Up</a>
								</div>
							</form>
    )
  }
}

export default SignupForm