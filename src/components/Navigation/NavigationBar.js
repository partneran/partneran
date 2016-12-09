import React from 'react';
import NavigationAuthorize from './NavigationAuthorize';
import NavigationUnauthorize from './NavigationUnauthorize';

const isAuthorize = false

const NavigationBar = () => {
    if(isAuthorize) {
        return <NavigationAuthorize />
    }
    return <NavigationUnauthorize />
}

export default NavigationBar