import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

const container = props => (
  <View style={styles.container}>
    {props.children}
  </View>
);

container.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default container;

