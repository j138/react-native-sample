/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { Router } from 'react-native-router-flux';
import { COLOR, ThemeProvider } from 'react-native-material-ui';
import scenes from './components/Scenes';

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

const app = () => (
  <ThemeProvider uiTheme={uiTheme}>
    <Router scenes={scenes} />
  </ThemeProvider>
);

AppRegistry.registerComponent('AwesomeProject', () => app);
