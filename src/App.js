import React from 'react';
// import NavigationAuthorize from './components/Navigation/NavigationAuthorize.js'
import { Router, Route, browserHistory } from 'react-router'
import HelloHome from './components/HelloHome';
// const App = () => <h1> Testing </h1>

const App = () => {
    return (
		<Router history={browserHistory}>
			<Route path="/" component={HelloHome} />
		</Router>
    )
}

export default App