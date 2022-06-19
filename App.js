import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Signup from './src/screens/SignupScreen';
import Signin from './src/screens/signinScreen/Signin';
import HomeScreen from './src/screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from './src/screens/ProfileScreen';
import ContactUs from './src/screens/ContactUs';
import ExitAppScreen from './src/screens/ExitAppScreen';
import SettingsScreen from './src/screens/settingsScreen';
import CustomDrawer from './src/components/CustomDrawer';
import CareerQuiz from './src/screens/CareerQuiz';
import Prediction from './src/screens/Prediction';
import ComputerScience from './src/screens/ExploreFields/ComputerScience';
import SoftwareEngineering from './src/screens/ExploreFields/SoftwareEngineering';
import ComputerEngineering from './src/screens/ExploreFields/ComputerEngneering';
import ArtificialIntelligence from './src/screens/ExploreFields/ArtificialIntelligence';
import Telecommunication from './src/screens/ExploreFields/Telecommunication';
import DataScience from './src/screens/ExploreFields/DataScience';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const ExploreStack = createNativeStackNavigator();


const CareerStack = () => {
  return(
  <Stack.Navigator>
    <Stack.Screen name='Signin' component={Signin} options={{headerShown: false}}/>
    <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
    <Stack.Screen name='CareerQuiz' component={CareerQuiz} options={{headerShown: false}}/>
    <Stack.Screen name='Prediction' component={Prediction} options={{headerShown: false}}/>
  </Stack.Navigator>
  )
}

const ExploreFields = () => {
  return(
    <ExploreStack.Navigator>
      <ExploreStack.Screen name="SoftwareEngineering" component={SoftwareEngineering} options={{headerShown: false}}/>
      <ExploreStack.Screen name="ComputerScience" component={ComputerScience} options={{headerShown: false}}/>
      <ExploreStack.Screen name="ComputerEngineering" component={ComputerEngineering} options={{headerShown: false}}/>
      <ExploreStack.Screen name="ArtificialIntelligence" component={ArtificialIntelligence} options={{headerShown: false}}/>
      <ExploreStack.Screen name="Telecommunication" component={Telecommunication} options={{headerShown: false}}/>
      <ExploreStack.Screen name="DataScience" component={DataScience} options={{headerShown: false}}/>
    </ExploreStack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent = {props =>  <CustomDrawer {...props}/>}>
        <Drawer.Screen name="Home" component={CareerStack} options={{headerShown: false}}/>
        <Drawer.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
        <Drawer.Screen name="AboutUs" component={ExploreFields} options={{headerShown: false}}/>
        <Drawer.Screen name="ContactUs" component={ContactUs} options={{headerShown: false}}/>
        <Drawer.Screen name="Settings" component={SettingsScreen} options={{headerShown: false}}/>
        <Drawer.Screen name="Exit" component={ExitAppScreen} options={{headerShown: false}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;