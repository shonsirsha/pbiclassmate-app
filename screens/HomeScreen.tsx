import React, {useContext} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../App';
import QRCodeButton from '../components/Buttons/QRCodeButton';
import SavedReadings from '../components/SavedReadings/SavedReadings';
import VocabSlider from '../components/VocabSlider/VocabSlider';
import BodyText from '../components/Text/BodyText';
import HeadingText from '../components/Text/HeadingText';
import {Reading} from '../types';
import {AsyncStorageContext} from '../context/AsyncStorageContext';

const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'HomeScreen'>) => {
  const {allSavedReadings, allSavedVocab} = useContext(AsyncStorageContext);

  const handlePressQRCodeButton = () => {
    navigation.navigate('QRCodeScannerScreen');
  };

  const handlePressGoToSavedReadings = () => {
    navigation.navigate('SavedReadingsScreen');
  };

  const handlePressGoToSavedVocab = () => {
    navigation.navigate('SavedVocabScreen');
  };

  const handlePressCard = (reading: Reading) => {
    navigation.navigate('ReadingPlayerScreen', {
      reading,
    });
  };

  const dateNow = Date.now();
  const dayName = new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(
    new Date(dateNow),
  );
  const date = new Date(dateNow).getDate();
  const month = new Date(dateNow).toLocaleString('default', {month: 'long'});

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={'dark-content'} />

      <View style={styles.view}>
        <View>
          <View style={styles.greetingContainer}>
            <HeadingText>Hi there!</HeadingText>
            <BodyText style={styles.date} fontLight>
              {dayName}, {date} {month}
            </BodyText>
          </View>
          <SavedReadings
            savedReadings={allSavedReadings}
            onPressCard={handlePressCard}
            onPressGoToSavedReadings={handlePressGoToSavedReadings}
          />
          <VocabSlider
            title={'Saved vocabulary'}
            vocabs={allSavedVocab}
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
