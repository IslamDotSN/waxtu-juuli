import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	TextInput,
	TouchableHighlight,
	View,
	Modal,
	Dimensions,
	FlatList,
	Button,
	ScrollView
} from 'react-native';
let {width, height } = Dimensions.get('window');

export default class Conferences extends Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render() {
		return (
			<View style={styles.page_container} >
				<Text>  La Conferences </Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
  page_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
