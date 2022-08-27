import React from "react";
import { View ,StyleSheet ,Text} from 'react-native'
import NoteButton from "./NoteButton";

function Note(props) {
  return (
    <View style ={style.note}>
    <Text style ={style.title}>{props.title}</Text>
    <Text style ={style.content}>{props.content}</Text>
    <NoteButton/>

    </View>
  );
}

const style = StyleSheet.create({
    note : {"backgroundColor":"#fff","borderRadius":7,  shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,"padding":10,"width":300,"margin":16,
    flex: 1,
    flexDirection: 'column',}
, 
    title : {
        fontSize :40 ,
        marginBottom:6 ,

    },
    content :{
        
        fontSize:25 ,
        marginBottom :10 , 
        
    }
})

export default Note;
