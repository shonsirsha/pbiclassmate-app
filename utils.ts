import AsyncStorage from '@react-native-async-storage/async-storage';

export const secondsToHHMMSS = (seconds: number | string) => {
  // credits - https://stackoverflow.com/a/37096512
  seconds = Number(seconds);
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor((seconds % 3600) % 60);

  const hrs = h > 0 ? (h < 10 ? `0${h}:` : `${h}:`) : '';
  const mins = m > 0 ? (m < 10 ? `0${m}:` : `${m}:`) : '00:';
  const scnds = s > 0 ? (s < 10 ? `0${s}` : s) : '00';
  return `${hrs}${mins}${scnds}`;
};

export const ASYNC_STORAGE_UTILS = {
  storeData: async (key: string, value: any, object = true): Promise<void> => {
    if (object) {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } else {
      await AsyncStorage.setItem(key, value);
    }
  },
  readData: async <T>(key: string, object = true): Promise<T | null> => {
    if (object) {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue ? JSON.parse(jsonValue) : null;
    }
    const value = await AsyncStorage.getItem(key);
    return value as T;
  },
  removeData: async (key: string): Promise<void> => {
    await AsyncStorage.removeItem(key);
  },
};
