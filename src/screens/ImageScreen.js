import React from 'react'
import { View,Text ,StyleSheet } from 'react-native'
import ImageDetail from '../Components/ImageDetail';

function ImageScreen (){

    return (
        <View>
         <Text style = {styles.text}> Image screens</Text>
        <ImageDetail title='Forest' imageSource = {require('../../assets/forest.jpg')} />
        <ImageDetail title='Beach' imageSource = {require('../../assets/beach.jpg')} />
        <ImageDetail title='Mountain' imageSource = {require('../../assets/mountain.jpg')} />
   

        </View>
    );
}

const styles = StyleSheet.create({
    text: {
      fontSize: 30,
      textAlign:'center',
      color: '#d32f2f',

    },
  });


export default ImageScreen; 