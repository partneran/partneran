import React, { Component } from 'react'
import LoginForm from './LoginForm'
import Footer from '../Footer/Footer'
import Auth from '../../helpers/token'


class LoginPage extends Component {
  componentDidMount(){
    !Auth.getToken() ? this.props.router.replace('/login') : this.props.router.replace('/explore')
  }

  render() {
    return (
      <div className="signup-page">
      <div className="wrapper">
          <div className="header header-filter" style={{backgroundImage: 'url(../assets/img/city.jpg)', backgroundSize: 'cover', backgroundPosition: 'top center'}}>
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
                  <LoginForm />
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

export default LoginPage
