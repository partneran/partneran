//@flow

import React from 'react';
import {StyleSheet} from 'react-native-web';

import {ResponsiveContainer} from '../../generals/components';
import {View} from '../../generals/core-ui';
import {WHITE} from '../../generals/constants/colors';

import MobileHeader from './MobileHeader';
import TabletHeader from './TabletHeader';
import DesktopHeader from './DesktopHeader';

type Props = {};

function Header(props: Props) {
  return (
    <View style={styles.container}>
      <ResponsiveContainer device="MOBILE">
        <MobileHeader />
      </ResponsiveContainer>
      <ResponsiveContainer device="TABLET">
        <TabletHeader />
      </ResponsiveContainer>
      <ResponsiveContainer device="DESKTOP">
        <DesktopHeader />
      </ResponsiveContainer>
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: WHITE,
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 10,
    alignItems: 'center',
    boxShadow: '1px 1px 2px #888888',
    position: 'fixed',
    width: '100%',
    zIndex: 1,
  },
});

export default Header;
