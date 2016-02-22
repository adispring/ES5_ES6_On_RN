/**
 * ES5Syntax
 */
'use strict';
// 模块引用
const React = require("react-native");
const {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var ES5Syntax = React.createClass({
    getDefaultProps: function() {
      return {
          name: 'ES5Syntax',
          year: 2014,
          label: 'ClickMe',
      };
    },
    propTypes: {
        name: React.PropTypes.string.isRequired,
        year: React.PropTypes.number.isRequired,
        label: React.PropTypes.string.isRequired,
    },
    getInitialState: function() {
        return {
            esVersion: this.props.name + " v1.0",
            clickCounts: 0,
        };
    },
    buttonClick: function(e) {
        // Here, 'this' refers to the component instance.
        this.setState({clickCounts: this.state.clickCounts + 1});
    },
    render: function() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            {this.state.esVersion}, {this.props.year}, clickCounts: {this.state.clickCounts}
          </Text>
          <TouchableHighlight onPress={this.buttonClick}>
              <Text>{this.props.label}</Text>
          </TouchableHighlight>
        </View>
      );
    },
});

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
});

module.exports = ES5Syntax;
