import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Reading} from '../../types';
import LinkButton from '../Buttons/LinkButton';
import ReadingCardBig from '../Cards/ReadingCardBig';
import HeadingText from '../Text/HeadingText';

type TProps = {
  savedReadings: Omit<Reading, 'relevantVoccabs' | 'audioURL'>[];
  onPressGoToSavedReadings: () => void;
};

const SavedReadings = ({savedReadings, onPressGoToSavedReadings}: TProps) => {
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
            <ReadingCardBig
              title={reading.title}
              detail={reading.detail}
              color={reading.color}
            />
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
