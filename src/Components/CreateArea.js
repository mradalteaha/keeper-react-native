import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput ,View} from "react-native";
import MyButton from './MyButton'


function CreateArea(props) {
  const [NoteTitle, onChangeTitle] = useState("Note Title");
  const [NoteContent, onChangeContent] = useState("Note Content");

  function submitNote() {
    let newNote= {
      title : NoteTitle , 
      content : NoteContent ,
    }

    props.modaltriggerNewNote(newNote);
    
  }

  return (
    <SafeAreaView >
    <TextInput
    maxLength={25}
      style={styles.inputTitle}
      onChangeText={onChangeTitle}
      value={NoteTitle}
    />

      <TextInput
        style={styles.inputContent}
        onChangeText={onChangeContent}
        value={NoteContent}
      />

<View>
            <MyButton title="Add Note" onPress={submitNote} />
            <MyButton title="cancel" onPress={props.modaltriggerCancel} />
          </View>
  
  </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  inputTitle: {
    
    margin: 12,
    borderWidth: 1,
    padding: 3,
    height :'20%' 
  },
  inputContent: {
    
    margin: 12,
    borderWidth: 1,
    padding: 3,
    height :'40%' 
  },
  view:{
    height:'20%',
    width:'90%'
  }
});
export default CreateArea;
