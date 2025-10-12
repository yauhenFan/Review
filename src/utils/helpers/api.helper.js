import axios from 'axios';
import { API_URL } from '../../data/url';

export const request = async (url, data = null, method = 'get') => {
  try {
    const response = await axios({
      method,
      url: url,
      headers: {},
      data,
    });

    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    return {
      status: error.reposnse,
    };
  }
};
