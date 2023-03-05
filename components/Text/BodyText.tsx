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
      fontWeight: fontLight ? '300' : '500',
      fontSize: 16,
    },
  });

export default BodyText;
