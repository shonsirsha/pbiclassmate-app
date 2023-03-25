import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../App';
import ReadingCardSmall from '../components/Cards/ReadingCardSmall';
import Header from '../components/Header/Header';
import {MOCKED_SAVED_READING} from './HomeScreen';

const SavedReadingsScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'SavedReadingsScreen'>) => {
  const handlePress = () => {
    navigation.navigate('ReadingPlayerScreen');
  };
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <Header title="Saved Readings" withBackButton navigation={navigation} />
        <ScrollView style={styles.scrollView}>
          {MOCKED_SAVED_READING.map(reading => (
            <View style={styles.cardContainer} key={reading.id}>
              <ReadingCardSmall
                title={reading.title}
                color={reading.color}
                onPress={handlePress}
              />
            </View>
          ))}
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
