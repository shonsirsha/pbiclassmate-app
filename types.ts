import {Track} from 'react-native-track-player';

export type VocabResponse = {
  id: number;
  attributes: Vocab;
};

export type ReadingResponse = {
  id: number;
  attributes: Reading;
};

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
  track: Track; // duration, url, artwork are essential...
};
