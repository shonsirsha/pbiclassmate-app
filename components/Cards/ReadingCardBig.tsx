import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Reading} from '../../types';
import BodyText from '../Text/BodyText';

const ReadingCardBig = ({
  title,
  color,
  detail,
}: Omit<Reading, 'audioURL' | 'relevantVoccabs'>) => {
  return (
    <TouchableOpacity style={styles({color}).card} activeOpacity={0.75}>
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
