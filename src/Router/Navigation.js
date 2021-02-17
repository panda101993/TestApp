import React from 'react'
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator,} from '@react-navigation/stack';
import Login from '../screens/Login/index';
import Signup from '../screens/SignUp/index';
import Home from '../screens/Home/index';

const authStack = createStackNavigator();

function MyStack() {
  return (
    <authStack.Navigator
      initialRouteName="Signup"
       screenOptions={{
         headerMode: 'none', 
 
       }}
      >
      <authStack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Signup' }}
      />       
      <authStack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'},
          {headerLeft: null} 
        }
      />
       <authStack.Screen 
        name="Home" 
        component={Home} 
        options={
          {title: 'Home'},
          {headerLeft: null} 
        }
      />

    </authStack.Navigator>
  );
}


// const Tab = createBottomTabNavigator()
// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Dashboard" component={Dashboard} />
//     </Tab.Navigator>
//   );
// }


// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//       <Drawer.Navigator>
//       <Drawer.Screen name="Dashboard"  component={MyTabs}/>
      
            
//       </Drawer.Navigator>
//   );
// }


export default function Navigation() {
  return (
    <NavigationContainer>
<MyStack/>      
    </NavigationContainer>
  );
}
