import React, { useState} from 'react';
import {Button, View,SafeAreaView, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import CreateArea from './CreateArea';
import CreateNoteButton from './MyButton'

const AddNoteModal = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };


    function submitNote(Note){
        props.noteSubmit(Note)
     
        setIsModalVisible(!isModalVisible);
    }

  return (
    <SafeAreaView style={styles.container}>
      <CreateNoteButton title="Click here to Add Note" onPress={toggleModal} />
      <Modal
        style ={styles.modal}
        isVisible={isModalVisible}>
        <View>
          <CreateArea modaltriggerCancel = {toggleModal} modaltriggerNewNote = {submitNote} />
      
        </View>
      </Modal>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height:'15%',
    width:'100%',
    backgroundColor: "powderblue"
    
  },
  modal :{

    backgroundColor: "powderblue",
  }
});
export default AddNoteModal;