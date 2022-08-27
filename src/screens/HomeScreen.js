import React from 'react';
import { Text, StyleSheet ,View,Button ,TouchableOpacity } from 'react-native';
import MyButton from '../Components/MyButton'



function HomeScreen ({navigation}) {


  function goToComponentsScreen(){
    navigation.navigate('Components')
  }

  function goToListScreen(){
    navigation.navigate('List')

  }
  function goToImageScreen(){
    navigation.navigate('ImageScreen')

    
  }

  function goToCounterScreen(){
    navigation.navigate('CounterScreen')

    
  }

  function goToColorScreen(){
    navigation.navigate('ColorScreen')

    
  }
  function goToNoteScreen(){
    navigation.navigate('NoteScreen')

    
  }

  


  return (
  <View>
  <Text style={styles.text}>Morad First React App</Text>
  <MyButton title='go To ComponentsScreen'
    onPress={goToComponentsScreen}
  />
    <MyButton title='Go To ListScreen'
    onPress={goToListScreen}
  />

<MyButton title='Go To ImageScreen'
    onPress={goToImageScreen}
  />
  
  <MyButton title='Go To CounterScreen'
    onPress={goToCounterScreen}
  />

<MyButton title='Go To ColorScreen'
    onPress={goToColorScreen}
  />
  <MyButton title='Go To Note Screen'
    onPress={goToNoteScreen}
  />


</View>)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
