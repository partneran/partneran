import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signup } from '../../actions/user';
import R from 'ramda';

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
		// validation
		if(this.state.password !== this.state.passwordConfirmation){
			// lacking popup

			return ReactDOM.findDOMNode(this.refs.passwordConfirmation).focus();
		}
		this.props.signup(R.omit(['passwordConfirmation'], this.state))
	}

  render() {
    return (
          <div className="card card-signup">
            <form className="form" onSubmit={this.onSubmit}  >
								<div className="header header-info text-center" style={{height:'auto'}}>
									<h4>Sign Up</h4>
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
                      type="email"
                      className="form-control"
                      placeholder="Email..."
											name="email"
											value={this.state.email}
											onChange={this.onChange}
											required
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
											pattern=".{8,}"
											required title="Minimum Password is 8 Characters"
                    />
									</div>

                  <div className="input-group">
										<span className="input-group-addon">
											<i className="material-icons">lock_outline</i>
										</span>
										<input
                      type="password"
                      placeholder="Confirm your password..."
											ref="passwordConfirmation"
                      className="form-control"
											name="passwordConfirmation"
											value={this.state.passwordConfirmation}
											onChange={this.onChange}
											// add popup
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

function mapStateToProps(state) {
  return {
    state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signup: bindActionCreators(signup, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
