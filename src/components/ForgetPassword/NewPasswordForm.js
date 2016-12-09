import React, { Component } from 'react';

class NewPasswordForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password:"",
            passwordConfirmation: ""
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <form className="form" method="" action="" onSubmit={this.onSubmit}>
                <div className="header header-info text-center" style={{height:'auto'}}>
                    <h4>Reset Password</h4>
                </div>
                <p className="text-divider">Insert Your New Password</p>
                <div className="content">

                    <div className="input-group">
                        <span className="input-group-addon">
                            <i className="material-icons">unlock</i>
                        </span>
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="New Password"
                            name="password"
                            onChange={this.onChange}
                            value={this.state.password} 
                        />
                    </div>

                    <div className="input-group">
                        <span className="input-group-addon">
                            <i className="material-icons">unlock</i>
                        </span>
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Password Confirmation" 
                            name="passwordConfirmation"
                            onChange={this.onChange}
                            value={this.state.passwordConfirmation}
                        />
                    </div>

                </div>
                <div className="footer text-center">
                    <button className="btn btn-info btn-lg">Send reset password link</button>
                </div>
            </form>
        )
    }
}

export default NewPasswordForm