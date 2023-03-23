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
import SavedVocab from '../components/SavedVocab/SavedVocab';
import BodyText from '../components/Text/BodyText';
import HeadingText from '../components/Text/HeadingText';
import VocabModalSheet from '../components/VocabModalSheet/VocabModalSheet';
import {Reading, Vocab} from '../types';

type SavedReadingsCardWithID = Omit<Reading, 'relevantVoccabs' | 'audioURL'>;

export const MOCKED_SAVED_READING: SavedReadingsCardWithID[] = [
  {
    id: '123',
    title: 'Peter Pesan Kamar Hotel',
    color: '#FAE9DF',
    detail: 'A1 - Pelajaran 3',
  },
  {
    id: '1234',
    title: 'Ke Rumah Sakit',
    color: '#E9F7FA',
    detail: 'A1 - Pelajaran 3',
  },
  {
    id: '1233214',
    title: 'Kebakaran di Pasar',
    color: '#9CFCA8',
    detail: 'A1 - Pelajaran 1',
  },
  {
    id: '12334',
    title: 'Puasa Tahun 2023',
    color: '#F7E7FF',
    detail: 'A1 - Pelajaran 1',
  },
];

export const MOCKED_SAVED_VOCABS: Vocab[] = [
  {id: '1', nameIndonesian: 'Tertawa', nameEnglish: 'Laugh', audioURL: ''},
  {id: '2', nameIndonesian: 'Lelah', nameEnglish: 'Tired', audioURL: ''},
  {id: '3', nameIndonesian: 'Senyum', nameEnglish: 'Smile', audioURL: ''},
  {id: '4', nameIndonesian: 'Berlari', nameEnglish: 'Run', audioURL: ''},
];
const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'HomeScreen'>) => {
  const [savedReadings, setSavedReadings] = useState<SavedReadingsCardWithID[]>(
    [],
  );
  const [savedVocabs, setSavedVocabs] = useState<Vocab[]>([]);
  useEffect(() => {
    setSavedReadings(MOCKED_SAVED_READING);
    setSavedVocabs(MOCKED_SAVED_VOCABS);
  }, []);

  const handlePressQRCodeButton = () => {
    navigation.navigate('QRCodeScannerScreen');
  };

  const handlePressGoToSavedReadings = () => {
    navigation.navigate('SavedReadingsScreen');
  };

  const handlePressGoToSavedVocab = () => {
    navigation.navigate('SavedVocabScreen');
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={'dark-content'} />
      <VocabModalSheet />
      <View style={styles.view}>
        <View>
          <View style={styles.greetingContainer}>
            <HeadingText>Hi there!</HeadingText>
            <BodyText style={styles.date} fontLight>
              Saturday, 04 March
            </BodyText>
          </View>
          <SavedReadings
            savedReadings={savedReadings}
            onPressGoToSavedReadings={handlePressGoToSavedReadings}
          />
          <SavedVocab
            savedVocabs={savedVocabs}
            onPressGoToSavedVocab={handlePressGoToSavedVocab}
          />
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

  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default HomeScreen;
