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
  audioURL: string;
  detail: string;
  relevantVoccabs: Vocab[];
};
