import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/COLORS';
import Icon from 'react-native-vector-icons/FontAwesome';

type TPRops = {
  played: boolean;
  onPress: () => void;
};

const PlayPauseButton = ({played, onPress}: TPRops) => {
  const playIcon = <Icon name="play" size={30} color="#fff" />;
  const pauseIcon = <Icon name="pause" size={30} color="#fff" />;
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={onPress}
      style={styles.button}>
      {played ? playIcon : pauseIcon}
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
export default PlayPauseButton;
