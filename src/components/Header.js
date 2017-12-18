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
	Image,
	ScrollView
} from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import IslamIcon from "../assets/Icons";

let {width, height } = Dimensions.get('window');

export default class Header extends Component {
	constructor(props){
		super(props);
		this.state = {
			hasBG: this.props.hasBG
		}
	}
	componentDidMount() {
		this.setState({hasBG: this.props.hasBG})
	}
	componentWillReceiveProps(nextProps) {
		this.setState({hasBG: nextProps.hasBG})
		
	}
	render() {
		// let hedaerStyle = !this.state.hasBG ? [styles.header_container, {backgroundColor: 'rgba(0,0,0,1)'}] : styles.header_container; 
		let hedaerStyle =  styles.header_container; 
		let title = "Prochaine prière dans";
		return (
			<View style={styles.page_container} >
				<View style={hedaerStyle} >
					<View style={styles.head_bar} >
						<Icon name="md-menu" size={50} color="#fff"/>
						<View style={{paddingTop: 10}} >
							<IslamIcon name="qibla" size={40} color="#fff"/>
						</View>
					</View>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
  page_container: {
  	height: 80,
  },
  head_bar:{
  	flexDirection: "row",
  	alignItems: "center",
  	justifyContent: "space-between"
  },

  header_container:{
  	width: "100%",
  	height: 80,
  	justifyContent: "space-between",
  	padding: 10,
  },
  img:{
  	position: "absolute",
  	height: 80,
  	top: 0,
  	width: "100%",
  }

});
