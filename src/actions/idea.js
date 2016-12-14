import { ADD_IDEA, LOAD_IDEA, LOAD_ONE_IDEA_SUCCESS, LOAD_ONE_IDEA_FAILURE } from '../constants/actionTypes'

import axios from 'axios';
import { browserHistory } from 'react-router';
import request from 'superagent'

const uri = 'http://localhost:8080/api/ideas/'

export const addIdea = (idea) =>
    ({
        type: ADD_IDEA,
        idea: axios
                .post(uri, {
                    UserId: idea.UserId,
                    category: idea.category,
                    description: idea.description,
                    image: idea.image,
                    title: idea.title,
                    video: idea.video
                })
                .then(res => {
                    console.log(res.data.length-1)
                    // waiting the slug from server

                    browserHistory.push(`/explore`)
                })
                .catch(err => console.log(err))
    })

export const loadIdea = () =>
({
    type: LOAD_IDEA,
    data: axios
            .get(uri)
            .then(res => console.log('ini response', res))
            .catch(err => console.log(err))
})

let loadOneIdeFailure = () => ({
  type: LOAD_ONE_IDEA_FAILURE
})

let loadOneIdeaSuccess = (one_idea) => ({
  type: LOAD_ONE_IDEA_SUCCESS,
  one_idea: one_idea
})

export const loadOneIdea = (slug) => {
  // console.log(slug);

  return dispatch => {
    return request
          .get(uri+slug)
          .set('Accept', 'application/json')
          .end((err, res) => {
            if(err){
              dispatch(loadOneIdeFailure(err))
            }else{
              dispatch(loadOneIdeaSuccess(res.body))
            }
          })
  }
}
