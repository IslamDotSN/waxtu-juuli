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
import IslamIcon from "../assets/Icons";

let {width, height } = Dimensions.get('window');
const prays = [
	{icon: "subah-prayer", name: "Fadjr", time: "6:29"},
	{icon: "zuhar-prayer", name: "Tisbar", time: "14:15"},
	{icon: "ramadan-sunrise", name: "Takussan", time: "16:45"},
	{icon: "maghrib-prayer", name: "Timis", time: "18:51"},
	{icon: "isha-prayer", name: "Guewe", time: "19:51"},
]
export default class PraysList extends Component {
	constructor(props){
		super(props);
		this.state = {
			prays: prays
		}
	}
	componentDidMount() {
		this.setState({prays: prays})
	}
    _keyExtractor(item, index){ return index; }
 
	makePrays({item}){
	  	return(
	      <TouchableHighlight onPress={ () => alert("salam") } >
	        <View style={styles.prayItem} >
		        <View style={styles.info} >
		        	<IslamIcon name={item.icon} size={35} color="#000"/>
		        	<Text style={ styles.prayname} > {item.name} </Text>
		        </View> 
		        <View style={styles.time} >
		          <Text style={styles.time_text} >{item.time} </Text>
		        </View> 
	        </View> 
	      </TouchableHighlight>
	  	)
	}
	render() {
		return (
			<View style={styles.page_container} >
				<Text style={styles.date} > du 21 DEC au 28 DEC </Text>
		        <FlatList
		          keyExtractor={this._keyExtractor}
		          data={prays}	
		          renderItem={this.makePrays.bind(this)}
		        />
			</View>
		);
	}
}
const styles = StyleSheet.create({
  page_container: {
    padding: 10,
    justifyContent: "space-between",
    backgroundColor:"#fff"
  },
  date:{
  	fontFamily: "Anton", 
  	color: "#757575",
  	textAlign: "center",
  	fontSize: 20
  	
  },
  prayItem:{
  	flexDirection: "row",
  	justifyContent: "space-between",
  	alignItems: "center",
  	padding: 10,
  	borderBottomWidth: 2,
  	borderColor: "#e8e8e8"
  },
  time_text:{
  	fontSize: 25,
  	fontFamily: "Anton"
  },
  info:{
  	flexDirection: "row",
  	alignItems: "center",
  	justifyContent: "center"
  },
  prayname:{
  	fontSize: 18,
  	fontFamily: "Questrial"
  }

});
