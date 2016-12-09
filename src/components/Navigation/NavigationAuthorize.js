import React from 'react';
import { Link } from 'react-router';

const NavigationAuthorize = () => {
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
                            <Link to="/" className="brand logo-container">Parneran</Link>
                        </div>

                        <div className="collapse navbar-collapse" id="navigation-index">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <Link to="profile"> <i className="material-icons">account_circle</i> My Profile</Link>
                                </li>
                                <li>
                                    <Link to="share-idea"> <i className="material-icons">add_circle</i> Share Idea </Link>
                                </li>
                                <li>
                                    <Link to="signout"> Signout </Link>
                                </li>
                            </ul>
                        </div>
                </div>
            </nav>
    )
}

export default NavigationAuthorize