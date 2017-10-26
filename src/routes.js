// @flow
import React from 'react';
import {View, Text} from './generals/core-ui';
import {LandingPage} from './pages';

type Route = {
  title: string,
  path: string,
  Component: React$Component<*>,
  otherProps?: any,
};
type Routes = Array<Route>;

let routes: Routes = [
  {title: '', path: '/', Component: LandingPage},
  {title: 'help', path: '/help', Component: DummyPage},
  {title: 'sign in', path: '/sign-in', Component: DummyPage},
  {title: 'sign up', path: '/sign-up', Component: DummyPage},
];

function DummyPage(props: Object) {
  return (
    <View style={{marginTop: 100}}>
      <Text style={{fontSize: 32}}>{props.match.path}</Text>
    </View>
  );
}
export default routes;
