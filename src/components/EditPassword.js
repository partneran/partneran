import React, { Component } from 'react'
import Footer from './Footer/Footer'
import ReactDOM from 'react-dom'
import { newPassword } from '../actions/user'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Auth from '../helpers/token'

class EditPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      password: "",
      confirmPassword: "",
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount(){
    !Auth.getToken() ? this.props.router.replace('/login') : this.props.router.replace('/edit-password')
  }

  onSubmit(e) {
    e.preventDefault()
    if(this.state.password !== this.state.confirmPassword) {
      alert('Password do not match')
      return ReactDOM.findDOMNode(this.refs.confirmPassword).focus();
    }
    // call dispatch to state
    this.props.newPassword(this.state.password)
  }

  render() {
    const {password, confirmPassword } = this.state
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
                              pattern=".{8,}"
											        required title="Minimum Password is 8 Characters"
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
                              pattern=".{8,}"
											        required title="Minimum Password is 8 Characters"
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

function mapDispatchToProps(dispatch) {
  return {
    newPassword: bindActionCreators(newPassword, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(EditPassword)
