import { StyleSheet, TouchableOpacity, Text } from "react-native";




const CreateNoteButton = ({ onPress, title }) => (
  
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
 
  );


  const styles = StyleSheet.create({
   
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#powderblue",
      borderRadius: 15,
     height:350,
      position : 'relative',
       outerWidth : 50,
       outerHeight: 50
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });

  export default CreateNoteButton ; 