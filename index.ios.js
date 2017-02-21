/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';
import { COLOR, ThemeProvider, Toolbar } from 'react-native-material-ui';

import Home from './components/Home';

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};


const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={Home} title="Login" />
    <Scene key="home" component={Home} title="Home" />
  </Scene>,
    );

export default class AwesomeProject extends Component {
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <Router scenes={scenes} />
      </ThemeProvider>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
