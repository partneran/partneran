// @flow

import React from 'react';
import {Link} from 'react-router-dom';
import {StyleSheet} from 'react-native-web';

import {View, Text} from '../../generals/core-ui';
import routes from '../../routes.js';

import Logo from './CompanyLogo';

type Props = {}; // TODO: put Navigation Link here

function DesktopHeader(props: Props) {
  return (
    <View style={styles.container}>
      <Link to="/" style={StyleSheet.flatten(styles.noTextDecoration)}>
        <Logo key="logo" />
      </Link>
      <View style={styles.flexRow}>
        {routes.map(route => (
          <Link
            key={route.title}
            to={route.path}
            style={StyleSheet.flatten(styles.noTextDecoration)}
          >
            <Text style={styles.navText}>{route.title.toUpperCase()}</Text>
          </Link>
        ))}
      </View>
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
  noTextDecoration: {
    textDecoration: 'none',
  },
  navText: {
    marginRight: 30,
    color: 'black',
  },
});

export default DesktopHeader;
