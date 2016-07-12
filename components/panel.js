/**
 * 控制面板组件
 */

 import React, { Component } from 'react';
 import {
   StyleSheet,
   Text,
   View,
   TouchableHighlight,
   PixelRatio,
 } from 'react-native';

export default class extends Component {

	// 格式化 selected
	getSelected () {
		var lastIndex = this.props.selected.length - 1;
		return this.props.selected[lastIndex];
	}

	render () {
		var isPressed = this.getSelected();

		return(
			<View style={styles.Ctrl}>
				<View style={styles.line}>
          <TouchableHighlight style={isPressed ? [styles.btn, styles.btn_press] : [styles.btn]} underlayColor="#E0E0E0" onPress={isPressed ? null : this.props.handlePress.bind(this, '爸爸')}>
            <Text style={isPressed ? [styles.btn_font, styles.btn_press_font] : [styles.btn_font]}>爸</Text>
          </TouchableHighlight>
					<TouchableHighlight style={isPressed ? [styles.btn, styles.btn_press] : [styles.btn]} underlayColor="#E0E0E0" onPress={isPressed ? null : this.props.handlePress.bind(this, '妈妈')}>
						<Text style={isPressed ? [styles.btn_font, styles.btn_press_font] : [styles.btn_font]}>妈</Text>
					</TouchableHighlight>
					<TouchableHighlight style={[styles.btn]} underlayColor="#E0E0E0" onPress={this.props.handleBack}>
						<Text style={[styles.btn_font, styles.btn_font_red]}>{"\u2190"}</Text>
					</TouchableHighlight>
					<TouchableHighlight style={[styles.btn]} underlayColor="#E0E0E0" onPress={this.props.handleClear}>
						<Text style={[styles.btn_font, styles.btn_font_red]}>C</Text>
					</TouchableHighlight>
				</View>

				<View style={styles.line}>
					<TouchableHighlight style={isPressed ? [styles.btn, styles.btn_press] : [styles.btn]} underlayColor="#E0E0E0" onPress={isPressed ? null : this.props.handlePress.bind(this, '哥哥')}>
						<Text style={isPressed ? [styles.btn_font, styles.btn_press_font] : [styles.btn_font]}>兄</Text>
					</TouchableHighlight>
					<TouchableHighlight style={isPressed ? [styles.btn, styles.btn_press] : [styles.btn]} underlayColor="#E0E0E0" onPress={isPressed ? null : this.props.handlePress.bind(this, '姐姐')}>
						<Text style={isPressed ? [styles.btn_font, styles.btn_press_font] : [styles.btn_font]}>姐</Text>
					</TouchableHighlight>
					<TouchableHighlight style={isPressed ? [styles.btn, styles.btn_press] : [styles.btn]} underlayColor="#E0E0E0" onPress={isPressed ? null : this.props.handlePress.bind(this, '弟弟')}>
						<Text style={isPressed ? [styles.btn_font, styles.btn_press_font] : [styles.btn_font]}>弟</Text>
					</TouchableHighlight>
					<TouchableHighlight style={isPressed ? [styles.btn, styles.btn_press] : [styles.btn]} underlayColor="#E0E0E0" onPress={isPressed ? null : this.props.handlePress.bind(this, '妹妹')}>
						<Text style={isPressed ? [styles.btn_font, styles.btn_press_font] : [styles.btn_font]}>妹</Text>
					</TouchableHighlight>
				</View>

				<View style={styles.line}>
					<TouchableHighlight style={isPressed ? [styles.btn, styles.btn_press] : [styles.btn]} underlayColor="#E0E0E0" onPress={isPressed ? null : this.props.handlePress.bind(this, '丈夫')}>
						<Text style={isPressed ? [styles.btn_font, styles.btn_press_font] : [styles.btn_font]}>夫</Text>
					</TouchableHighlight>
					<TouchableHighlight style={isPressed ? [styles.btn, styles.btn_press] : [styles.btn]} underlayColor="#E0E0E0" onPress={isPressed ? null : this.props.handlePress.bind(this, '妻子')}>
						<Text style={isPressed ? [styles.btn_font, styles.btn_press_font] : [styles.btn_font]}>妻</Text>
					</TouchableHighlight>
					<TouchableHighlight style={isPressed ? [styles.btn, styles.btn_old] : [styles.btn, styles.btn_press_old]} underlayColor={isPressed ? "#2E7E6A" : "#35A084"} onPress={isPressed ? this.props.handleIsOld.bind(this, '长') : null}>
						<Text style={isPressed ? [styles.btn_font] : [styles.btn_font, {color: '#AFB7B7'}]}>长</Text>
					</TouchableHighlight>
					<TouchableHighlight style={[styles.btn, styles.btn_red]} underlayColor="#FB742E">
						<Text style={[styles.btn_font, styles.btn_press_font_red]}>的</Text>
					</TouchableHighlight>
				</View>

				<View style={styles.line}>
					<TouchableHighlight style={isPressed ? [styles.btn, styles.btn_press] : [styles.btn]} underlayColor="#E0E0E0" onPress={isPressed ? null : this.props.handlePress.bind(this, '儿子')}>
						<Text style={isPressed ? [styles.btn_font, styles.btn_press_font] : [styles.btn_font]}>儿</Text>
					</TouchableHighlight>
					<TouchableHighlight style={isPressed ? [styles.btn, styles.btn_press] : [styles.btn]} underlayColor="#E0E0E0" onPress={isPressed ? null : this.props.handlePress.bind(this, '女儿')}>
						<Text style={isPressed ? [styles.btn_font, styles.btn_press_font] : [styles.btn_font]}>女</Text>
					</TouchableHighlight>
					<TouchableHighlight style={isPressed ? [styles.btn, styles.btn_young] : [styles.btn, styles.btn_press_young]} underlayColor={isPressed ? "#3E9555" : "#4BCC6B"} onPress={isPressed ? this.props.handleIsOld.bind(this, '轻') : null}>
						<Text style={isPressed ? [styles.btn_font] : [styles.btn_font, {color: '#AFB7B7'}]}>轻</Text>
					</TouchableHighlight>
					<TouchableHighlight style={[styles.btn, styles.btn_red]} underlayColor="#FB742E">
						<Text style={[styles.btn_font, styles.btn_press_font_red]}>等</Text>
					</TouchableHighlight>
				</View>

			</View>
		);
	}

};

const styles = StyleSheet.create({
	Ctrl: {
		flex: 7,
		flexDirection: 'column'
	},
	line: {
		flex: 1,
		flexDirection: 'row',
	},
	btn: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		borderColor: '#D6DAD4',
		borderWidth: 1/PixelRatio.get(),
		backgroundColor: '#FAFBFC',
	},
	btn_press: {
		backgroundColor: '#EDEDED',
	},

  btn_font: {
    fontSize: 16,
  },
  btn_press_font: {
    color: '#D9D9DA',
  },

	btn_font_red: {
		color: 'red',
	},
  btn_press_font_red: {
    color: '#CDC4BF',
  },
	btn_red: {
		backgroundColor: '#FAD2BD',
	},

	btn_old: {
		backgroundColor: '#35A084',
	},
  btn_press_old: {
    backgroundColor: '#BFDFD7',
  },
	btn_young: {
		backgroundColor: '#4BCC6B',
	},
  btn_press_young: {
    backgroundColor: '#C5ECCF',
  },


});
