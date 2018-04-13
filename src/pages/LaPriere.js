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

const DAYS = 1000 * 60 * 60 * 24;
const HOURS = 1000 * 60 * 60;
const MINUTES = 1000 * 60;
const moment = require('moment');
require('moment-precise-range-plugin');

export default class LaPriere extends Component {
	constructor(props){
		super(props);
		var next_pray_time = new Date("2017-12-24 06:24").getTime();
		this.state = {
			interval_obj: null,
			give_header_bg: false,
			remain_time: null,
			next_pray_time: next_pray_time
		}
	}
	componentDidMount() {
		this.runTime();
		var next_pray_time = new Date("2017-12-24 06:24").getTime();
		var x = setInterval(this.runTime.bind(this), 1000);
		this.setState({
			interval_obj: x,
			give_header_bg: false,
			next_pray_time: next_pray_time
		});

	}
	runTime (){
		var m1 = moment();
		var m2 = moment("2017-12-24 06:24",'YYYY-MM-DD HH:mm:ss');
		var diff = moment.preciseDiff(m1, m2, true);
		let seconds = diff.seconds < 10 ? "0"+diff.seconds : diff.seconds; 
		let minutes = diff.minutes < 10 ? "0"+diff.minutes : diff.minutes; 
		let hours = diff.hours < 10 ? "0"+diff.hours : diff.hours; 
	  // Display the result in the element with id="demo"
		let remain = hours + ":" + minutes + ":" + seconds;

		this.setState({remain_time: remain})

	  // If the count down is finished, write some text 
	  // if (distance < 0) {
	  //   clearInterval(this.state.interval_obj);
	  //   // document.getElementById("demo").innerHTML = "EXPIRED";
	  // }
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
						<Text style={styles.nextpray_remain} > {this.state.remain_time} </Text>
						<Text style={styles.nextpray_name} > FADJR </Text>
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
  	fontSize: 35,
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
