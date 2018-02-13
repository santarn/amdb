import React, { Component } from 'react';
import {Image,
  Text,
  View,FlatList,ScrollView,TouchableOpacity,RefreshControl,StyleSheet,Dimensions,TouchableHighlight
} from 'react-native';
import {Content,Tabs,Tab,ListItem,TabHeading,List,Container,Right,Fab,Card,CardItem,Left,Drawer,Header,Title,Icon,Button,Thumbnail,Body,Footer,FooterTab} from 'native-base';




export default class home extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { 
	uri: require('./idle.jpg'),
	txt: 'Tap to speak',
	icn: 'md-mic',
	toggle: false
	}
   }
  
   change() {
	   if(!this.state.toggle)
	   {   
         console.log('state changed!');
         this.setState({
          uri: require('./listening2.gif'),
		  txt: 'Tap to stop',
		  icn: 'ios-radio-button-on-outline',
		  toggle : true
	     });
	   }
	   else{
        console.log('state reversed!');
        this.setState({
         uri: require('./idle.jpg'),
		 txt: 'Tap to speak',icn: 'md-mic',
		 toggle : false
	    });

           }
            }

queryOpen(){
	this.props.navigation.navigate('log');
	console.log('state queried!');
        this.setState({
         uri: require('./idle.jpg'),
		 txt: 'Tap to speak',icn: 'md-mic',
		 toggle : false
	    });
}
 
setOpen(){
	this.props.navigation.navigate('setng');
	console.log('state queried!');
        this.setState({
         uri: require('./idle.jpg'),
		 txt: 'Tap to speak',icn: 'md-mic',
		 toggle : false
	    });
} 
  
  render() {
    return (
	<Container style={{backgroundColor:'black'}}>
	 
	 <Header style={{backgroundColor:'black',height:80}}>
	  <Text style={{marginTop:20,color:'white',fontSize:35,color:'#f7af20'}}>
	   Alexa-The Movie DB
	  </Text>
	 </Header>
	 
	 <View style={{flex:1}}>
	  <TouchableHighlight>
	   <Image source={this.state.uri} style={{height:300,width:Dimensions.get('window').width}}/>
      </TouchableHighlight>	 
	 </View>
	 <Footer style={{backgroundColor:'black',height:110}}>
	  
	  <Left>
	   <Button transparent style={{marginTop:20}} onPress={()=>this.setOpen()}>
	    <Icon name='md-settings' style={{color:'#f7af20',fontSize:30}}/>
	   </Button>
	  </Left>
	  
	  <TouchableOpacity transparent style={{height:90,flexDirection:'column',alignItems:'center'}}  onPress={() => this.change()}>
	      <Text style={{color:'#333231',fontStyle:'italic'}}>
		    {this.state.txt}
	      </Text>
	      <Icon name={this.state.icn} style={{marginTop:3,color:'#f7af20',fontSize:60}}/>
	  </TouchableOpacity>
	  
	  <Right>
	   <Button transparent style={{marginTop:20}} onPress={()=>this.queryOpen()}>
	    <Icon name='md-time' style={{color:'#f7af20',fontSize:30}}/>
	   </Button>
      </Right>	 
	 </Footer>
    
	</Container>	
   	);
  }
}

