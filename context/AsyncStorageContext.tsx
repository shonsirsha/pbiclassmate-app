import {createContext} from 'react';
import {Reading, Vocab} from '../types';

type AsyncStorageContextType = {
  allSavedVocab: Vocab[] | null;
  saveVocab: (vocab: Vocab, isFavorite: boolean) => void;
  saveReading: (reading: Reading, isFavorite: boolean) => void;
  allSavedReadings: Reading[] | null;
};

export const AsyncStorageContext = createContext<AsyncStorageContextType>(
  {} as AsyncStorageContextType,
);
