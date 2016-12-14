const initialState = ['Please choose one', 'E-Commerce', 'EdTech', 'FinTech', 'IoT', 'Art & Culture', 'Agriculture', 'Health & Lifestyle', 'On Demand Service', 'Games', 'Software', 'Mobile']

const categories = (state = initialState, action) => {
    switch(action.type){
        case 'SHOW_CATEGORIES':
            return state
        default:
            return state
    }
}

export default categories