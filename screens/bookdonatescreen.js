import React,{Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,FlatList} from 'react-native';
import Myheader from '../components/MyHeader';
import firebase from 'firebase';
import db from '../config';
import {ListItem} from 'react-native-elements'

export default class Bookdonation extends Component {
  constructor(){
    super();
    this.state={
      requestedbooks:[]
    }
    this.requestreferrence=null
  }
  requestedbookslist=()=>{
    this.requestreferrence=db.collection('requestbooks')
    .onSnapshot((snapshot)=>{
    var requestedlist=snapshot.docs.map(document=>
      document.data());
    this.setState({requestedbooks:requestedlist})
    })  
  }
  componentDidMount(){this.requestedbookslist()}
  componentWillUnmount(){this.requestreferrence()}
  keyExtractor=(item,index)=>index.toString()
  renderItem=({item,i})=>{
    return(
      <ListItem key={i}
      title={item.bookname}
      subtitle={item.reason}
      titleStyle ={{color:'black',fontWeight:'bold'}}
      rightElement={
      <TouchableOpacity style = {styles.button}>
        <Text>
          View
        </Text>
      </TouchableOpacity>}bottomDivider/>
    )
  }
    render(){
  return (
    <View style = {{flex:1}}>
      <Myheader title="donatebooks" navigation ={this.props.navigation}/>
      <View style={{flex:1}}>
        {this.state.requestedbooks.length==0?
      (
      <View style = {styles.subContainer}>
        <Text style={{fontSize:20}}>List of all requested books</Text></View>)
        :
        (<FlatList keyExtractor={this.keyExtractor}
        data ={this.state.requestedbooks}renderItem={this.renderItem}/>)}
      </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
      width:100,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ff5722",
      shadowColor:"#000",
      shadowOffset:{
          width:0,
          height:8
      }
  }
})