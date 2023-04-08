import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import BodyText from '../Text/BodyText';
import {Reading} from '../../types';

type TReadingCardProp = {
  reading: Reading;
  onPress: (reading: Reading) => void;
};

const ReadingCardBig = ({reading, onPress}: TReadingCardProp) => {
  const {id, title, color, detail} = reading;
  return (
    <TouchableOpacity
      style={styles({color}).card}
      activeOpacity={0.55}
      onPress={() => onPress(reading)}>
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
