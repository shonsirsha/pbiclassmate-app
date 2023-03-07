/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../App';
import QRCodeButton from '../components/Buttons/QRCodeButton';
import SavedReadings from '../components/SavedReadings/SavedReadings';
import BodyText from '../components/Text/BodyText';
import HeadingText from '../components/Text/HeadingText';
import {Reading} from '../types';

type SavedReadingsCardWithID = Omit<Reading, 'relevantVoccabs' | 'audioURL'>;

const MOCKED_SAVED_READING: SavedReadingsCardWithID[] = [
  {
    id: '123',
    title: 'Peter Pesan Kamar Hotel',
    color: '#FAE9DF',
    detail: 'A1 - Pelajaran 3',
  },
  {id: '1234', title: 'asd', color: '#E9F7FA', detail: 'A1 - Pelajaran 3'},
  {id: '12334', title: 'asd', color: '#9CFCA8', detail: 'A1 - Pelajaran 1'},
  {id: '12334', title: 'asd', color: '#F7E7FF', detail: 'A1 - Pelajaran 1'},
];

const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'HomeScreen'>) => {
  const [savedReadings, setSavedReadings] = useState<SavedReadingsCardWithID[]>(
    [],
  );
  useEffect(() => {
    setSavedReadings(MOCKED_SAVED_READING);
  }, []);

  const handlePressQRCodeButton = () => {
    navigation.navigate('QRCodeScannerScreen');
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.view}>
        <View>
          <View style={styles.greetingContainer}>
            <HeadingText>Hi there!</HeadingText>
            <BodyText style={styles.date} fontLight>
              Saturday, 04 March
            </BodyText>
          </View>
          <SavedReadings savedReadings={savedReadings} />
        </View>
        <QRCodeButton
          onPress={handlePressQRCodeButton}
          style={styles.qrCodeButton}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: '#fff',
  },
  view: {
    backgroundColor: '#fff',
    display: 'flex',
    height: '100%',
    paddingVertical: 24,
  },
  greetingContainer: {
    marginHorizontal: 24,
  },
  date: {
    marginTop: 4,
  },
  qrCodeButton: {
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 24,
  },
});

export default HomeScreen;
