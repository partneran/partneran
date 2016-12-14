import { ADD_IDEA, ADD_IDEA_SUCCESS, ADD_IDEA_FAILURE } from '../constants/actionTypes'
import request from 'superagent'
const uri = 'http://localhost:8080/api/ideas/'


// --------------------------------
// addData
// --------------------------------

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
                        dispatch(addIdeaSuccess(res.body))
                    }
                })
    }
}