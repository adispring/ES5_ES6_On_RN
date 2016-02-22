/**
 * ES6Syntax
 */
'use strict';
// 模块引用
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class FancyCheckbox extends Component {
  render() {
    var fancyClass = this.props.checked ? 'fancyChecked' : 'fancyUnChecked';
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <Text>{this.props.children}</Text>
      </TouchableHighlight>
    );
  }
}

export default class ES6Syntax extends Component {
  static defaultProps = {
    name: 'ES6Syntax',
    year: 2015,
    label: 'ClickMe',
  };  // 注意这里有分号
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    year: React.PropTypes.number.isRequired,
    label: React.PropTypes.string.isRequired,
  };  // 注意这里有分号
  constructor(props) {
    super(props);
    this.state = {
        esVersion: this.props.name,
    };
    // Operations usually carried out in componentWillMount go here
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.esVersion}, {this.props.year}, clickCounts: {this.state.clickCounts}
        </Text>
        <TouchableHighlight onPress={this.handleOptionsButtonClick}>
            <Text>{this.props.labelName}</Text>
        </TouchableHighlight>
        <FancyCheckbox checked={true} onPress={console.log.bind(console)}>
          Hello world!
        </FancyCheckbox>
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
});
