import { EDIT_PASSWORD } from '../constants/actionTypes'
import axios from 'axios'

export const editPassword = (password) => 
    ({
        type: EDIT_PASSWORD,
        password: console.log(password)
    })

