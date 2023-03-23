import 'react-native-gesture-handler';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import HomeScreen from './screens/HomeScreen';
import QRCodeScannerScreen from './screens/QRCodeScannerScreen';
import VocabModalSheetProvider from './context/VocabModalSheetProvider';
import SavedReadingsScreen from './screens/SavedReadingsScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  QRCodeScannerScreen: undefined;
  SavedReadingsScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <VocabModalSheetProvider>
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
              screenOptions={{
                presentation: 'modal',
                headerShown: false,
              }}>
              <Stack.Screen
                name="QRCodeScannerScreen"
                component={QRCodeScannerScreen}
              />
            </Stack.Group>
            <Stack.Group
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen
                name="SavedReadingsScreen"
                component={SavedReadingsScreen}
              />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </VocabModalSheetProvider>
    </GestureHandlerRootView>
  );
}

export default App;
