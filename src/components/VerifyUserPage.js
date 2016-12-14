import React , { Component } from 'react'
import { verifiedUser } from '../actions/user'
import { bindActionCreators } from 'redux'
import { browserHistory, connect } from 'react-redux'

class VerifyUserPage extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.verifiedUser(this.props.params.token, this.props.router)
    // this.props.router.replace('/')
  }

  render(){
    return(
      <div></div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    verifiedUser: bindActionCreators(verifiedUser, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(VerifyUserPage)
