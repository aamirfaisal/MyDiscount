import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Introslider from '../screens/Introslider/Index';
import Login from '../screens/Login/Index'
import Signup from '../screens/Signup/Index'
import Forget from '../screens/Forget/Index'
import Otp from '../screens/Otp/Index'
import Changepassword from '../screens/Changepassword/Index'
import Splash from '../screens/Splash/Index'
import Termcondition from '../screens/Termcondition/index'
import ConfirmEmail from '../screens/ConfirmEmail/index'
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Introslider"
          component={Introslider}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Forget"
          component={Forget}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Otp"
          component={Otp}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Changepassword"
          component={Changepassword}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Termcondition"
          component={Termcondition}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Confirmemail"
          component={ConfirmEmail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
