import axios from 'axios';
import { stringify } from 'querystring';
import cookieStorage from './cookieStorage';


class Net {
  constructor() {
    this.BASE_URL = process.env.API_BASE_URL || 'http://localhost:8080';
    this.headers = {
      'Content-Type': 'application/json',
    };
  }
  _getHeaders = () => {
    const headers = this.headers;
    const token = cookieStorage.get('token');
    if (token) {
      headers.Authorization = `Token ${token}`;
    }
    return headers;
  }

  get = ({ url, data }) => {
    const query = stringify(data);
    const headers = this._getHeaders();

    return new Promise(async(resolve, reject) => {
      await axios.get(`${this.BASE_URL}/${url}/${query ? `?${query}` : ''}`, {
        headers,
      })
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    });
  }

  post = ({ url, data = {}, config = {} }) => {
    const headers = this._getHeaders();

    return new Promise(async(resolve, reject) => {
      await axios.post(`${this.BASE_URL}/${url}/`, data, {
        headers,
        ...config,
      })
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    });
  }

  put = ({ url, data = {}, queryData, config = {} }) => {
    const headers = this._getHeaders();
    const query = stringify(queryData);

    return new Promise(async(resolve, reject) => {
      await axios.put(`${this.BASE_URL}/${url}/${query ? `?${query}` : ''}`, data, {
        headers,
        ...config,
      })
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    });
  }

  patch = ({ url, data = {}, config = {} }) => {
    const headers = this._getHeaders();

    return new Promise(async(resolve, reject) => {
      await axios.patch(`${this.BASE_URL}/${url}/`, data, {
        headers,
        ...config,
      })
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    });
  }

  delete = ({ url, config = {} }) => {
    const headers = this._getHeaders();

    return new Promise(async(resolve, reject) => {
      await axios.delete(`${this.BASE_URL}/${url}/`, {
        headers,
        ...config,
      })
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    });
  }
}

export default new Net();
