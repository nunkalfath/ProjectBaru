import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import MyAccount from './src/screens/MyAccount';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
          },
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'My Login'}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'My Home'}}
        />
        <Stack.Screen
          name="Account"
          component={MyAccount}
          options={{title: 'My Account'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
