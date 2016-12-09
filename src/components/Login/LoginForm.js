import React, { Component } from 'react';
import { Link } from 'react-router';

class LoginForm extends Component {

  render() {
    return (
            <form className="form">
                <div className="header header-info text-center" style={{height:'auto'}}>
                    <h4>LOGIN</h4>
                    <div className="social-line">
                        <a href="#pablo" className="btn btn-simple btn-just-icon">
                            <i className="fa fa-facebook-square"></i>
                        </a>
                    </div>
                </div>
                <p className="text-divider">Or Be classNameical</p>
                <div className="content">

                <div className="input-group">
                    <span className="input-group-addon"> <i className="material-icons">email</i> </span>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Email..." 
                    />
                </div>
                
                <div className="input-group">
                <span className="input-group-addon"> <i className="material-icons">lock_outline</i> </span>
                <input 
                    type="password" 
                    placeholder="Password..." 
                    className="form-control" 
                />
                </div>

                </div>
                <div className="footer text-center">
                    <Link to="signup" className="btn btn-simple btm-sm btn-info"> Don't have account? Signup Now! </Link>
                    <a href="#pablo" className="btn btn-info btn-lg"> Login</a>
                </div>
            </form>
    )
  }
}

export default LoginForm