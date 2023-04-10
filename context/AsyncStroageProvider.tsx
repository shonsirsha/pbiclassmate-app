import React, {ReactNode, useCallback, useEffect, useState} from 'react';
import {Reading, Vocab} from '../types';
import {ASYNC_STORAGE_UTILS} from '../utils';
import {AsyncStorageContext} from './AsyncStorageContext';

const AsyncStroageProvider = ({children}: {children: ReactNode}) => {
  const {readData, storeData} = ASYNC_STORAGE_UTILS;
  const [allSavedVocab, setAllSavedVocab] = useState<Vocab[] | null>(null);
  const [allSavedReadings, setAllSavedReadings] = useState<Reading[] | null>(
    null,
  );

  const getAllSavedVocab = useCallback(async () => {
    const saved = await readData<Vocab[]>('vocab');
    if (saved) {
      setAllSavedVocab(saved);
    }
  }, [readData]);

  const getAllReadings = useCallback(async () => {
    const saved = await readData<Reading[]>('readings');
    if (saved) {
      setAllSavedReadings(saved);
    }
  }, [readData]);

  useEffect(() => {
    getAllSavedVocab();
    getAllReadings();
  }, [getAllReadings, getAllSavedVocab]);

  const saveVocab = async (vocab: Vocab, isFavorite: boolean) => {
    if (allSavedVocab) {
      //if favorite === true means save this vocab
      // otherwise filter out (delete) that vocab
      const newVocab = isFavorite
        ? [vocab, ...allSavedVocab]
        : [...allSavedVocab].filter(v => v.id !== vocab.id);
      await storeData('vocab', newVocab);
    } else {
      await storeData('vocab', [vocab]);
    }
    await getAllSavedVocab();
  };

  const saveReading = async (reading: Reading, isFavorite: boolean) => {
    if (allSavedReadings) {
      const newVocab = isFavorite
        ? [reading, ...allSavedReadings]
        : [...allSavedReadings].filter(r => r.id !== reading.id);
      await storeData('readings', newVocab);
    } else {
      await storeData('readings', [reading]);
    }
    await getAllReadings();
  };

  return (
    <AsyncStorageContext.Provider
      value={{allSavedVocab, allSavedReadings, saveVocab, saveReading}}>
      {children}
    </AsyncStorageContext.Provider>
  );
};

export default AsyncStroageProvider;
