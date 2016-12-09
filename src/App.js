import React, { Component } from 'react';
import NavigationAuthorize from './components/Navigation/NavigationAuthorize';
// import NavigationUnauthorize from './components/Navigation/NavigationUnauthorize';




class App extends Component {
  render() {
      return (
        <div className='container'>
          <NavigationAuthorize />
          {this.props.children}
        </div>
      )
    }
  }

export default App;