import React, { Component } from 'react';
import { StyleSheet, StatusBar, View, Text, TextInput } from 'react-native';
import { BottomNavigation, ActionButton } from 'react-native-material-ui';
import { Actions } from 'react-native-router-flux';
import Container from '../container';

const styles = StyleSheet.create({
  top: {
    marginBottom: 120,
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
});

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.title,
      active: props.name,
    };

    this.clearText = this.clearText.bind(this);
  }

  clearText() {
    this.setState({ text: '' });
  }

  render() {
    const { title } = this.props;

    return (
      <Container>
        <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
        <View style={styles.top}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.instructions}>plz input</Text>

          <TextInput
            style={styles.textform}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
        </View>

        <BottomNavigation active={this.state.active} hidden={false} >
          <BottomNavigation.Action
            key="home"
            icon="home"
            label="Home"
            onPress={() => Actions.home()}
          />
          <BottomNavigation.Action
            key="settings"
            icon="settings"
            label="Settings"
            onPress={() => Actions.settings()}
          />
        </BottomNavigation>

        <ActionButton icon="done" onPress={this.clearText} />
      </Container>
    );
  }
}

Home.propTypes = {
  title: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
};

export default Home;
