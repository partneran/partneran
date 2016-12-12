const initialState = ['Please choose one', 'E-Commerce', 'Education Technology', 'Financial Technology', 'Internet of Thing', 'Art and Culture', 'Agriculture', 'Health and Lifestyle', 'On Demand Service', 'Games', 'Software', 'Mobile']

const categories = (state = initialState, action) => {
    switch(action.type){
        case 'SHOW_CATEGORIES':
            return state
        default:
            return state
    }
}

export default categories