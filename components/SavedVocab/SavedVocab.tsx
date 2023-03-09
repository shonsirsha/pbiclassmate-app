import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Vocabs} from '../../types';
import LinkButton from '../Buttons/LinkButton';
import VoccabCardSmall from '../Cards/VocabCardSmall';
import HeadingText from '../Text/HeadingText';

type TProps = {
  savedVocabs: Omit<Vocabs, 'nameEnglish' | 'audioURL'>[];
};

const SavedVocab = ({savedVocabs}: TProps) => {
  return (
    <View style={styles.savedReadingsContainer}>
      <HeadingText style={styles.savedReadingsHeader}>
        Saved vocabulary
      </HeadingText>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.savedReadingsScrollViewContentContainer}
        horizontal>
        {savedVocabs.map(vocab => (
          <View key={vocab.id} style={styles.readingCardContainer}>
            <VoccabCardSmall vocab={vocab.nameIndonesian} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.linkButtonCotnainer}>
        <LinkButton onPress={() => {}}>See all saved vocabulary</LinkButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  savedReadingsContainer: {
    marginTop: 24,
  },
  readingCardContainer: {
    marginRight: 24,
  },
  savedReadingsHeader: {
    marginBottom: 16,
    marginLeft: 24,
  },
  linkButtonCotnainer: {
    marginLeft: 24,
  },
  savedReadingsScrollViewContentContainer: {
    paddingLeft: 24,
  },
});

export default SavedVocab;
