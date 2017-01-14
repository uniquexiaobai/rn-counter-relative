import React, { Component } from 'react';
import Drawer from 'react-native-drawer'

import Main from './main';
import DrawerMenu from './drawer_menu';
import Util from './util/util';

export default class extends Component {
  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
        openDrawerOffset={(viewport) => viewport.width - Util.size.width}
        content={<DrawerMenu closeDrawer={this.closeDrawer}/>}
      >
        <Main />
      </Drawer>
    );
  }

  closeDrawer = () => {
    this._drawer.close();
  };

  openDrawer = () => {
    this._drawer.open()
  };
};