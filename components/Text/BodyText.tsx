import React, {ReactNode} from 'react';
import {StyleSheet, Text} from 'react-native';

type TProps = {
  children: ReactNode;
  fontLight?: boolean;
  style?: {};
};
const BodyText = ({children, style = {}, fontLight = false}: TProps) => {
  return <Text style={[styles({fontLight}).text, style]}>{children}</Text>;
};

const styles = ({fontLight}: {fontLight: boolean}) =>
  StyleSheet.create({
    text: {
      fontWeight: fontLight ? '400' : '600',
      fontSize: 16,
      color: '#000',
    },
  });

export default BodyText;
