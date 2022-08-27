import React from 'react'
import {Text ,View, StyleSheet ,Image} from 'react-native'



function ComponentsScreen(params) {

    const myname = 'Morad Al Teaha'
    return (<View>
        <Text style = {styles.headStyle}>Getting started with react Native !</Text>
  
        <Text style ={styles.nameStyle }>My name {myname}</Text>
        
    </View>)
    
}

const styles = StyleSheet.create({
    headStyle :{
        fontSize : 45
    }
    ,
    nameStyle :{
        fontSize : 20
    }

});

export default ComponentsScreen;