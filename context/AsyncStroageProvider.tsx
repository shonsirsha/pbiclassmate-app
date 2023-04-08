import React, {ReactNode, useCallback, useEffect, useState} from 'react';
import {Vocab} from '../types';
import {ASYNC_STORAGE_UTILS} from '../utils';
import {AsyncStorageContext} from './AsyncStorageContext';

const AsyncStroageProvider = ({children}: {children: ReactNode}) => {
  const {readData, storeData} = ASYNC_STORAGE_UTILS;
  const [allSavedVocab, setAllSavedVocab] = useState<Vocab[] | null>(null);

  const getAllSavedVocab = useCallback(async () => {
    const saved = await readData<Vocab[]>('vocab');
    if (saved) {
      setAllSavedVocab(saved);
    }
  }, [readData]);

  useEffect(() => {
    getAllSavedVocab();
  }, [getAllSavedVocab]);

  const saveVocab = async (vocab: Vocab, isFavorite: boolean) => {
    if (allSavedVocab) {
      //if favorite === true means save this vocab
      // otherwise filter out (delete) that vocab
      const newVocab = isFavorite
        ? [vocab, ...allSavedVocab]
        : [...allSavedVocab].filter(v => v.id !== vocab.id);
      await storeData('vocab', newVocab);
      await getAllSavedVocab();
    }
  };
  return (
    <AsyncStorageContext.Provider value={{allSavedVocab, saveVocab}}>
      {children}
    </AsyncStorageContext.Provider>
  );
};

export default AsyncStroageProvider;
