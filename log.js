import React, {Component} from 'react';
import {Text,View} from 'react-native';
import {Bold,Content,Title,Header,Left,Footer,Card,Thumbnail,Input,Item,Icon,Container} from 'native-base';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class log extends Component{
	render(){
		
	const tableHead = ['User Query', 'Date & time', 'Alexa response', 'Query Success'];
    const tableData = [
                        ['Who directed Titanic', '6/2/18 13:00', 'I dont know', 'NO'],
                        ['Who acted in revenant', '12/1/18 12:12', 'Leonardo', 'YES'],
                      ];
		
		return(
		<Container>
		 <Header style={{backgroundColor:'black',height:80}}>
		  <Left style={{flex:1}}> 
		   <Text style={{color:'#f7af20',fontSize:25,marginTop:10}}>Query Log</Text>
		  </Left>
		 </Header>
		 <View style={{backgroundColor:'#f7af20',flex:1}}>
           <Table>
             <Row data={tableHead} style={{ backgroundColor: '#39393a'}} textStyle={{marginLeft: 5,color:'white'}}/>
             <Rows data={tableData} textStyle={{marginLeft: 5}}/>
           </Table>
         </View>
		</Container>
		)
	};
} 