import React, { Component } from 'react';

class ForgetPasswordForm extends Component {

    render() {
        return (
            <form className="form" method="" action="">
                <div className="header header-info text-center" style={{height:'auto'}}>
                    <h4>Reset your password</h4>
                </div>
                <p className="text-divider">Insert your email</p>
                <div className="content">

                    <div className="input-group">
                        <span className="input-group-addon">
                            <i className="material-icons">email</i>
                        </span>
                        <input type="text" className="form-control" placeholder="Email..." />
                    </div>

                </div>
                <div className="footer text-center">
                    <a href="#pablo" className="btn btn-info btn-lg">Send reset password link</a>
                </div>
            </form>
        )
    }
}

export default ForgetPasswordForm