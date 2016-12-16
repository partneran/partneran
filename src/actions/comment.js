import {
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE
} from '../constants/actionTypes'
import request from 'superagent'

const uri = 'http://api.partneran.net/api/ideas/'

function addCommentSuccess(comment){
  return {type: ADD_COMMENT_SUCCESS, comment}
}

function addCommentFailure(){
  return {type: ADD_COMMENT_FAILURE}
}

export function addComment(content, UserId, IdeaId){
  return dispatch => {
    return request
          .post(uri+IdeaId+"/comments")
          .set('Accept', 'application/json')
          .type('form')
          .send({
            content: content,
            UserId: UserId,
            IdeaId: IdeaId
          })
          .end((err, res) => {
            if(err){
              console.error(err);
              dispatch(addCommentFailure())
            }else{
              dispatch(addCommentSuccess(res.body))
            }
          })
  }
}
