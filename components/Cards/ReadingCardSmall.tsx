import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import BodyText from '../Text/BodyText';
import {Reading} from '../../types';

type TReadingCardSmall = {
  reading: Reading;
  onPress: (reading: Reading) => void;
};

const ReadingCardSmall = ({reading, onPress}: TReadingCardSmall) => {
  const {title, color} = reading;
  return (
    <TouchableOpacity
      style={styles({color}).card}
      activeOpacity={0.55}
      onPress={() => onPress(reading)}>
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
