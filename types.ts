import {Track} from 'react-native-track-player';

export type Vocab = {
  id: string;
  nameIndonesian: string;
  nameEnglish: string;
  audioURL: string;
};

export type Reading = {
  id: string;
  title: string;
  color: string;
  detail: string;
  relevantVocab: Vocab[];
  track: Track;
};
