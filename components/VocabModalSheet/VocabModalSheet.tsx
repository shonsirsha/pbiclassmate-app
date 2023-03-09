import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import React, {useRef, useCallback, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const VocabModalSheet = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <BottomSheetModalProvider>
      {/* <Button
        onPress={handlePresentModalPress}
        title="Present Modal"
        color="black"
      /> */}
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        enablePanDownToClose
        snapPoints={['50%', '50%']}
        containerStyle={styles.bottomSheetContainer}
        handleStyle={styles.handle}
        backgroundStyle={styles.background}
        onChange={handleSheetChanges}>
        <View style={styles.contentContainer}>
          <Text>Awesomes 🎉</Text>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  background: {
    backgroundColor: '#7AF289',
  },
  handle: {
    backgroundColor: '#7AF289',
  },
  bottomSheetContainer: {
    position: 'absolute',
    zIndex: 100,
  },
});

export default VocabModalSheet;
