import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RootStackParamList} from '../App';
import LinkButton from '../components/Buttons/LinkButton';
import BodyText from '../components/Text/BodyText';
import HeadingText from '../components/Text/HeadingText';
import Icon from 'react-native-vector-icons/FontAwesome';

const QRCodeScannerScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'QRCodeScannerScreen'>) => {
  const [isTorchOn, setIsTorchOn] = useState(false);
  const {on, off, torch} = RNCamera.Constants.FlashMode;
  const torchOn = on && torch;
  const torchOff = off;
  const handlePressClose = () => {
    navigation.goBack();
  };
  const onSuccess = (e: {data: string}) => {
    console.log(e.data);
  };
  return (
    <View style={styles.view}>
      <LinkButton style={styles.closeButton} onPress={handlePressClose}>
        Close
      </LinkButton>
      <HeadingText style={styles.headingText}>Scan QR Code</HeadingText>
      <View style={styles.qrCodeContainer}>
        <Icon name="camera" style={styles.cameraIcon} size={48} color="#fff" />
        <TouchableOpacity
          style={styles.flashIcon}
          activeOpacity={0.5}
          onPress={() => setIsTorchOn(prev => !prev)}>
          <Icon name="flash" size={32} color={isTorchOn ? '#fff' : '#D9D9D9'} />
        </TouchableOpacity>
        <View style={styles.innerQrContainer}>
          <QRCodeScanner
            cameraStyle={styles.camera}
            onRead={onSuccess}
            showMarker
            flashMode={isTorchOn ? torchOn : torchOff}
          />
        </View>
      </View>
      <BodyText style={styles.bodyText}>
        To start, scan the visible QR Code from the book.
      </BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'column',
  },
  qrCodeContainer: {
    marginTop: 32,
    borderRadius: 8,
    position: 'relative',
    height: 350,
    backgroundColor: '#D9D9D9',
  },
  cameraIcon: {
    top: '45%',
    left: '45%',
    marginRight: '50%',
    position: 'absolute',
    zIndex: 1,
  },
  innerQrContainer: {
    position: 'relative',
    zIndex: 98,
  },
  flashIcon: {
    position: 'absolute',
    zIndex: 99,
    right: 4,
    top: 4,
    padding: 16,
  },
  closeButton: {
    marginLeft: 'auto',
  },
  camera: {
    height: 350,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 8,
    overflow: 'hidden',
  },
  headingText: {
    marginTop: 16,
    textAlign: 'center',
  },
  bodyText: {
    textAlign: 'center',
    marginTop: 32,
  },
});

export default QRCodeScannerScreen;
