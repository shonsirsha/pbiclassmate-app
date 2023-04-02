import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Track} from 'react-native-track-player';
import {SavedReadingsCardWithID} from '../../screens/HomeScreen';
import BodyText from '../Text/BodyText';

type TReadingCardSmall = SavedReadingsCardWithID & {
  onPress: (title: string, detail: string, track: Track) => void;
};

const ReadingCardSmall = ({
  title,
  color,
  onPress,
  track,
}: TReadingCardSmall) => {
  return (
    <TouchableOpacity
      style={styles({color}).card}
      activeOpacity={0.55}
      onPress={() => onPress(title, '', track)}>
      <BodyText>{title}</BodyText>
    </TouchableOpacity>
  );
};

const styles = (props?: {color?: string}) => {
  return StyleSheet.create({
    card: {
      height: 60,
      padding: 16,
      borderRadius: 8,
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: props?.color ? props.color : '#000',
    },
    detailText: {
      marginTop: 'auto',
    },
  });
};
export default ReadingCardSmall;
