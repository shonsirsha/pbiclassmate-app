import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Vocab} from '../../types';
import LinkButton from '../Buttons/LinkButton';
import VoccabCardSmall from '../Cards/VocabCardSmall';
import HeadingText from '../Text/HeadingText';
import BodyText from '../Text/BodyText';

const VocabSlider = ({
  title,
  vocabs,
  onPressGoToSavedVocab,
  showSavedVocabLink = true,
}: {
  title: string;
  vocabs: Vocab[] | null;
  onPressGoToSavedVocab: () => void;
  showSavedVocabLink?: boolean;
}) => {
  return (
    <View style={styles.savedReadingsContainer}>
      <HeadingText style={styles.savedReadingsHeader}>{title}</HeadingText>

      {vocabs && vocabs.length > 0 ? (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.vocabScrollViewContentContainer}
          horizontal>
          <>
            {vocabs.map(vocab => (
              <View key={vocab.id} style={styles.readingCardContainer}>
                <VoccabCardSmall vocab={vocab} />
              </View>
            ))}
          </>
        </ScrollView>
      ) : (
        //showSavedVocabLink means it's used in the
        // homepage where all saved vocabs gets displayed.

        // So, if that's the case and when
        // there's no saved vocabs,
        // then display a CTA text
        <>
          {showSavedVocabLink ? (
            <View style={styles.vocabScrollViewContentContainerNoContent}>
              <BodyText style={styles.ctaTextPrimary}>
                It seems like your vocab list is empty.
              </BodyText>
              <BodyText style={styles.ctaTextSecondary}>
                Start adding words by scanning the QR code on the book! 📖
              </BodyText>
            </View>
          ) : null}
        </>
      )}

      {showSavedVocabLink && vocabs && vocabs.length > 0 ? (
        <View style={styles.linkButtonCotnainer}>
          <LinkButton onPress={onPressGoToSavedVocab}>
            See all saved vocabulary
          </LinkButton>
        </View>
      ) : null}
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
  vocabScrollViewContentContainer: {
    paddingLeft: 24,
  },
  vocabScrollViewContentContainerNoContent: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  ctaTextPrimary: {
    fontSize: 18,
  },
  ctaTextSecondary: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 400,
  },
});

export default VocabSlider;
