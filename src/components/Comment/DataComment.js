import React, { Component } from 'react'

export default class DataComment extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <li className="list-group-item">
        <strong>{this.props.comment.User.name} said:</strong>
        <p>{this.props.comment.content}</p>
      </li>
    )
  }
}
