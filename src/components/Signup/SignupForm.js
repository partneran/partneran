import React, { Component } from 'react';
import { Link } from 'react-router';

class SignupForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: "",
			email: "",
			password: "",
			passwordConfirmation: ""
		}

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault()
		if(this.state.password.length <= 8) {
			return console.log('the password must contains at least 8 characters ')
		}
		console.log(this.state)
		// set the action to communicate with server
	}

  render() {
    return (
          <div className="card card-signup">
            <form className="form" onSubmit={this.onSubmit} >
								<div className="header header-info text-center" style={{height:'auto'}}>
									<h4>Sign Up</h4>
									<div className="social-line">
										<a href="#pablo" className="btn btn-simple btn-just-icon">
											<i className="fa fa-facebook-square"></i>
										</a>
									</div>
								</div>
								<p className="text-divider">Confirm The Detail</p>
								<div className="content">

									<div className="input-group">
										<span className="input-group-addon">
											<i className="material-icons">face</i>
										</span>
										<input
                      type="text"
                      className="form-control"
                      placeholder="Name"
											name="name"
											value={this.state.name}
											onChange={this.onChange}
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
											name="email"
											value={this.state.email}
											onChange={this.onChange}
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
											name="password"
											value={this.state.password}
											onChange={this.onChange}
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
											name="passwordConfirmation"
											value={this.state.passwordConfirmation}
											onChange={this.onChange}
                    />
									</div>

								</div>
								<div className="footer text-center">
                  <Link to="login" className="btn btn-simple btm-sm btn-info"> Already have an account? Sign In here </Link>
									<button className="btn btn-info btn-lg">
            				Sign up
          				</button>
								</div>
							</form>
            </div>
    )
  }
}

export default SignupForm
