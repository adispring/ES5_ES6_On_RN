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
          labelName: 'ClickMe',
      };
  },
  propTypes: {
      name: React.PropTypes.string.isRequired,
      year: React.PropTypes.number.isRequired,
      labelName: React.PropTypes.string.isRequired,
  },
  getInitialState: function() {
      return {
          esVersion: this.props.name,
          clickCounts: 0,
      };
  },
  handleOptionsButtonClick: function(e) {
      // Here, 'this' refers to the component instance.
      this.setState({clickCounts: this.state.clickCounts + 1});

  },
  render: function() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            {this.state.esVersion}, {this.props.year}, clickCounts: {this.state.clickCounts}
          </Text>
          <TouchableHighlight onPress={this.handleOptionsButtonClick}>
              <Text>{this.props.labelName}</Text>
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
