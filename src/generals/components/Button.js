// @flow

import React from 'react';
import {StyleSheet} from 'react-native-web';
import ButtonPrimitive from 'material-ui/Button';

type Props = {
  style?: StyleSheet.styles,
  children: mixed,
  color?: string,
};

function Button(props: Props) {
  let {children, ...otherProps} = props;
  return (
    <ButtonPrimitive color="primary" {...otherProps}>
      {children}
    </ButtonPrimitive>
  );
}

export default Button;
