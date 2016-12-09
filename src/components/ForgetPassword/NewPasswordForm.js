import React, { Component } from 'react';

class NewPasswordForm extends Component {

    render() {
        return (
            <form className="form" method="" action="">
                <div className="header header-info text-center" style={{height:'auto'}}>
                    <h4>Reset Password</h4>
                </div>
                <p className="text-divider">Insert Your New Password</p>
                <div className="content">

                    <div className="input-group">
                        <span className="input-group-addon">
                            <i className="material-icons">unlock</i>
                        </span>
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>

                    <div className="input-group">
                        <span className="input-group-addon">
                            <i className="material-icons">unlock</i>
                        </span>
                        <input type="password" className="form-control" placeholder="Password Confirmation" />
                    </div>

                </div>
                <div className="footer text-center">
                    <a href="#pablo" className="btn btn-info btn-lg">Send reset password link</a>
                </div>
            </form>
        )
    }
}

export default NewPasswordForm