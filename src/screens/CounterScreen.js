import React, { useState } from 'react';
import { Text, StyleSheet ,View,Button ,TouchableOpacity } from 'react-native';
import MyButton from '../Components/MyButton'


function CounterScreen (props) {

    const [counter , counterUpdate] = useState(0);


  function increase(){
    counterUpdate(counter+1)
  }

  
  function decrease(){
    counterUpdate(counter-1)
  }


  return (
  <View>


  <Text style={styles.text}>Counter = {counter}</Text>

    <MyButton title='increase' onPress={increase}/>

    <MyButton title='decrease' onPress={decrease} />
    


  

</View>)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    margin : 30, 
    marginLeft : 120,
   
  },
 
});

export default CounterScreen;
