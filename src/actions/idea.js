import {
  ADD_IDEA,
  ADD_IDEA_FAILURE,
  ADD_IDEA_SUCCESS,
  LOAD_IDEA,
  LOAD_ONE_IDEA,
  LOAD_ONE_IDEA_SUCCESS,
  LOAD_ONE_IDEA_FAILURE,
  LOAD_ALL_IDEAS,
  LOAD_IDEAS_FAILURE,
  LOAD_IDEAS_SUCCESS,
  DELETE_IDEA_SUCCESS,
  FETCH_IDEA
} from '../constants/actionTypes'

import axios from 'axios';
import { browserHistory } from 'react-router';
import request from 'superagent'
import slug from 'slug'

const uri = 'http://localhost:8080/api/ideas/'

// Add Idea

export function addData(payload){
    console.log('from action', payload)
  return {type: ADD_IDEA, payload}
}

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
    console.log('above first dispatch', idea)
    return dispatch => {
        console.log(idea)
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
                        browserHistory.push(`/${res.body.slug}`)
                        dispatch(addIdeaSuccess(res.body))

                    }
                })
    }
}

// Load Idea

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
  console.log(slug);
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

// delete idea
let deleteIdeaSuccess = (id) => ({
  type: DELETE_IDEA_SUCCESS,
  id: id
})

export const deleteIdea = (ideaid, router) => {
  // console.log(ideaid
  return dispatch => {
    return request
          .del(uri+ideaid)
          .end((err, res) => {
            if(err){
              console.log(err);
            }else{

              router.replace('/explore')
              dispatch(deleteIdeaSuccess(ideaid))
            }
          })
  }
}

//edit idea
export const fetchData = (dataIdea) => ({
  type: FETCH_IDEA,
  dataIdea: dataIdea
})

export const editIdea = (idea) => {
  console.log(idea);
  return dispatch => {
    // dispatch(editIdea(idea))
    // new_idea.title = req.body.title
    // new_idea.description = req.body.description
    // new_idea.image = req.body.image
    // new_idea.video = req.body.video
    return request
            .put(uri + idea.ideaid)
            .set('Accept', 'application/json')
            .type('form')
            .send({
              title: idea.title,
              description: idea.description,
              image: idea.image,
              video: idea.video,
              status: idea.status,
              category: idea.category 
            })
            .end((err, res) => {
                if(err){
                    console.log(err);
                    // dispatch(editIdeaFailure())
                } else {
                    browserHistory.push(slug(idea.title))
                    // dispatch(editIdeaSuccess(res.body))
                }
            })
  }
}


// Load ideas

const loadData = () =>
  ({
    type: LOAD_ALL_IDEAS
  })

const loadIdeasSuccess = (ideas) =>
  ({
    type: LOAD_IDEAS_SUCCESS,
    ideas: ideas
  })

const loadIdeasFailure = () =>
  ({
    type: LOAD_IDEAS_FAILURE
  })

export const loadIdeas = () => {
  return dispatch => {
          dispatch(loadData())
          return request
                  .get(uri)
                  .set('Accept', 'application/json')
                  .end((err, res) => {
                    err? console.error(err) : dispatch(loadIdeasSuccess(res.body))
                  })
  }
}

// export function loadData(){
//   return {type: types.LOAD_TIMELINE}
// }

// export function loadTimelinesSuccess(timelines){
//   return {type: types.LOAD_TIMELINES_SUCCESS, timelines}
// }

// export function loadTimelinesFailure(){
//   return {type: types.LOAD_TIMELINES_FAILURE}
// }

// export function loadTimelines(){
//   return dispatch => {
//     dispatch(loadData())
//     return request
//           .get(TIMELINES_URL)
//           .set('Accept', 'application/json')
//           .end((err, res) => {
//             if(err){
//               console.error(err);
//               dispatch(loadTimelinesFailure())
//             }else{
//               dispatch(loadTimelinesSuccess(res.body))
//             }
//           })
//   }
// }


// export const loadAllIdeas = () =>
//   ({
//     type: LOAD_ALL_IDEAS,
//     ideas : request
//                 .get(uri)
//                 .end((err, res) => err ? console.err(err) : console.log(res))
//   })
