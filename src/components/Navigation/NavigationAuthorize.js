import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-redux'

class NavigationAuthorize extends Component{
  LogOut() {
    console.log('Good Bye!');
    localStorage.removeItem('token');
    browserHistory.push('/')
  }

  render() {
    return (
        <nav className="navbar navbar-transparent navbar-fixed-top navbar-color-on-scroll">
                <div className="container">
                            <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-index">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                            </button>
                            <Link to="/" className="brand logo-container">
                              <img src="http://localhost:3000/assets/img/parneran-logo-small-inline.png" alt="Partneran" role="presentation" />
                            </Link>
                        </div>

                        <div className="collapse navbar-collapse" id="navigation-index">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="text-info">
                                  <Link to="notifications"><i className="material-icons">notifications</i></Link>
                                </li>
                                <li className="text-info">
                                    <Link to="profile"> <i className="material-icons">account_circle</i> My Profile</Link>
                                </li>
                                <li className="text-info">
                                    <Link to="share-idea"> <i className="material-icons">add_circle</i> Share Idea </Link>
                                </li>
                                <li className="text-info">
                                              <Link to="explore"><i className="material-icons">explore</i> Explore</Link>
                      					</li>
                                <li className="text-info">
                                    <a href="#" onClick={this.LogOut.bind(this)}><i className="fa fa-sign-out sign-out" /> Sign Out </a>
                                </li>
                            </ul>
                        </div>
                </div>
            </nav>
    )
  }

}

export default NavigationAuthorize
