import React, { Component } from 'react';

class ForgetPasswordForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:""
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit} >
                <div className="header header-info text-center" style={{height:'auto'}}>
                    <h4>Reset your password</h4>
                </div>
                <p className="text-divider">Insert your email</p>
                <div className="content">

                    <div className="input-group">
                        <span className="input-group-addon">
                            <i className="material-icons">email</i>
                        </span>
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Email"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
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

export default ForgetPasswordForm