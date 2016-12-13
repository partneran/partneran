
import v4 from 'uuid/v4';

import {
    ADD_IDEA,
    DELETE_IDEA,
    LOAD_IDEA
} from '../constants/actionTypes'

const initialState = [
    // {
    //     title: 'This on Ed Tech 1',
    //     image: 'https://static.pexels.com/photos/7374/startup-photos.jpg',
    //     description: 'This is description from the first title',
    //     slug: 'http:localhost:3000/firstidea',
    //     id: '1',
    //     author: 'Ken',
    //     social: 'http://twitter.com',
    //     join: '12 December 2016',
    //     category: 'E Commerce'
    // },
    // {
    //     title: 'Title 2',
    //     image: 'https://static.pexels.com/photos/7374/startup-photos.jpg',
    //     description: 'This is description from the Second title',
    //     slug: 'http:localhost:3000/firstidea',
    //     id: '2',
    //     author: 'tama',
    //     social: 'http://twitter.com',
    //     join: '12 December 2016',
    //     category: 'Financial Technology'
    // },
    // {
    //     title: 'Title 3',
    //     image: 'https://static.pexels.com/photos/7374/startup-photos.jpg',
    //     description: 'This is description from the third title',
    //     slug: 'http:localhost:3000/firstidea',
    //     id: '3',
    //     author: 'juang',
    //     social: 'http://twitter.com',
    //     join: '12 December 2016',
    //     category: 'Internet of Thing'
    // }
]




const idea = (state = {}, action) => {
    switch(action.type){
        case ADD_IDEA:
            return {
                idea_id: v4(),
                title: action.payload.title,
                picture: action.payload.picture,
                video: action.payload.video,
                category: action.payload.category
            }
        case DELETE_IDEA:
            return {}
        default:
            return state
    }
}

const ideas = (state = initialState, action) => {
    switch(action.type){
        case ADD_IDEA:
            return [
                ...state,
                idea(undefined, action)
            ]
        case LOAD_IDEA:
            return [
                ...state, 
                {
                     title: 'This on Ed Tech 1',
        image: 'https://static.pexels.com/photos/7374/startup-photos.jpg',
        description: 'This is description from the first title',
        slug: 'http:localhost:3000/firstidea',
        id: '1',
        author: 'Ken',
        social: 'http://twitter.com',
        join: '12 December 2016',
        category: 'E Commerce'
                }
            ]
        default:
            return state;
    }
}

export default ideas