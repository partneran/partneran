import React, { Component } from 'react'
import { addComment } from '../../actions/comment'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class CommentForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      comment: ''
    }
  }

  handleCommentChange(e){
    this.setState({
      comment: e.target.value
    })
  }

  handleSubmitComment(e){
    e.preventDefault()
    let comment = this.state.comment.trim()
    if(!comment){
      return
    }else{
      // addComment(ideaid, content, UserId, IdeaId)
      // console.log(this.props);
      var ideaid = this.props.IdeaId
      var userid = this.props.UserId

      this.props.addComment(this.state.comment, userid, ideaid)

      this.setState({
        comment: ''
      })
    }
  }

  render(){
    return(
      <form onSubmit={this.handleSubmitComment.bind(this)}>
        <div className="form-group">
          <label className="control-label">Your Comment</label>
          <textarea className="form-control" rows={4} placeholder="Tell us what do you think about this idea" value={this.state.comment} onChange={this.handleCommentChange.bind(this)}></textarea>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-info">Submit</button>
        </div>
      </form>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    addComment: bindActionCreators(addComment, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(CommentForm)
