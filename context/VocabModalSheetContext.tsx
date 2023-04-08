import {createContext} from 'react';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {Vocab} from '../types';

type ModalSheetContextType = {
  vocab?: Vocab;
  displayVocab: (passedVocab: Vocab) => void;
  bottomSheetModalRef: React.RefObject<BottomSheetModalMethods>;
  closeVocab: () => void;
};

export const VocabModalSheetContext = createContext<ModalSheetContextType>(
  {} as ModalSheetContextType,
);
