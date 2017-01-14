/**
 * 抽屉菜单
 */

 import React, { Component } from 'react';
 import {
   Text,
   View,
   TouchableHighlight,
   Image,
   Linking,
   StyleSheet,
 } from 'react-native';

import Util from './util/util';

export default class extends Component {
  render() {
    // 项目及作者信息
    let items = [
      {
        name: '项目开源地址',
        url: 'https://github.com/uniquexiaobai/rn-counter-relative'
      },
      {
        name: '关于作者',
        url: 'https://github.com/uniquexiaobai'
      },
      {
        name: '作者微博',
        url: 'http://www.weibo.com/u/5332095066'
      }
    ];

    let getItems = items.map(function(item) {
      return (
        <TouchableHighlight
          key={item.name}
          style={[styles.about_item]}
          underlayColor='#E1E1E1'
          onPress={() => {
            Linking.openURL(item.url).catch(err => console.error('An error occurred', err));
          }}>
          <View>
            <Text style={styles.item_title}>{item.name}</Text>
            <Text style={styles.item_content}>{item.url}</Text>
          </View>
        </TouchableHighlight>
      );
    });

    return (
      <View style={styles.menu}>
        <TouchableHighlight
          underlayColor='#E1E1E1'
          onPress={this.props.closeDrawer}
          style={{width: 40, height: 40, margin: 5, alignItems: 'center', justifyContent: 'center'}}>
          <Image style={styles.back} source={require('./img/back.png')} />
        </TouchableHighlight>
      
        <View style={{alignItems: 'center'}}>
          <Image style={styles.logo} source={require('./img/logo.png')} />
        </View>

        {getItems}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: '#fff',
  },
  back: {
    width: 30,
    height: 30,
  },
  logo: {
    width: 200,
    height: 200,
  },
  about_item: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#EBEBEB',
  },
  item_title: {
    color: '#282828',
    fontSize: 16,
    marginBottom: 3,
  },
  item_content: {
    color: '#858585',
    fontSize: 13,
  },
});
