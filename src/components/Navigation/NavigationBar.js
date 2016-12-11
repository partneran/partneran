import React from 'react';
import NavigationAuthorize from './NavigationAuthorize';
import NavigationUnauthorize from './NavigationUnauthorize';
import Auth from '../../helpers/token';

const isAuthorize = Auth.getUser()

const NavigationBar = () => {
    if(isAuthorize) {
        return <NavigationAuthorize />
    }
    return <NavigationUnauthorize />
}

export default NavigationBar
