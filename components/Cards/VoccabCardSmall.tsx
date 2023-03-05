import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constants/COLORS';
import BodyText from '../Text/BodyText';

type TProps = {
  voccab: string;
};

const VoccabCardSmall = ({voccab}: TProps) => {
  const handleTap = () => {};
  return (
    <TouchableOpacity
      onPress={handleTap}
      activeOpacity={0.75}
      style={styles.view}>
      <BodyText>{voccab}</BodyText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: COLORS.green,
    width: 102,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
});

export default VoccabCardSmall;
