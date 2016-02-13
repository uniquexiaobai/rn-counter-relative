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

import Show from './components/Show.js';
import Ctrl from './components/Ctrl.js';
import data from './components/data.js';

var counterRelativeAndroid = React.createClass ({
  getInitialState: function() {
    return (
      {
        expression: ['我'],
        result: ['我'],
        selected: [false]
      }
    );
  },

  // 定义计算亲戚称谓的方法
  count: function(whose, who) {
    for(var i in data) {
      if(whose === data[i]['name']) {
        return data[i][who];
      }
    }
  },

  // 普通按钮的事件
  handlePress: function(argu) {
    var newExpression = this.state.expression;
    newExpression.push(argu);

    if(newExpression.length > 10) {
      alert('亲，可不可以不要这么调皮！！！');
      return ;
    }

    var newResult=this.state.result;
    var lastIndex = newResult.length - 1;
    var result = this.count(newResult[lastIndex], argu);
    newResult.push(result);

    var newSelected = this.state.selected;
    if(typeof(newResult[newResult.length - 1]) === 'object') {
      newSelected.push(true);
    }

    this.setState({
      expression: newExpression,
      result: newResult,
      selected: newSelected
    });
  },

  // 选择 年长/年轻 按钮的事件
  handleIsOld: function(argu) {
    var newResult = this.state.result;
    var lastIndex = newResult.length - 1;

    var result = newResult[lastIndex][argu];
    newResult[lastIndex] = result;

    var newSelected = this.state.selected;
    newSelected[newSelected.length - 1] = false;

    this.setState({
      expression: this.state.expression,
      result: newResult,
      selected: newSelected
    });
  },

  // 返回按钮的事件
  handleBack: function() {
    var newExpression = this.state.expression;
    if(newExpression.length - 1) {
      newExpression.pop();
    }

    var newResult = this.state.result;
    if(newResult.length - 1) {
      newResult.pop();
    }

    var newSelected = this.state.selected;
    if(newSelected.length - 1) {
      newSelected.pop();
    }

    this.setState({
      expression: newExpression,
      result: newResult,
      selected: newSelected
    });
  },

  // 清空按钮的事件
  handleClear: function() {
    this.setState({
      expression: ['我'],
      result: ['我'],
      selected: [false]
    });
  },


  render: function() {
    return (
      <View style={styles.Container}>
        <Show expression={this.state.expression} result={this.state.result}></Show>
        <Ctrl selected={this.state.selected} handlePress={this.handlePress} handleIsOld={this.handleIsOld} handleBack={this.handleBack} handleClear={this.handleClear}></Ctrl>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  Container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('counterRelativeAndroid', () => counterRelativeAndroid);
