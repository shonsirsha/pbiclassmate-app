import React, {useContext, useEffect} from 'react';
import {VocabModalSheetContext} from '../../context/VocabModalSheetContext';

function NavigationWrapper({
  children,
  routeName,
}: {
  children: any;
  routeName?: string;
}) {
  const {closeVocab} = useContext(VocabModalSheetContext);
  useEffect(() => {
    setTimeout(() => {
      closeVocab();
    }, 100);

    setTimeout(() => {
      closeVocab();
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeName]);
  return <>{children}</>;
}

export default NavigationWrapper;
