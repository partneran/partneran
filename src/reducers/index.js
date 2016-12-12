import { combineReducers } from 'redux';
import counter from './counter';
import user from './user.reducer';

const initialState = [
    {
        title: 'test title',
        image: 'https://static.pexels.com/photos/7374/startup-photos.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title: 'test title',
        image: 'https://static.pexels.com/photos/7374/startup-photos.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title: 'test title',
        image: 'https://static.pexels.com/photos/7374/startup-photos.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]

const ideas = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_IDEA':
            return [
                {
                    title: action.payload.title,
                    image: action.payload.image,
                    description: action.payload.description
                },
                ...state
            ]
        default:
            return state
    }
}


const reducers = combineReducers({ counter, user, ideas })

export default reducers

