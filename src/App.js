import React, { Component } from 'react';
// import NaviationAuthorize from './components/Navigation/NavigationAuthorize';
// import NavigationUnauthorize from './components/Navigation/NavigationUnauthorize';
import NavigationBar from './components/Navigation/NavigationBar';




class App extends Component {
  render() {
      return (
        <div className='container'>
          <NavigationBar />
          {this.props.children}
        </div>
      )
    }
  }

export default App;