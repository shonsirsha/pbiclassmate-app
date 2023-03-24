import {BottomSheetModal} from '@gorhom/bottom-sheet';
import React, {ReactNode, useRef, useState} from 'react';
import {Vocab} from '../types';
import {VocabModalSheetContext} from './VocabModalSheetContext';

const VocabModalSheetProvider = ({children}: {children: ReactNode}) => {
  const [vocab, setVocab] = useState<Vocab>();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const displayVocab = (passedVocab: Vocab) => {
    if (vocab) {
      bottomSheetModalRef?.current?.dismiss();
      setTimeout(() => {
        bottomSheetModalRef?.current?.present();
        setVocab(passedVocab);
      }, 500);
    } else {
      bottomSheetModalRef?.current?.present();
      setVocab(passedVocab);
    }
  };

  const closeVocab = () => {
    setVocab(undefined);
    bottomSheetModalRef?.current?.dismiss();
  };

  return (
    <VocabModalSheetContext.Provider
      value={{displayVocab, vocab, bottomSheetModalRef, closeVocab}}>
      {children}
    </VocabModalSheetContext.Provider>
  );
};

export default VocabModalSheetProvider;
