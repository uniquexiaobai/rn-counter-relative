import React, { Component } from 'react';
import { 
  View,
  Alert,
  StyleSheet,
 } from 'react-native';

import Screen from './screen.js';
import Panel from './panel.js';
import data from './data/data.js';

export default class extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      expression: ['我'],
      result: ['我'],
      selected: [false],
    };
  }

  render () {
    return (
      <View style={styles.container}>
        <Screen expression={this.state.expression} result={this.state.result} />
        
        <Panel 
          selected={this.state.selected} 
          handlePress={this.handlePress.bind(this)} 
          handleIsOld={this.handleIsOld.bind(this)} 
          handleBack={this.handleBack.bind(this)} 
          handleClear={this.handleClear.bind(this)}
        />
      </View>
    );
  }
  
  // 定义计算亲戚称谓的方法
  count (whose, who) {
    for(var i in data) {
      if(whose === data[i]['name']) {
        return data[i][who];
      }
    }
  }
  
  // 普通按钮的事件
  handlePress (argu) {
    let newExpression = this.state.expression;
    let newResult = this.state.result;
    let newSelected = this.state.selected;

    newExpression.push(argu);
    if(newExpression.length > 10) {
      Alert.alert('警告', '亲，可不可以不要这么调皮！');
      return;
    }
    newResult.push(this.count(newResult[newResult.length - 1], argu));
    if(typeof(newResult[newResult.length - 1]) === 'object') {
      newSelected.push(true);
    }

    this.setState({
      expression: newExpression,
      result: newResult,
      selected: newSelected
    });
  }
  
  // 选择 年长/年轻 按钮的事件
  handleIsOld (argu) {
    let newResult = this.state.result;
    let lastIndex = newResult.length - 1;

    let result = newResult[lastIndex][argu];
    newResult[lastIndex] = result;

    let newSelected = this.state.selected;
    newSelected[newSelected.length - 1] = false;

    this.setState({
      result: newResult,
      selected: newSelected
    });
  }
  
  // 返回按钮的事件
  handleBack () {
    let newExpression = this.state.expression;
    if(newExpression.length - 1) {
      newExpression.pop();
    }

    let newResult = this.state.result;
    if(newResult.length - 1) {
      newResult.pop();
    }

    let newSelected = this.state.selected;
    if(newSelected.length - 1) {
      newSelected.pop();
    }

    this.setState({
      expression: newExpression,
      result: newResult,
      selected: newSelected
    });
  }
  
  // 清空按钮的事件
  handleClear () {
    this.setState({
      expression: ['我'],
      result: ['我'],
      selected: [false]
    });
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});