/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ES6Syntax from './es5_es6_syntax/ES6Syntax';
// import ES5Syntax from './es5_es6_syntax/ES5Syntax';
const ES5Syntax = require('./es5_es6_syntax/ES5Syntax');

class HelloTemplate extends Component {

  render() {
    return (
      <View style = {styles.container}>
        <ES6Syntax />
        <ES5Syntax />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HelloRN', () => HelloTemplate);
