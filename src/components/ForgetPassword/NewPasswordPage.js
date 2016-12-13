import React, { Component } from 'react';
import NewPasswordForm from './NewPasswordForm';
import Footer from '../Footer/Footer';

class NewPasswordPage extends Component {
  constructor(props){
    super(props)
  }
    render() {
      return (
        <div className="signup-page">
            <div className="wrapper">
                <div className="header header-filter" style={{backgroundImage: 'url(../assets/img/city.jpg)', backgroundSize: 'cover', backgroundPosition: 'top center'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
                                <div className="card card-signup">
                                    <NewPasswordForm token={this.props.params.token}/>
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

export default NewPasswordPage
