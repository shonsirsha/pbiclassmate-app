import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Reading} from '../../types';
import ReadingCardBig from '../Cards/ReadingCardBig';
import HeadingText from '../Text/HeadingText';

type TProps = {
  savedReadings: Omit<Reading, 'relevantVoccabs' | 'audioURL'>[];
};

const SavedReadings = ({savedReadings}: TProps) => {
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
    </View>
  );
};

const styles = StyleSheet.create({
  savedReadingsContainer: {
    marginTop: 24,
  },
  readingCardContainer: {
    marginRight: 16,
  },
  savedReadingsHeader: {
    marginBottom: 16,
    marginLeft: 24,
  },
  savedReadingsScrollViewContentContainer: {
    marginLeft: 24,
  },
});

export default SavedReadings;
