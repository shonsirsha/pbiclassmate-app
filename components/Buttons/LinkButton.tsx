import React, {ReactNode} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type TPRops = {
  children: ReactNode;
  onPress: () => void;
  style?: {};
};

const LinkButton = ({children, onPress, style}: TPRops) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.link, style]}
      activeOpacity={0.5}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  text: {
    fontSize: 16,
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
});

export default LinkButton;
