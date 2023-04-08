import {createContext} from 'react';
import {Vocab} from '../types';

type AsyncStorageContextType = {
  allSavedVocab: Vocab[] | null;
  saveVocab: (vocab: Vocab, isFavorite: boolean) => void;
};

export const AsyncStorageContext = createContext<AsyncStorageContextType>(
  {} as AsyncStorageContextType,
);
