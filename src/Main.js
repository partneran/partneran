// @flow

import React from 'react';
import {Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';

import {View} from './generals/core-ui';
import {Header} from './layouts';
import routes from './routes';

type Props = {
  match?: Object, //TODO: be specific about object that passed from 'react router'
};

function Main(props: Props) {
  return (
    <View>
      <Header />
      <AnimatedSwitch
        atEnter={{opacity: 0}}
        atLeave={{opacity: 1}}
        atActive={{opacity: 1}}
        className="switch-wrapper"
      >
        {routes.map(route => (
          <Route
            key={route.path}
            exact
            path={route.path}
            component={route.Component}
          />
        ))}
      </AnimatedSwitch>
    </View>
  );
}

export default Main;
