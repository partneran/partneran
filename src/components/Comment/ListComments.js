import React, { Component } from 'react'
import DataComment from './DataComment'

export default class ListComments extends Component {
  constructor(props){
    super(props)
  }
  render(){
    // console.log(this.props.comments);
    var { comments } = this.props

    let dataComment = comments.map(comment => {
      return(
        <DataComment key={comment.id} comment={comment}/>
      )
    })

    return(
        <div className="row">
          <h2>Comment List</h2>
          <div className="comment-list">
            <ul className="list-group">
              {dataComment}
            </ul>
          </div>
        </div>
    )
  }
}
