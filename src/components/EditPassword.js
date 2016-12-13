import React, { Component } from 'react';
import Footer from './Footer/Footer'
import ReactDOM from 'react-dom'
// import { isLoggedIn } from '../../helpers/verification';

// import {
//   convertFromHTML,
//   convertToRaw,
//   ContentState,
// } from 'draft-js';

class EditPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      oldpassword: "",
      password: "",
      confirmPassword: "",
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  _validate() {
    if(this.state.password !== this.state.confirmPassword) {
      alert('password do not match')
      return ReactDOM.findDOMNode(this.refs.confirmPassword).focus();
    }
  }
  onSubmit(e) {
    e.preventDefault()
    if(this.state.password !== this.state.confirmPassword) {
      alert('password do not match')
      return ReactDOM.findDOMNode(this.refs.confirmPassword).focus();
    }
    // call dispatch to state
    console.log(this.state)
  }

  render() {
    const { oldpassword, password, confirmPassword } = this.state
    // isLoggedIn()
    return (
        <div className="components-page">
          <div className="wrapper">
            <div id="new-idea-intro" className="header header-filter">
              <div className="container">
                <div className="row text-center">
                  <h1 className="title">Edit Password</h1>
                  <h5>Change password of your account</h5>
                </div>
              </div>
            </div>
            <div className="main">
              <div className="container">
                <div className="row">
                  <div className="card form-card">
                    <div className="card-header" data-background-color="blue">
                      <h4 className="title">Edit Password</h4>
                    </div>
                    <div className="card-signup">
                      <div className="container">
                        <form onSubmit={this.onSubmit}>
                          <div className="form-group label-floating">
                            <label className="control-label">New Password</label>
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              value={password}
                              onChange={this.onChange}
                              required
                            />
                          </div>
                          <div className="form-group label-floating">
                            <label className="control-label">Confirm New Password</label>
                            <input
                              type="password"
                              className="form-control"
                              ref="confirmPassword"
                              name="confirmPassword"
                              value={confirmPassword}
                              onChange={this.onChange}
                              required
                            />
                          </div>

                          <div className="form-group">
                            <button type="submit" className="btn btn-info">Submit</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
    )
  }
}


export default EditPassword;
