import React from 'react'
import { View , Text , StyleSheet,FlatList } from 'react-native'


function ListScreen() {

    const friends = [
        {name :'friend #1' , Age:'15'},
        {name :'friend #2', Age:'18'},
        {name :'friend #3', Age:'23'},
        {name :'friend #4', Age:'18'},
        {name :'friend #5', Age:'58'},
        {name :'friend #6', Age:'17'},
        {name :'friend #7', Age:'20'},
    ];

    return (
 <FlatList 
 keyExtractor={(friend)=>friend.name}
    showsVerticalScrollIndicator = {false}
 data={friends}
  renderItem={({item,Age,index})=>{
    return <Text style={styles.textStyle} key={index}>{item.name} - Age :  {item.Age}</Text>;
  }}>

  </FlatList>

    );

};

const styles = StyleSheet.create({
    textStyle:{
        fontSize:15
        ,
        marginVertical : 50,
    }
})

export default ListScreen ; 