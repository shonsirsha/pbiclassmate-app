import React, {ReactNode} from 'react';
import {StyleSheet, Text} from 'react-native';

type TProps = {
  children: ReactNode;
  fontLight?: boolean;
  style?: {};
};
const HeadingText = ({children, style = {}}: TProps) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontWeight: '600',
    fontSize: 24,
    color: '#000',
  },
});

export default HeadingText;
