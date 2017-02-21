import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
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
    margin: 10,
  },
  linkText: {
    fontSize: 20,
    color: 'rgb(95, 177, 237)',
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.clearText = this.clearText.bind(this);
  }

  clearText() {
    this.setState({ text: '' });
  }

  render() {
    const { title } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

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

        <TouchableOpacity onPress={Actions.home}>
          <Text style={styles.linkText}>to Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={Actions.login}>
          <Text style={styles.linkText}>to Login</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

Home.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Home;
