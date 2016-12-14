import React , { Component } from 'react'
import UserCommentData from './UserCommentData'

export default class ListMembers extends Component {
  constructor(props){
    super(props)
  }

  render(){
    let userComment = this.props.membersComment.map(comment => {
      return(
        <UserCommentData key={comment.id} comment={comment}/>
      )
    })
    return(
      <div className="row">
        <h2>Member List</h2>
          <ul className="list-group">
            {userComment}
          </ul>
      </div>
    )
  }
}
