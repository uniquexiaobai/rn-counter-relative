/**
 * 计算器按钮组件
 */

 import React, { Component } from 'react';
 import {
   Text,
   View,
   TouchableHighlight,
   PixelRatio,
   StyleSheet,
 } from 'react-native';

export default class extends Component {
	render () {
		const isPressed = this.getSelected();
		// 按钮
		const items = [
			{name: '爸爸', simpleName: '爸'},
			{name: '妈妈', simpleName: '妈'},
			{name: '退', simpleName: "\u2190"},
			{name: '清', simpleName: "C"},
			{name: '哥哥', simpleName: "兄"},
			{name: '姐姐', simpleName: "姐"},
			{name: '弟弟', simpleName: "弟"},
			{name: '妹妹', simpleName: "妹"},
			{name: '丈夫', simpleName: "夫"},
			{name: '妻子', simpleName: "妻"},
			{name: '长', simpleName: "长"},
			{name: '的', simpleName: "的"},
			{name: '儿子', simpleName: "儿"},
			{name: '女儿', simpleName: "女"},
			{name: '轻', simpleName: "轻"},
			{name: '等', simpleName: "等"}
		];

		// 获得按钮模板数组
		const btnList = items.map((item) => {
			switch (item.name) {
				case '退': 
					return (
						<TouchableHighlight 
							key={item.name}
							style={[styles.btn]} 
							underlayColor="#E0E0E0" 
							onPress={this.props.handleBack}>
							<Text style={[styles.btn_font, styles.btn_font_red]}>{item.simpleName}</Text>
						</TouchableHighlight>
					);

				case '清':
					return (
						<TouchableHighlight 
							key={item.name}
							style={[styles.btn]} 
							underlayColor="#E0E0E0"
							onPress={this.props.handleClear}>
							<Text style={[styles.btn_font, styles.btn_font_red]}>{item.simpleName}</Text>
						</TouchableHighlight>
					);

				case '轻':
					return (
						<TouchableHighlight 
							key={item.name}
							style={isPressed ? [styles.btn, styles.btn_young] : [styles.btn, styles.btn_press_young]} 
							underlayColor={isPressed ? "#3E9555" : "#4BCC6B"} 
							onPress={isPressed ? this.props.handleIsOld.bind(this, item.simpleName) : null}>
							<Text style={isPressed ? [styles.btn_font] : [styles.btn_font, {color: '#AFB7B7'}]}>{item.simpleName}</Text>
						</TouchableHighlight>
					);

				case '长':
					return (
						<TouchableHighlight 
							key={item.name}
							style={isPressed ? [styles.btn, styles.btn_old] : [styles.btn, styles.btn_press_old]} 
							underlayColor={isPressed ? "#2E7E6A" : "#35A084"} 
							onPress={isPressed ? this.props.handleIsOld.bind(this, item.simpleName) : null}>
							<Text style={isPressed ? [styles.btn_font] : [styles.btn_font, {color: '#AFB7B7'}]}>{item.simpleName}</Text>
						</TouchableHighlight>
					);

				case '的':
				case '等':
					return (
						<TouchableHighlight 
							key={item.name}
							style={[styles.btn, styles.btn_red]} 
							underlayColor="#FB742E">
							<Text style={[styles.btn_font, styles.btn_press_font_red]}>{item.simpleName}</Text>
						</TouchableHighlight>
					);

				default :
					return (
						<TouchableHighlight 
							key={item.name}
							style={isPressed ? [styles.btn, styles.btn_press] : [styles.btn]} 
							underlayColor="#E0E0E0" 
							onPress={isPressed ? null : this.props.handlePress.bind(this, item.name)}>
							<Text	style={isPressed ? [styles.btn_font, styles.btn_press_font] : [styles.btn_font]}>
								{item.simpleName}
							</Text>
						</TouchableHighlight>
					);
			}
		});

		return(
			<View style={styles.Ctrl}>
				<View style={styles.line}>
          {btnList.slice(0, 4)}
				</View>

				<View style={styles.line}>
					{btnList.slice(4, 8)}
				</View>

				<View style={styles.line}>
					{btnList.slice(8, 12)}
				</View>

				<View style={styles.line}>
					{btnList.slice(12, 16)}
				</View>
			</View>
		);
	}

  // 格式化 selected
	getSelected () {
		const lastIndex = this.props.selected.length - 1;
		return this.props.selected[lastIndex];
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
