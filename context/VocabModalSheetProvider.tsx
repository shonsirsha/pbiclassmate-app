import {BottomSheetModal} from '@gorhom/bottom-sheet';
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {Vocab} from '../types';
import {VocabModalSheetContext} from './VocabModalSheetContext';
import {ASYNC_STORAGE_UTILS} from '../utils';

const VocabModalSheetProvider = ({children}: {children: ReactNode}) => {
  const [vocab, setVocab] = useState<Vocab>();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [favorite, setFavorite] = useState(false);
  const [allSavedVocab, setAllSavedVocab] = useState<Vocab[] | null>(null);

  const {readData, storeData} = ASYNC_STORAGE_UTILS;

  const getAllSavedVocab = useCallback(async () => {
    const saved = await readData<Vocab[]>('vocab');
    if (saved) {
      setAllSavedVocab(saved);

      if (saved.length === 0) {
        closeVocab();
      }
    }
  }, [readData]);

  useEffect(() => {
    getAllSavedVocab();
  }, [getAllSavedVocab]);

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

  const toggleFavorite = async () => {
    if (vocab) {
      const favToggled = !favorite;
      setFavorite(favToggled);
      if (allSavedVocab) {
        //if favToggled === true means save this vocab
        // otherwise filter out (delete) that vocab
        const newVocab = favToggled
          ? [vocab, ...allSavedVocab]
          : [...allSavedVocab].filter(v => v.id !== vocab.id);
        await storeData('vocab', newVocab);
        await getAllSavedVocab();
      }
    }
  };
  const closeVocab = () => {
    setVocab(undefined);
    bottomSheetModalRef?.current?.dismiss();
  };

  return (
    <VocabModalSheetContext.Provider
      value={{
        displayVocab,
        vocab,
        bottomSheetModalRef,
        closeVocab,
        toggleFavorite,
        setFavorite,
        favorite,
        allSavedVocab,
      }}>
      {children}
    </VocabModalSheetContext.Provider>
  );
};

export default VocabModalSheetProvider;
