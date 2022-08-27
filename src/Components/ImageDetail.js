import React from 'react'
import { View,Text ,StyleSheet ,Image } from 'react-native'


function ImageDetail (props){

    return (
        <View>
        <Image source={props.imageSource} />
        <Text style = {styles.text}>{props.title}</Text>
        
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
      fontSize: 30,
    },
  });
export default ImageDetail; 