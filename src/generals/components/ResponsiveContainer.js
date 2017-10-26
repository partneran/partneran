// @flow
import React from 'react';
import MediaQuery from 'react-responsive';

import {
  MIN_DESKTOP_SIZE,
  MIN_TABLET_SIZE,
  MAX_TABLET_SIZE,
  MAX_MOBILE_SIZE,
} from '../constants/sizes';

type Device = 'DESKTOP' | 'TABLET' | 'MOBILE';

type Props = {
  device: Device,
  children: React$Node,
};

function ResponsiveContainer(props: Props) {
  let {device, children} = props;
  switch (device) {
    case 'DESKTOP': {
      return <MediaQuery minWidth={MIN_DESKTOP_SIZE} children={children} />;
    }
    case 'TABLET': {
      return (
        <MediaQuery minWidth={MIN_TABLET_SIZE} maxWidth={MAX_TABLET_SIZE} children={children} />
      );
    }
    case 'MOBILE': {
      return <MediaQuery maxWidth={MAX_MOBILE_SIZE} children={children} />;
    }
    default: {
      return <MediaQuery minWidth={MAX_MOBILE_SIZE} children={children} />;
    }
  }
}

export default ResponsiveContainer;
