import 'react-native-gesture-handler';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import HomeScreen from './screens/HomeScreen';
import QRCodeScannerScreen from './screens/QRCodeScannerScreen';
import VocabModalSheetProvider from './context/VocabModalSheetProvider';
import SavedReadingsScreen from './screens/SavedReadingsScreen';
import SavedVocabScreen from './screens/SavedVocabScreen';
import VocabModalSheet from './components/VocabModalSheet/VocabModalSheet';
import NavigationWrapper from './components/NavigationWrapper/NavigationWrapper';
import ReadingPlayerScreen from './screens/ReadingPlayerScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  QRCodeScannerScreen: undefined;
  SavedReadingsScreen: undefined;
  SavedVocabScreen: undefined;
  ReadingPlayerScreen: {
    title: string;
    detail: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  const [routeName, setRouteName] = useState<string>();
  const navigationRef = createNavigationContainerRef();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <VocabModalSheetProvider>
        <VocabModalSheet />
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            setRouteName(navigationRef?.getCurrentRoute()?.name);
          }}
          onStateChange={async () => {
            const currentRouteName = navigationRef?.getCurrentRoute()?.name;
            setRouteName(currentRouteName);
          }}>
          <NavigationWrapper routeName={routeName}>
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
              <Stack.Group
                screenOptions={{
                  headerShown: false,
                }}>
                <Stack.Screen
                  name="SavedVocabScreen"
                  component={SavedVocabScreen}
                />
              </Stack.Group>
              <Stack.Group
                screenOptions={{
                  headerShown: false,
                  presentation: 'fullScreenModal',
                }}>
                <Stack.Screen
                  name="ReadingPlayerScreen"
                  component={ReadingPlayerScreen}
                />
              </Stack.Group>
            </Stack.Navigator>
          </NavigationWrapper>
        </NavigationContainer>
      </VocabModalSheetProvider>
    </GestureHandlerRootView>
  );
}

export default App;
