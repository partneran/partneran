import React from 'react';

// const App = () => <h1> Testing </h1>

const App = () => {
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
    				<a href="http://www.creative-tim.com">
    					<div className="logo-container">
    						<div className="brand">
    								Partneran
    						</div>
    					</div>
    				</a>
    			</div>

    			<div className="collapse navbar-collapse" id="navigation-index">
    				<ul className="nav navbar-nav navbar-right">
    					<li>
    						<a href="#" target="_blank">
    							<i className="material-icons">explore</i> Explore
    						</a>
    					</li>

    					<li>
    						<a href="#" target="_blank">
    						</a>
    					</li>
    					<li>
    						<a href="#" target="_blank">
    						</a>
    					</li>
    					<li>
    						<a href="#" target="_blank">
    							<i className="material-icons">account_circle</i> My Profile
    						</a>
    					</li>
    					<li>
    						<a href="#" target="_blank">
    							<i className="material-icons">add_circle</i>
    						</a>
    					</li>
    					<li>
    						<a href="#" target="_blank">
    						</a>
    					</li>

    				</ul>
    			</div>
    	</div>
    </nav>
    )
}

export default App