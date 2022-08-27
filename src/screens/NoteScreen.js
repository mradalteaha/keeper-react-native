
import React ,{useState} from 'react'
import {  SafeAreaView,
    StyleSheet,
    View,
    FlatList,
    Image,Text} from 'react-native'
import Note  from '../Components/Note';
import CreateArea from '../Components/CreateArea';
import AddNoteModal from '../Components/AddNoteModal';


function NoteScreen () { 
    const title = 'Test Note '
    const content  = 'I am a note component'

    const NotesArray = [{title :'Test Note ' ,content :'I am a note casdasdasdasdasdadomponent'}
    ,{title :'Test Note ' ,content :'I am a note cossmponent'},
   ]


const [notes, setNotes] = useState(NotesArray);

    function submitNote(newNote){

        setNotes(prevNotes => {
            return [...prevNotes, newNote];
          });

    }

    function deleteNote(id) {
        setNotes(prevNotes => {
          return prevNotes.filter((noteItem, index) => {
            return index !== id;
          });
        });
      }

    return ( 
        
        <SafeAreaView style={styles.mainPage}>
  

        <AddNoteModal noteSubmit={submitNote}/>

        <SafeAreaView style={{height:'90%',width:'100%',justifyContent: 'center',}}>
        <FlatList 
        style = {{width : '100%' , position : 'relative'}}
        numColumns={2}
            keyExtractor={(Note)=>Note.content}
                showsVerticalScrollIndicator = {false}
                
            data={notes}
            renderItem={({item ,index})=>{
                return <Note content={item.content} title={item.title} onDelete={deleteNote} id={index} />;
            }}>

            </FlatList>

</SafeAreaView>
    

    

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    mainPage:{
        backgroundColor:"powderblue",
        width:'100%',
        height:'100%',
        

    }
    ,
    header: {
        width:'100%',
        height:'7%' ,
        backgroundColor:"#f5ba13",
        paddingTop:16 ,
        paddingBottom:32,
        justifyContent: 'center',

    },
    headerTitle : {
        color : '#fff' , 
        fontSize : 30,
        fontWeight:'200',
        fontStyle: 'italic' ,
        margin:7,
        alignSelf:'flex-start',
        position:'absolute',
    }, 
})



export default NoteScreen ;