export type Voccabs = {
  nameIndonesian: string;
  nameEnglish: string;
  audioURL: string;
};

export type Reading = {
  title: string;
  color: string;
  audioURL: string;
  detail: string;
  relevantVoccabs: Voccabs[];
};
