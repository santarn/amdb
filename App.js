import {StackNavigator} from 'react-navigation';
import React, {Component} from 'react';
import{
	Platform,
	StyleSheet,
	Text,View
}from 'react-native';

import home from './home';
import log from './log';
import setng from './setng';

const RootNav=StackNavigator({
	home:{screen:home},
	log:{screen:log},
setng:{screen:setng}},
		{
		headerMode:'none',
mode:'modal'		
		}		
); 

export default class App extends Component{
	render(){
		return(
		<RootNav/>
		)
	};
}