/**
 * 程序入口文件
 */

import React, { Component } from 'react';
import {
  DrawerLayoutAndroid,
} from 'react-native';

import Main from './main';
import Menu from './menu';
import Util from './util/util';

export default class extends Component {
  
  // 关闭抽屉菜单
  closeDrawer() {
    this.refs.drawer.closeDrawer();
  }
  
  render () {
    return (
      <DrawerLayoutAndroid
        ref="drawer"
        drawerWidth={Util.size.width}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <Menu closeDrawer={this.closeDrawer.bind(this)}/>}
      >
      
        <Main />
        
      </DrawerLayoutAndroid>
    );
  }

}