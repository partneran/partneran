import { ADD_IDEA, LOAD_IDEA } from '../constants/actionTypes'

import axios from 'axios';
import { browserHistory } from 'react-router';

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
