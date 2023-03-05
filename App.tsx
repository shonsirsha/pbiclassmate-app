/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import QRCodeButton from './components/Buttons/QRCodeButton';
import ReadingCardBig from './components/Cards/ReadingCardBig';
import VoccabCardSmall from './components/Cards/VoccabCardSmall';
import HeadingText from './components/Text/HeadingText';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <HeadingText>Welcome back!</HeadingText>
        <VoccabCardSmall voccab="Pergi" />
        <QRCodeButton />
        <ReadingCardBig
          title="Peter Pesan Kamar Hotel"
          color="#FAE9DF"
          detail="A1 - Pelajaran 3"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
