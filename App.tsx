/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import QRCodeScannerScreen from './screens/QRCodeScannerScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  QRCodeScannerScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
        </Stack.Group>
        <Stack.Group
          screenOptions={{presentation: 'modal', headerShown: false}}>
          <Stack.Screen
            name="QRCodeScannerScreen"
            component={QRCodeScannerScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
