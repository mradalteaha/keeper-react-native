import { StyleSheet, TouchableOpacity, Text } from "react-native";




const NoteButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{'Delete'}</Text>
    </TouchableOpacity>
  );


  const styles = StyleSheet.create({
   
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      position : 'relative',
      margin: 15,
      marginBottom : 5,
      marginRight :40 ,
      width:40,
      height:30,
      alignSelf:'flex-end'
    },
    appButtonText: {
      fontSize: 35,
      position:'relative',
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
    }
  });

  export default NoteButton ; 