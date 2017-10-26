// @flow

import React from 'react';
import {Image} from 'react-native-web'; //TODO: should be import from core-ui or components in generals

function CompanyLogo() {
  return (
    <Image
      key={1}
      source={{
        uri:
          'https://mockup.takapic.com/images/takapic-logo/CL%20h%20small.png',
        height: 30,
        width: 140,
      }}
    />
  );
}

export default CompanyLogo;
