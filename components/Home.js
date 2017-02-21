import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { Toolbar, BottomNavigation, ActionButton, Button } from 'react-native-material-ui';

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

        // <Toolbar
        //   leftElement="menu"
        //   centerElement="Searchable"
        //   searchable={{
        //     autoFocus: true,
        //     placeholder: 'Search',
        //   }}
        // />

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

        <Button raised primary text="Home" onPress={Actions.home} />
        <Button raised accent text="Login" onPress={Actions.login} />

        <BottomNavigation active={this.state.active} hidden={false} >
          <BottomNavigation.Action
            key="today"
            icon="today"
            label="Today"
            onPress={() => this.setState({ active: 'today' })}
          />
          <BottomNavigation.Action
            key="people"
            icon="people"
            label="People"
            onPress={() => this.setState({ active: 'people' })}
          />
          <BottomNavigation.Action
            key="bookmark-border"
            icon="bookmark-border"
            label="Bookmark"
            onPress={() => this.setState({ active: 'bookmark-border' })}
          />
          <BottomNavigation.Action
            key="settings"
            icon="settings"
            label="Settings"
            onPress={() => this.setState({ active: 'settings' })}
          />
        </BottomNavigation>

        <ActionButton icon="done" onPress={this.clearText} />
      </View>
    );
  }
}

Home.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Home;
