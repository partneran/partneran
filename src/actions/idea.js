import {
  ADD_IDEA,
  ADD_IDEA_FAILURE,
  ADD_IDEA_SUCCESS,
  LOAD_IDEA,
  LOAD_ONE_IDEA,
  LOAD_ONE_IDEA_SUCCESS,
  LOAD_ONE_IDEA_FAILURE 
} from '../constants/actionTypes'

import axios from 'axios';
import { browserHistory } from 'react-router';
import request from 'superagent'

const uri = 'http://localhost:8080/api/ideas/'

// Add Idea

export const addData = (data) =>
    ({
        type: ADD_IDEA,
        data: data
    })

export const addIdeaFailure = () =>
    ({
        type: ADD_IDEA_FAILURE
    })

export const addIdeaSuccess = (idea) =>
    ({
        type: ADD_IDEA_SUCCESS,
        idea: idea
    })

export const addIdea = (idea) => {
    console.log(idea)
    return dispatch => {
        dispatch(addData(idea))
        return request
                .post(uri)
                .set('Accept', 'application/json')
                .type('form')
                .send({
                    UserId: idea.UserId,
                    category: idea.category,
                    description: idea.description,
                    image: idea.image,
                    title: idea.title,
                    video: idea.video
                })
                .end((err, res) => {
                    if(err){
                        console.log(err);
                        dispatch(addIdeaFailure())
                    } else {
                        console.log('res', res.body)
                        dispatch(addIdeaSuccess(res.body))
                    }
                })
    }
}

export const loadIdea = () =>
({
    type: LOAD_IDEA,
    data: axios
            .get(uri)
            .then(res => console.log('ini response', res))
            .catch(err => console.log(err))
})

let loadStateOneIdea = (data) => ({
  type: LOAD_ONE_IDEA,
  data: data
})

let loadOneIdeFailure = () => ({
  type: LOAD_ONE_IDEA_FAILURE
})

let loadOneIdeaSuccess = (idea) => ({
  type: LOAD_ONE_IDEA_SUCCESS,
  idea: idea
})

export const loadOneIdea = (slug) => {
  // console.log(slug);
  var data = {
    title : "",
    createdAt: new Date(),
    User: {
      name: ""
    }
  }
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
