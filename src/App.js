import React, { Component } from 'react';
// import NaviationAuthorize from './components/Navigation/NavigationAuthorize';
// import NavigationUnauthorize from './components/Navigation/NavigationUnauthorize';
import NavigationBar from './components/Navigation/NavigationBar';
import { isLoggedIn } from './helpers/verification';

class App extends Component {
  render() {
      return (
        <div>
          <NavigationBar isLoggedIn={isLoggedIn()}/>
          {this.props.children}
        </div>
      )
    }
  }

export default App;
