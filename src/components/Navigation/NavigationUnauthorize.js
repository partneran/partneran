import React from 'react';
import { Link } from 'react-router';

const NavigationUnauthorize = () => {
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
              <img alt="Partneran" role="presentation" src="assets/img/parneran-logo-small-inline.png" />
            </Link>
    			</div>

    			<div className="collapse navbar-collapse" id="navigation-index">
    				<ul className="nav navbar-nav navbar-right">
    					<li className="text-info">
                            <Link to="explore"><i className="material-icons">explore</i> Explore</Link>
    					</li>
    					<li className="text-info">
                            <Link to="login"><i className="fa fa-sign-in sign-in" /> Sign In </Link>
    					</li>
    					<li className="text-info">
                            <Link to="signup"><i className="fa fa-user-plus user-plus" /> Sign Up </Link>
    					</li>
    				</ul>
    			</div>
    	</div>
    </nav>
    )
}

export default NavigationUnauthorize