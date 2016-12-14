import React , { Component } from 'react'

export default class UserCommentData extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <li className="list-group-item">
        <strong>{this.props.comment.User.name}</strong>
        <p>{this.props.comment.User.Roles[0].roles}</p>
      </li>
    )
  }
}
