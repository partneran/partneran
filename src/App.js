import React, { Component } from 'react';
// import NaviationAuthorize from './components/Navigation/NavigationAuthorize';
// import NavigationUnauthorize from './components/Navigation/NavigationUnauthorize';
import NavigationBar from './components/Navigation/NavigationBar';
import { isLoggedIn } from './helpers/verification';
import { connect } from 'react-redux'
import { loadIdea } from './actions/idea'
import { bindActionCreators } from 'redux'
// console.log(isLoggedIn())

class App extends Component {
  componentDidMount() {
    console.log(this.props.ideas)
    this.props.loadIdea()
  }

  render() {
      return (
        <div>
          <NavigationBar isLoggedIn={isLoggedIn()}/>
          {this.props.children}
        </div>
      )
    }
  }

function mapStateToProps(state) {
  return {
    ideas: state.ideas
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadIdea: bindActionCreators(loadIdea, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)