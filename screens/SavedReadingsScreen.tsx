import React, {useContext} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../App';
import ReadingCardSmall from '../components/Cards/ReadingCardSmall';
import Header from '../components/Header/Header';
import {Reading} from '../types';
import {AsyncStorageContext} from '../context/AsyncStorageContext';

const SavedReadingsScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'SavedReadingsScreen'>) => {
  const handlePress = (reading: Reading) => {
    navigation.navigate('ReadingPlayerScreen', {
      reading,
    });
  };
  const {allSavedReadings} = useContext(AsyncStorageContext);
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <Header title="Saved Readings" withBackButton navigation={navigation} />
        <ScrollView style={styles.scrollView}>
          {allSavedReadings ? (
            <>
              {allSavedReadings.map(reading => (
                <View style={styles.cardContainer} key={reading.id}>
                  <ReadingCardSmall reading={reading} onPress={handlePress} />
                </View>
              ))}
            </>
          ) : null}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 24,
    paddingTop: 0,
  },
  cardContainer: {
    marginTop: 16,
    marginBottom: 8,
  },
  scrollView: {
    height: '100%',
  },
});

export default SavedReadingsScreen;
