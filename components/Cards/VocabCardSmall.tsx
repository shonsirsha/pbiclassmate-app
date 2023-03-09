import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constants/COLORS';
import BodyText from '../Text/BodyText';

type TProps = {
  vocab: string;
};

const VocabCardSmall = ({vocab}: TProps) => {
  const handleTap = () => {};
  return (
    <TouchableOpacity
      onPress={handleTap}
      activeOpacity={0.55}
      style={styles.view}>
      <BodyText>{vocab}</BodyText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: COLORS.green,
    minWidth: 102,
    paddingHorizontal: 16,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
});

export default VocabCardSmall;
