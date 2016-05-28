/**
 * 计算器主文件
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
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
      selected: [false]
    }
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
  }
  
  // 选择 年长/年轻 按钮的事件
  handleIsOld (argu) {
    var newResult = this.state.result;
    var lastIndex = newResult.length - 1;

    var result = newResult[lastIndex][argu];
    newResult[lastIndex] = result;

    var newSelected = this.state.selected;
    newSelected[newSelected.length - 1] = false;

    this.setState({
      result: newResult,
      selected: newSelected
    });
  }
  
  // 返回按钮的事件
  handleBack () {
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
  }
  
  // 清空按钮的事件
  handleClear () {
    this.setState({
      expression: ['我'],
      result: ['我'],
      selected: [false]
    });
  }
  
  render () {
    return (
      <View style={styles.Container}>
      
        <Screen expression={this.state.expression} result={this.state.result}></Screen>
        
        <Panel 
          selected={this.state.selected} 
          handlePress={this.handlePress.bind(this)} 
          handleIsOld={this.handleIsOld.bind(this)} 
          handleBack={this.handleBack.bind(this)} 
          handleClear={this.handleClear.bind(this)}
        >
        </Panel>
        
      </View>
    );
  }
  
};


const styles = StyleSheet.create({
  
  Container: {
    flex: 1,
  },
  
});
