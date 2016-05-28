/**
 * 抽屉菜单组件
 */

 import React, { Component } from 'react';
 import {
   StyleSheet,
   Text,
   View,
   TouchableHighlight,
   Image,
   Linking,
 } from 'react-native';

import Util from 'util/util.js';

export default class extends Component {
  
  render() {
    return (
        
      <View style={styles.menu}>
      
        <TouchableHighlight
            underlayColor='#E1E1E1'
            onPress={this.props.cloneDrawer}
            style={{width: 40, height: 40, margin: 5, alignItems: 'center', justifyContent: 'center'}}
        >
          <Image style={styles.back} source={require('./img/back.png')} />
        </TouchableHighlight>
      
          <View style={{alignItems: 'center'}}>
            <Image style={styles.logo} source={require('./img/logo.png')} />
          </View>
          
          <TouchableHighlight
              style={[styles.about_item]}
              underlayColor='#E1E1E1'
              onPress={() => {
                Linking.openURL('https://github.com/uniquexiaobai/rn-counter-relative').catch(err => console.error('An error occurred', err));
              }}
          >
            <View>
              <Text style={styles.item_title}>项目开源地址</Text>
              <Text style={styles.item_content}>https://github.com/uniquexiaobai/rn-counter-relative</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight
              style={[styles.about_item]}
              underlayColor='#E1E1E1'
              onPress={() => {
                Linking.openURL('https://github.com/uniquexiaobai').catch(err => console.error('An error occurred', err));
              }}
          >
            <View>
              <Text style={styles.item_title}>关于作者</Text>
              <Text style={styles.item_content}>https://github.com/uniquexiaobai</Text>
            </View>
          </TouchableHighlight>
        
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
