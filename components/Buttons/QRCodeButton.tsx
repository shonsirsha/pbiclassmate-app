import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/COLORS';
import Icon from 'react-native-vector-icons/FontAwesome';

const QRCodeButton = () => {
  const myIcon = <Icon name="qrcode" size={44} color="#fff" />;
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={() => console.warn('pressed')}
      style={styles.button}>
      {myIcon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    width: 76,
    height: 76,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
  },
});
export default QRCodeButton;
