import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Track} from 'react-native-track-player';
import {SavedReadingsCardWithID} from '../../screens/HomeScreen';
import BodyText from '../Text/BodyText';

type TReadingCardProp = SavedReadingsCardWithID & {
  onPress: (title: string, detail: string, track: Track) => void;
};

const ReadingCardBig = ({
  id,
  title,
  color,
  detail,
  track,
  onPress,
}: TReadingCardProp) => {
  return (
    <TouchableOpacity
      style={styles({color}).card}
      activeOpacity={0.55}
      onPress={() => onPress(title, detail, track)}>
      <BodyText>
        {title} {id}
      </BodyText>
      <BodyText fontLight style={styles().detailText}>
        {detail}
      </BodyText>
    </TouchableOpacity>
  );
};

const styles = (props?: {color?: string}) => {
  return StyleSheet.create({
    card: {
      width: 260,
      height: 116,
      padding: 16,
      borderRadius: 8,
      backgroundColor: props?.color ? props.color : '#000',
    },
    detailText: {
      marginTop: 'auto',
    },
  });
};
export default ReadingCardBig;
