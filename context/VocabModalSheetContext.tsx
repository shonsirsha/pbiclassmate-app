import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {createContext, Dispatch} from 'react';
import {Vocab} from '../types';

type ModalSheetContextType = {
  vocab?: Vocab;
  displayVocab: (passedVocab: Vocab) => void;
  bottomSheetModalRef: React.RefObject<BottomSheetModalMethods>;
  closeVocab: () => void;
  toggleFavorite: () => void;
  setFavorite: Dispatch<React.SetStateAction<boolean>>;
  favorite: boolean;
  allSavedVocab: Vocab[] | null;
};

export const VocabModalSheetContext = createContext<ModalSheetContextType>(
  {} as ModalSheetContextType,
);
