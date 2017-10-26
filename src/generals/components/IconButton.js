// @flow

import React from 'react';
import IconButtonPrimitive from 'material-ui/IconButton';
import Menu from 'material-ui-icons/Menu';

type Icon = 'MENU'

type Props = {
  iconName: Icon
}

function IconButton(props: Props) {
  let {iconName} = props;
  switch (iconName) {
    case 'MENU': {
      return <IconButtonPrimitive><Menu /></IconButtonPrimitive>
    }
    default: {
      return null;
    }
  }
}

export default IconButton;
