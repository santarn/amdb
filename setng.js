import React, {Component} from 'react';
import {Slider,Text,View} from 'react-native';
import {Bold,Content,Picker,Form,Button,Title,Header,Left,Right,List,Body,Switch,ListItem,Footer,Card,Thumbnail,Input,Item,Icon,Container} from 'native-base';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class setng extends Component{
	
	constructor(props) {
    super(props);
    this.state = {valu: 50,
      selected2: undefined
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }
   change(valu) {
    this.setState(() => {
      return {
        valu: parseFloat(valu),
      };
    });
  }
	
	render(){
		const {valu} = this.state;
		return(
		<Container>
		 <Header style={{backgroundColor:'black',height:80}}>
		  <Left style={{flex:1}}> 
		   <Text style={{color:'#f7af20',fontSize:25,marginTop:10}}>Settings</Text>
		  </Left>
		 </Header>
		 <List style={{backgroundColor:'#f7af20',flex:1}}>
            <ListItem>
              <Body>
                <Text style={{fontSize:18}}>Language</Text>
       	  <Form>
            <Picker
              mode="dropdown"
              placeholder="Select One"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Item label="English" value="key0"/>
              <Item label="Hindi" value="key1" />
              <Item label="French" value="key2" />
              <Item label="Telugu" value="key3" />
              <Item label="Spanish" value="key4" />
            </Picker>
          </Form>
			   </Body>
            </ListItem>
            <ListItem>
              <Body>
                <Text style={{fontSize:18}}>Sensitivity</Text>
               <Slider
          step={1}
          maximumValue={100}
          onValueChange={this.change.bind(this)}
          valu={valu}
        />
			  </Body>
            </ListItem>
            <ListItem>
              <Body>
                <Text style={{fontSize:18}}>About us</Text>
              </Body>
            </ListItem>
          </List>
		
		</Container>
		)
	};
} 