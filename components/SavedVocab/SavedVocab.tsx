import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Vocab} from '../../types';
import LinkButton from '../Buttons/LinkButton';
import VoccabCardSmall from '../Cards/VocabCardSmall';
import HeadingText from '../Text/HeadingText';

const SavedVocab = ({
  savedVocabs,
  onPressGoToSavedVocab,
}: {
  savedVocabs: Vocab[];
  onPressGoToSavedVocab: () => void;
}) => {
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
            <VoccabCardSmall vocab={vocab} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.linkButtonCotnainer}>
        <LinkButton onPress={onPressGoToSavedVocab}>
          See all saved vocabulary
        </LinkButton>
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
