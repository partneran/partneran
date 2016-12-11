import React from 'react';
import NavigationAuthorize from './NavigationAuthorize';
import NavigationUnauthorize from './NavigationUnauthorize';

const NavigationBar = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <NavigationAuthorize />
    }
    return <NavigationUnauthorize />
}

export default NavigationBar
