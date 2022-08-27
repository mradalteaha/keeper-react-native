import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from './src/screens/ColorScreen';
import NoteScreen from "./src/screens/NoteScreen";



const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components : ComponentsScreen,
    List : ListScreen ,
    ImageScreen : ImageScreen ,
    CounterScreen : CounterScreen ,
    ColorScreen: ColorScreen,
    NoteScreen: NoteScreen ,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "My First App",
    },
  }
);

export default createAppContainer(navigator);
