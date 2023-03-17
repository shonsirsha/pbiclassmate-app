import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constants/COLORS';
import {VocabModalSheetContext} from '../../context/VocabModalSheetContext';
import {Vocab} from '../../types';
import BodyText from '../Text/BodyText';

const VocabCardSmall = ({vocab}: {vocab: Vocab}) => {
  const {displayVocab} = useContext(VocabModalSheetContext);
  const handleTap = () => {
    displayVocab(vocab);
  };
  return (
    <TouchableOpacity
      onPress={handleTap}
      activeOpacity={0.55}
      style={styles.view}>
      <BodyText>{vocab.nameIndonesian}</BodyText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: COLORS.green,
    minWidth: 102,
    paddingHorizontal: 16,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
});

export default VocabCardSmall;
