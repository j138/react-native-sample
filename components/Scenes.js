import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import Home from './Scene';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="home" component={Home} title="Home" />
    <Scene key="settings" component={Home} title="Settings" />
  </Scene>);

export default scenes;
