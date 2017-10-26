// @flow
import React from 'react';
import {Text as TextPrimitives, StyleSheet} from 'react-native-web';

type Props = {
  style: StyleSheet.styles,
  children?: React$Node,
};

function Text(props: Props) {
  let {style, children, ...otherProps} = props;
  return (
    <TextPrimitives style={style} {...otherProps}>
      {children}
    </TextPrimitives>
  );
}

export default Text;
