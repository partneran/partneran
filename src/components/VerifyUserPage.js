import React , { Component } from 'react'
import { verifiedUser } from '../actions/user'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class VerifyUserPage extends Component {

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
