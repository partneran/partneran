// @flow
import React from 'react';

import {IconButton} from '../../generals/components';
import Logo from './CompanyLogo';

type Props = {}; // TODO: put Navigation Link here

function MobileHeader(props: Props) {
  return [<Logo key="logo" />, <IconButton iconName="MENU" key="menu" />];
}

export default MobileHeader;
