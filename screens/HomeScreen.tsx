/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../App';
import QRCodeButton from '../components/Buttons/QRCodeButton';

const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'HomeScreen'>) => {
  const handlePressQRCodeButton = () => {
    navigation.navigate('QRCodeScannerScreen');
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.view}>
        <QRCodeButton
          onPress={handlePressQRCodeButton}
          style={styles.qrCodeButton}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: '#fff',
  },
  view: {
    backgroundColor: '#fff',
    display: 'flex',
    height: '100%',
  },
  qrCodeButton: {
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 24,
  },
});

export default HomeScreen;
