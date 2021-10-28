import axios from 'axios';
import { BASE_URL, token } from '../utils/variables';

export class helper {
  /**
  * @param string url - of the API
  * @param string method - GET, POST, PUT, PATCH, DELETE
  * @param object params - for requests that requires params GET
  * @param object data - for requests that requires data POST PUT DELETE PATCH

  * @return {Promise} with the keys status, message, data, error
  */

  static unauthenticated = async ({ method, url, data }) => {
    try {
      const response = await axios({
        method: method,
        url: BASE_URL + url,
        data: data,
      });

      return response;
    } catch (err) {
      return {
        status: false,
      };
    }
  };

  static authenticated = async ({ method, url, data }) => {
    const response = await axios({
      method: method,
      url: BASE_URL + url,
      data: data,
      responseType: 'json',
      headers: {
        Authorization: '',
        token: `${token}`,
      },
    });

    return response;
  };
}
