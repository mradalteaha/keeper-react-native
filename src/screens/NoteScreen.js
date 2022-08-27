
import React from 'react'
import {  SafeAreaView,
    StyleSheet,
    View,
    FlatList,
    Image,Text} from 'react-native'
import Note  from '../Components/Note';



function NoteScreen () { 
    const title = 'Test Note '
    const content  = 'I am a note component'

    const NotesArray = [{title :'Test Note ' ,content :'I am a note casdasdasdasdasdadomponent'},{title :'Test Note ' ,content :'I am a note cossmponent'},
    {title :'Test Note ' ,content :'I am aasdas note component'},{title :'Test Note ' ,content :'I am a notasde cossmponent'}
,{title :'Test Note ' ,content :'I am a asd comssponent'},{title :'Test Note ' ,content :'I am a note comasdponent'}
,{title :'Test Note ' ,content :'I am a noteasd cssomponent'}
,{title :'Test Note ' ,content :'I am a note casdaasdasdasdasdadomponent'}]

    return ( 
        
        <SafeAreaView style={styles.mainPage}>
        <View style={styles.header}>
        <Text style={styles.headerTitle}> Keeper </Text>
        </View>
        <SafeAreaView style={{height:'90%',width:'100%',justifyContent: 'center',}}>
        <FlatList 
        style = {{width : '100%' , position : 'relative'}}
        numColumns={3}
            keyExtractor={(Note)=>Note.content}
                showsVerticalScrollIndicator = {false}
                
            data={NotesArray}
            renderItem={({item})=>{
                return <Note content={item.content} title={item.title} />;
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