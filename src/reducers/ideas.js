import v4 from 'uuid/v4';

import {
    ADD_IDEA,
    DELETE_IDEA,
    LOAD_ONE_IDEA,
    LOAD_ONE_IDEA_SUCCESS,
    LOAD_ONE_IDEA_FAILURE
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
        category: 'E Commerce'
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
        category: 'Financial Technology'
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
        category: 'Internet of Thing'
    }
]


const ideas = (state = [], action) => {
    switch(action.type){
        case ADD_IDEA:
            return [
                {
                    title: action.payload.title,
                    picture: action.payload.picture,
                    video: action.payload.video,
                    category: action.payload.category
                },
                    ...state
                ]
        default:
            return state
    }
}

export default ideas
