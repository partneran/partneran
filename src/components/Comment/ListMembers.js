import React , { Component } from 'react'
import UserCommentData from './UserCommentData'
import { uniqBy } from 'lodash'


export default class ListMembers extends Component {
  constructor(props){
    super(props)
  }

  render(){
    let filtered = uniqBy(this.props.membersComment.map(user => user), comment => comment.id)
    console.log('filtersfklasdfkled',uniqBy(this.props.membersComment, comment => comment.User.id))
    let userComment = uniqBy(this.props.membersComment, comment => comment.User.id).map(comment => {
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
