import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../actions/user';

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state={
            email:"",
            password:""
        }
        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault()
        this.props.login(this.state)
        // console.log(this.state)
    }

  render() {
    return (
          <div className="card card-signup">
            <form className="form" onSubmit={this.onSubmit}>
                <div className="header header-info text-center" style={{height:'auto'}}>
                    <h4>LOGIN</h4>
                    <div className="social-line">
                        <a href="#pablo" className="btn btn-simple btn-just-icon">
                            <i className="fa fa-facebook-square"></i>
                        </a>
                    </div>
                </div>
                <p className="text-divider">Or Be clasical</p>
                <div className="content">

                <div className="input-group">
                    <span className="input-group-addon"> <i className="material-icons">email</i> </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Email..."
                        name="email"
                        onChange={this.onChange}
                        value={this.state.email}
                    />
                </div>

                <div className="input-group">
                <span className="input-group-addon"> <i className="material-icons">lock_outline</i> </span>
                <input
                    type="password"
                    placeholder="Password..."
                    className="form-control"
                    name="password"
                    onChange={this.onChange}
                    value={this.state.password}
                />
                </div>

                </div>
                <div className="footer text-center">
                    <Link to="signup" className="btn btn-simple btm-sm btn-info"> Don't have account? Signup Now! </Link>
                    <Link to="forget-password" className="btn btn-simple btm-sm btn-info"> Forget Password? </Link>
                    <button className="btn btn-info btn-lg"> Login</button>
                </div>
            </form>
          </div>
    )
  }
}

// function mapStateToProps(state) {
//   return {
//     state
//   }
// }

function mapDispatchToProps(dispatch) {
  return {
    login: bindActionCreators(login, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(LoginForm)