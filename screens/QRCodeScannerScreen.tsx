import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useRef, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RootStackParamList} from '../App';
import LinkButton from '../components/Buttons/LinkButton';
import BodyText from '../components/Text/BodyText';
import HeadingText from '../components/Text/HeadingText';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getReading} from '../api/reading';

const QRCodeScannerScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'QRCodeScannerScreen'>) => {
  const [isTorchOn, setIsTorchOn] = useState(false);
  const [loading, setLoading] = useState(false);
  const {on, off, torch} = RNCamera.Constants.FlashMode;
  const torchOn = on && torch;
  const torchOff = off;
  const ref = useRef<QRCodeScanner>(null);
  const handlePressClose = () => {
    navigation.goBack();
  };
  const onSuccess = async (e: {data: string}) => {
    setLoading(true);
    const data = e.data;
    const fetchedReading = await getReading(data);
    if (fetchedReading) {
      navigation.goBack();
      navigation.navigate('ReadingPlayerScreen', {
        reading: fetchedReading,
      });
      setLoading(false);
    } else {
      Alert.alert(
        'Oops!',
        'Sorry, the QR code you scanned is invalid or the data cannot be found. Please try again.',
        [
          {
            text: 'Try again',
            onPress: () => {
              setLoading(false);
            },
          },
        ],
      );
    }
  };
  return (
    <View style={styles.view}>
      <LinkButton style={styles.closeButton} onPress={handlePressClose}>
        Close
      </LinkButton>
      <HeadingText style={styles.headingText}>Scan QR Code</HeadingText>
      <View style={styles.qrCodeContainer}>
        {loading ? (
          <ActivityIndicator size={'large'} style={styles.activityIndicator} />
        ) : (
          <Icon
            name="camera"
            style={styles.cameraIcon}
            size={48}
            color="#fff"
          />
        )}
        <TouchableOpacity
          style={styles.flashIcon}
          activeOpacity={0.5}
          onPress={() => setIsTorchOn(prev => !prev)}>
          <Icon name="flash" size={32} color={isTorchOn ? '#fff' : '#D9D9D9'} />
        </TouchableOpacity>
        <View style={styles.innerQrContainer}>
          {!loading ? (
            <QRCodeScanner
              ref={ref}
              cameraStyle={styles.camera}
              onRead={onSuccess}
              showMarker
              reactivate
              reactivateTimeout={8000}
              fadeIn
              flashMode={isTorchOn ? torchOn : torchOff}
            />
          ) : null}
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
    display: 'none',
    left: '45%',
    marginRight: '50%',
    position: 'absolute',
    zIndex: 1,
  },
  activityIndicator: {
    top: '50%',
    left: '36%',
    marginRight: '50%',
    position: 'absolute',
    zIndex: 2,
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
