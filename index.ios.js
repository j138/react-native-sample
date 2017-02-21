/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textform: {
    margin: 10,
    padding: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    backgroundColor: 'white',
  },
  button: {
    color: 'red',
    height: 40,
    padding: 10,
    textAlign: 'center',
    borderColor: 'red',
    borderWidth: 2,
  },
});

export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.clearText = this.clearText.bind(this);
  }

  clearText() {
    this.setState({ text: '' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          plz input text
        </Text>

        <TextInput
          style={styles.textform}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />

        <TouchableHighlight onPress={this.clearText}>
          <Text style={styles.button}>
            Clear
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
