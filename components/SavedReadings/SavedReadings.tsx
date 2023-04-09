import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import LinkButton from '../Buttons/LinkButton';
import ReadingCardBig from '../Cards/ReadingCardBig';
import HeadingText from '../Text/HeadingText';
import {Reading} from '../../types';
import BodyText from '../Text/BodyText';

type TProps = {
  savedReadings: Reading[] | null;
  onPressGoToSavedReadings: () => void;
  onPressCard: (reading: Reading) => void;
};

const SavedReadings = ({
  savedReadings,
  onPressGoToSavedReadings,
  onPressCard,
}: TProps) => {
  return (
    <View style={styles.savedReadingsContainer}>
      <HeadingText style={styles.savedReadingsHeader}>
        Saved readings
      </HeadingText>
      {savedReadings && savedReadings.length > 0 ? (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.savedReadingsScrollViewContentContainer}
          horizontal>
          <>
            {savedReadings.map(reading => (
              <View key={reading.id} style={styles.readingCardContainer}>
                <ReadingCardBig onPress={onPressCard} reading={reading} />
              </View>
            ))}
          </>
        </ScrollView>
      ) : (
        <View style={styles.savedReadingsScrollViewContentContainerNoContent}>
          <BodyText style={styles.ctaTextPrimary}>
            It looks like you haven't saved any readings yet.
          </BodyText>
          <BodyText style={styles.ctaTextSecondary}>
            Why not start by scanning a QR code on a book? 😉
          </BodyText>
        </View>
      )}
      {savedReadings && savedReadings.length > 0 ? (
        <View style={styles.linkButtonCotnainer}>
          <LinkButton onPress={onPressGoToSavedReadings}>
            See all saved readings
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
  savedReadingsScrollViewContentContainer: {
    paddingLeft: 24,
  },
  savedReadingsScrollViewContentContainerNoContent: {
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

export default SavedReadings;
