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

class CustomText extends Component {
  render() {
    var {
      className,
      ...otherProps,
    } = this.props;
    return (
      <Text {...otherProps}>{className}</Text>
    )
  }
}

export default class ES6Syntax extends Component {
  static defaultProps = {
    name: 'ES6Syntax',
    year: 2015,
    label: 'ClickMe',
    inputName: 'inputName',
  };  // 注意这里有分号
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    year: React.PropTypes.number.isRequired,
    label: React.PropTypes.string.isRequired,
  };
  state = {
      esVersion: `${this.props.name} v1.0`,
      clickCounts: 0,
  };
  constructor(props) {
    super(props);
    // this.buttonClick = this.buttonClick.bind(this);
    // this.state = {
    //     esVersion: `${this.props.name} v1.0`,
    //     clickCounts: 0,
    // };
    // Operations usually carried out in componentWillMount go here
  };
  // buttonClick(e) {
  //   // Here, 'this' refers to the component instance.
  //   this.setState({clickCounts: this.state.clickCounts + 1});
  // }
  buttonClick = (e) => {
    // Here, 'this' refers to the component instance.
    this.setState({clickCounts: this.state.clickCounts + 1});
    this.setState({
      [`${this.props.inputName}`]: `${this.props.name}: ${this.state.clickCounts}`,
    });
    // this.state.clickCounts += 1;

  }; // 注意这里有分号
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.esVersion}, {this.props.year}, clickCounts: {this.state[`${this.props.inputName}`]}
        </Text>
        <TouchableHighlight
          onPress={this.buttonClick}>
          <Text>{this.props.label}</Text>
        </TouchableHighlight>
        <CustomText style={styles.welcome} onPress={this.buttonClick} className='CustomText' />
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
