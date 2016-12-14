import React, { Component } from 'react'
import DataComment from './DataComment'
// import { uniq } from 'lodash'

export default class ListComments extends Component {
  constructor(props){
    super(props)
  }

  render(){
    // console.log(this.props.comments);
    var { data_idea } = this.props
    // console.log('test0', data_idea)
    // console.log(data_idea.Comments)
    let dataComment = data_idea.Comments.reverse().map(comment => {
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
