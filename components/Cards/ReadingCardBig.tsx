import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Reading} from '../../types';
import BodyText from '../Text/BodyText';

type TReadingCardProp = Omit<Reading, 'audioURL' | 'relevantVoccabs' | 'id'> & {
  onPress: (title: string, detail: string) => void;
};

const ReadingCardBig = ({title, color, detail, onPress}: TReadingCardProp) => {
  return (
    <TouchableOpacity
      style={styles({color}).card}
      activeOpacity={0.55}
      onPress={() => onPress(title, detail)}>
      <BodyText>{title}</BodyText>
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
