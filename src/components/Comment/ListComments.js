import React, { Component } from 'react'
import DataComment from './DataComment'
// import { uniq } from 'lodash'

export default class ListComments extends Component {
  render(){
    // console.log(this.props.comments);
    var { data_idea } = this.props
    console.log('this is list of comment data',data_idea)
    let dataComment = data_idea.Comments.map(comment => {
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
