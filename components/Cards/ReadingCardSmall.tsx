import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Reading} from '../../types';
import BodyText from '../Text/BodyText';

type TReadingCardSmall = Omit<
  Reading,
  'audioURL' | 'relevantVoccabs' | 'id' | 'detail'
> & {
  onPress: () => void;
};

const ReadingCardSmall = ({title, color, onPress}: TReadingCardSmall) => {
  return (
    <TouchableOpacity
      style={styles({color}).card}
      activeOpacity={0.55}
      onPress={onPress}>
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
