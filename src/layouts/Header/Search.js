// @flow
import React from 'react';
import {StyleSheet} from 'react-native-web';

import {View} from '../../generals/core-ui';

function Search() {
  return (
    <View style={styles.container}>
      <h6>Searching</h6>
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#eee',
    height: 30,
    flex: 1,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default Search;
