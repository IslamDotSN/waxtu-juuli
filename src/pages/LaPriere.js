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
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../assets/config.json';
import Header from "../components/Header";
import PraysList from "../components/PraysList";
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import IslamIcon from "../assets/Icons";

const Icon = createIconSetFromFontello(fontelloConfig);
let {width, height } = Dimensions.get('window');
const PARALLAX_HEADER_HEIGHT = height * 0.35;


export default class LaPriere extends Component {
	constructor(props){
		super(props);
		this.state = {
			give_header_bg: false
		}
	}
	render() {
		let title = "Prochaine prière dans";

		return (
		    <ParallaxScrollView
		      backgroundColor="rgba(0,0,0,1)"
		      contentBackgroundColor="#fff"
		      parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
		      stickyHeaderHeight={80}
	            renderBackground={() => (
	              <View key="background">
	                <Image source={require("../assets/img/krus.jpg")}/>
	                <View style={{position: 'absolute',
	                              top: 0,
	                              width: width,
	                              backgroundColor: 'rgba(0,0,0,.4)',
	                              height: PARALLAX_HEADER_HEIGHT}}/>
	              </View>
	            )}
	            onChangeHeaderVisibility={(bool)=>{this.setState({give_header_bg: bool})}}
	            renderFixedHeader={() => (
	            	<Header />
	            )}   
	            contentContainerStyle={{ height: "100%" }}
		      renderForeground={() => (
		      	<View style={{ justifyContent: "flex-end", paddingBottom: 20, height: PARALLAX_HEADER_HEIGHT }} >

					<View style={styles.nextpray} >
						<Text style={styles.nextpray_title} > {title.toUpperCase()} </Text>
						<Text style={styles.nextpray_remain} > 02:32:65 </Text>
						<Text style={styles.nextpray_name} > GUEWE </Text>
					</View>

				</View>
		      )}>
		      <View style={{ height: "100%"}} >
				<PraysList />
				</View>
		    </ParallaxScrollView>
		);
	}
}
const styles = StyleSheet.create({
  page_container: {
  	backgroundColor: "#fff",
    height: "100%"
  },
  qibla:{
  	position: "absolute",
  	right: 20,
  	top: PARALLAX_HEADER_HEIGHT - 40,
  	padding: 10,
  	zIndex: 80,
  	borderRadius: 100,
  	backgroundColor: "green"
  },
  nextpray:{
  	justifyContent: "flex-end",
  	alignItems: "center",
  },
  nextpray_name:{
  	color: "#fff",
  	fontFamily: "Anton",
  	fontSize: 25,
  	lineHeight: 35
  },
  nextpray_remain:{
  	color: "#fff",
  	fontFamily: "Questrial",
  	fontSize: 50,
  	lineHeight: 50 
  },
  nextpray_title:{
  	color: "#fff",
  	fontFamily: "Questrial",
  	fontSize: 13  
  },
});
