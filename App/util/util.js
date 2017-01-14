/**
 * 工具方法
 */

import { Dimensions } from 'react-native';

export default {
  /**
   * 获取屏幕尺寸
   */
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
};
