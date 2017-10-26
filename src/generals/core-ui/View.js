// @flow
import React from 'react';
import {View as ViewPrimitives} from 'react-native-web';

type Props = {
  children?: any,
};

export default function View(props: Props) {
  let {children, ...otherProps} = props;
  return <ViewPrimitives {...otherProps}>{children}</ViewPrimitives>;
}
