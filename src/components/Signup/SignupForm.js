import React, { Component } from 'react';
// import { browserHistory } from 'react-router';

class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfimation: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault()
    alert(this.state)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Sign Up Now </h1>
        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            value={this.state.username}
            onChange={this.onChange}
            type="text"
            name="username"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="control-label">email</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type="email"
            name="email"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            name="password"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Password Confimation</label>
          <input
            value={this.state.passwordConfimation}
            onChange={this.onChange}
            type="password"
            name="passwordConfimation"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-md">
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

export default SignupForm;