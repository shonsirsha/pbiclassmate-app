/** returns `Reading` object from the REST API
 */

import axios from 'axios';
import {Reading} from '../types';

export const getReading = async (id: string): Promise<Reading | undefined> => {
  try {
    // fetching from mock REST API server
    // until backend is ready.
    const response = await axios.get<Reading>(`https://run.mocky.io/v3/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
