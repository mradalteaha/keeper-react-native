import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import NoteScreen from "./src/screens/NoteScreen";



const navigator = createStackNavigator(
  {

    NoteScreen: NoteScreen ,
  },
  {
    initialRouteName: "NoteScreen",
    defaultNavigationOptions: {
      title: "Keeper",
      headerTitleStyle :{
        color : '#fff' , 
        fontSize : 30,
        fontWeight:'200',
        fontStyle: 'italic' ,
        margin:7,
        alignSelf:'center',
        position:'relative',
        
      },
      headerStyle :{
        backgroundColor:"#f5ba13",
      }
    },
  }
);

export default createAppContainer(navigator);
