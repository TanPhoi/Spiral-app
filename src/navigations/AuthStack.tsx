import ForgotPassword from '@/screens/ForgotPassword';
import Login from '@/screens/Login';
import Register from '@/screens/Register';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';

const Stack = createNativeStackNavigator();
const AuthStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="forgot-password" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
