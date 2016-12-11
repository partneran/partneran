import React from 'react';
import NavigationAuthorize from './NavigationAuthorize';
import NavigationUnauthorize from './NavigationUnauthorize';
// import { isLoggedIn } from '../../helpers/verification';
// console.log(isLoggedIn)

// cannot be like this because it mutate state
const NavigationBar = () => {

    if(true) {
        return <NavigationAuthorize />
    }
    return <NavigationUnauthorize />
}

export default NavigationBar
