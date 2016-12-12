
import v4 from 'uuid/v4';

import {
    ADD_IDEA
} from '../constants/actionTypes'

const initialState = [
    {
        title: 'This on Ed Tech 1',
        image: 'https://static.pexels.com/photos/7374/startup-photos.jpg',
        description: 'This is description from the first title',
        slug: 'http:localhost:3000/firstidea',
        id: '1',
        author: 'Ken',
        social: 'http://twitter.com',
        join: '12 December 2016',
        category: 'edTech'
    },
    {
        title: 'Title 2',
        image: 'https://static.pexels.com/photos/7374/startup-photos.jpg',
        description: 'This is description from the Second title',
        slug: 'http:localhost:3000/firstidea',
        id: '2',
        author: 'tama',
        social: 'http://twitter.com',
        join: '12 December 2016',
        category: 'finTech'
    },
    {
        title: 'Title 3',
        image: 'https://static.pexels.com/photos/7374/startup-photos.jpg',
        description: 'This is description from the third title',
        slug: 'http:localhost:3000/firstidea',
        id: '3',
        author: 'juang',
        social: 'http://twitter.com',
        join: '12 December 2016',
        category: 'iot'
    }
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
        default:
            return state;
    }
}

export default ideas