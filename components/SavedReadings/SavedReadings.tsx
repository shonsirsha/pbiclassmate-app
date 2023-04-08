import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import LinkButton from '../Buttons/LinkButton';
import ReadingCardBig from '../Cards/ReadingCardBig';
import HeadingText from '../Text/HeadingText';
import {Reading} from '../../types';

type TProps = {
  savedReadings: Reading[];
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
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.savedReadingsScrollViewContentContainer}
        horizontal>
        {savedReadings.map(reading => (
          <View key={reading.id} style={styles.readingCardContainer}>
            <ReadingCardBig onPress={onPressCard} reading={reading} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.linkButtonCotnainer}>
        <LinkButton onPress={onPressGoToSavedReadings}>
          See all saved readings
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

export default SavedReadings;
