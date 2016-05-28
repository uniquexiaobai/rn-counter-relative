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
		var bool = this.getSelected();

		return(
			<View style={styles.Ctrl}>
				<View style={styles.line}>
					<TouchableHighlight style={bool ? [styles.btn, styles.disabled_btn] : [styles.btn]} underlayColor={bool ? "#DEDEDE" : "green"} onPress={bool ? null : this.props.handlePress.bind(this, '爸爸')}>
						<Text>爸</Text>
					</TouchableHighlight>
					<TouchableHighlight style={bool ? [styles.btn, styles.disabled_btn] : [styles.btn]} underlayColor={bool ? "#DEDEDE" : "green"} onPress={bool ? null : this.props.handlePress.bind(this, '妈妈')}>
						<Text>妈</Text>
					</TouchableHighlight>
					<TouchableHighlight style={[styles.btn]} underlayColor="yellow" onPress={this.props.handleBack}>
						<Text style={styles.btn_font_red}>{"\u2190"}</Text>
					</TouchableHighlight>
					<TouchableHighlight style={[styles.btn]} underlayColor="yellow" onPress={this.props.handleClear}>
						<Text style={styles.btn_font_red}>C</Text>
					</TouchableHighlight>
				</View>

				<View style={styles.line}>
					<TouchableHighlight style={bool ? [styles.btn, styles.disabled_btn] : [styles.btn]} underlayColor={bool ? "#DEDEDE" : "green"} onPress={bool ? null : this.props.handlePress.bind(this, '哥哥')}>
						<Text>兄</Text>
					</TouchableHighlight>
					<TouchableHighlight style={bool ? [styles.btn, styles.disabled_btn] : [styles.btn]} underlayColor={bool ? "#DEDEDE" : "green"} onPress={bool ? null : this.props.handlePress.bind(this, '姐姐')}>
						<Text>姐</Text>
					</TouchableHighlight>
					<TouchableHighlight style={bool ? [styles.btn, styles.disabled_btn] : [styles.btn]} underlayColor={bool ? "#DEDEDE" : "green"} onPress={bool ? null : this.props.handlePress.bind(this, '弟弟')}>
						<Text>弟</Text>
					</TouchableHighlight>
					<TouchableHighlight style={bool ? [styles.btn, styles.disabled_btn] : [styles.btn]} underlayColor={bool ? "#DEDEDE" : "green"} onPress={bool ? null : this.props.handlePress.bind(this, '妹妹')}>
						<Text>妹</Text>
					</TouchableHighlight>
				</View>

				<View style={styles.line}>
					<TouchableHighlight style={bool ? [styles.btn, styles.disabled_btn] : [styles.btn]} underlayColor={bool ? "#DEDEDE" : "green"} onPress={bool ? null : this.props.handlePress.bind(this, '丈夫')}>
						<Text>夫</Text>
					</TouchableHighlight>
					<TouchableHighlight style={bool ? [styles.btn, styles.disabled_btn] : [styles.btn]} underlayColor={bool ? "#DEDEDE" : "green"} onPress={bool ? null : this.props.handlePress.bind(this, '妻子')}>
						<Text>妻</Text>
					</TouchableHighlight>
					<TouchableHighlight style={bool ? [styles.btn, styles.btn_old] : [styles.btn, styles.btn_old, styles.disabled_btn, styles.btn_old]} underlayColor={bool ? "#2E7E6A" : "#35A084"} onPress={bool ? this.props.handleIsOld.bind(this, '长') : null}>
						<Text>长</Text>
					</TouchableHighlight>
					<TouchableHighlight style={[styles.btn, styles.disabled_btn, styles.btn_orange]} underlayColor="#FB742E">
						<Text>的</Text>
					</TouchableHighlight>
				</View>

				<View style={styles.line}>
					<TouchableHighlight style={bool ? [styles.btn, styles.disabled_btn] : [styles.btn]} underlayColor={bool ? "#DEDEDE" : "green"} onPress={bool ? null : this.props.handlePress.bind(this, '儿子')}>
						<Text>儿</Text>
					</TouchableHighlight>
					<TouchableHighlight style={bool ? [styles.btn, styles.disabled_btn] : [styles.btn]} underlayColor={bool ? "#DEDEDE" : "green"} onPress={bool ? null : this.props.handlePress.bind(this, '女儿')}>
						<Text>女</Text>
					</TouchableHighlight>
					<TouchableHighlight style={bool ? [styles.btn, styles.btn_young] : [styles.btn, styles.disabled_btn, styles.btn_young]} underlayColor={bool ? "#3E9555" : "#4BCC6B"} onPress={bool ? this.props.handleIsOld.bind(this, '轻') : null}>
						<Text>轻</Text>
					</TouchableHighlight>
					<TouchableHighlight style={[styles.btn, styles.disabled_btn, styles.btn_orange]} underlayColor="#FB742E">
						<Text>等</Text>
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
		borderColor: '#EEF0F2',
		borderWidth: 2/PixelRatio.get(),
		backgroundColor: '#FAFBFC',
	},
	disabled_btn: {
		opacity: 0.3,
		backgroundColor: '#DEDEDE',
	},
	btn_orange: {
		backgroundColor: '#FB742E',
	},
	btn_old: {
		backgroundColor: '#35A084',
	},
	btn_young: {
		backgroundColor: '#4BCC6B',
	},
	btn_font_red: {
		color: 'red'
	}
});
