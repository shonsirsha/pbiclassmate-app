import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../App';
import VocabCardSmall from '../components/Cards/VocabCardSmall';
import Header from '../components/Header/Header';
import {MOCKED_SAVED_VOCABS} from './HomeScreen';

const SavedVocabScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'SavedVocabScreen'>) => {
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <Header
          title="Saved Vocabulary"
          withBackButton
          navigation={navigation}
        />

        <ScrollView style={styles.scrollView}>
          <View style={styles.vocabsContainer}>
            {MOCKED_SAVED_VOCABS.map(vocab => (
              <View style={styles.vocabCardInnerContainer} key={vocab.id}>
                <VocabCardSmall vocab={vocab} />
              </View>
            ))}
          </View>
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
  scrollView: {
    height: '100%',
  },
  vocabsContainer: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '100%',
    flexWrap: 'wrap',
  },
  vocabCardInnerContainer: {
    marginRight: 8,
    marginBottom: 8,
  },
});

export default SavedVocabScreen;
