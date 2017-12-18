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
	Image,
	FlatList,
	Button,
	ScrollView
} from 'react-native';
let {width, height } = Dimensions.get('window');
import ParallaxScrollView from 'react-native-parallax-scroll-view';
const PARALLAX_HEADER_HEIGHT = 300;
export default class LesChartes extends Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render() {
		return (
			null
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
