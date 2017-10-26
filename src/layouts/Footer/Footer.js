// @flow
import React from 'react';
import {View, Text} from '../../generals/core-ui';
import {StyleSheet} from 'react-native-web';

function Footer() {
  return (
    <View style={styles.container}>
      <View style={[styles.container, styles.links]}>
        <Text style={styles.textLink}>Home</Text>
        <Text style={styles.textLink}>Explore</Text>
        <Text style={styles.textLink}>About</Text>
        <Text style={styles.textLink}>Share Idea</Text>
      </View>
      <View style={styles.ornament} />
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#eee',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  links: {
    padding: 0,
    justifyContent: 'flex-start',
    flex: 1,
  },
  textLink: {
    textTransform: 'uppercase',
    marginLeft: 20,
  },
  ornament: {
    flex: 1,
  },
});

export default Footer;
