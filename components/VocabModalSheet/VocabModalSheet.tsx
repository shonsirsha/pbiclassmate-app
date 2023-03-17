import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {VocabModalSheetContext} from '../../context/VocabModalSheetContext';
import BodyText from '../Text/BodyText';
import HeadingText from '../Text/HeadingText';

const VocabModalSheet = () => {
  const {vocab, bottomSheetModalRef, closeVocab} = useContext(
    VocabModalSheetContext,
  );

  const handleOnChange = (index: number) => {
    if (index === -1) {
      closeVocab();
    }
  };

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        enablePanDownToClose
        snapPoints={['30%', '30%']}
        containerStyle={styles.bottomSheetContainer}
        handleStyle={styles.handle}
        backgroundStyle={styles.background}
        onChange={handleOnChange}>
        <View style={styles.contentContainer}>
          <HeadingText style={styles.indonesian}>
            {vocab?.nameIndonesian}
          </HeadingText>
          <BodyText fontLight style={styles.english}>
            {vocab?.nameEnglish}
          </BodyText>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'flex-start',
  },
  indonesian: {
    fontSize: 28,
  },
  english: {
    marginTop: 8,
    fontSize: 21,
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