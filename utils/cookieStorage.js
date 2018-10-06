import Cookies from 'js-cookie';

const domain = process.env.UI_ROOT_DOMAIN || 'localhost';
const prefix = 'warsawjs25-';
const settings = {
  domain,
};

const CustomCookieStorage = {
  set(key, value) {
    Cookies.set(prefix + key, value, settings);
  },

  get(key) {
    return Cookies.get(prefix + key, settings);
  },

  getJSON(key) {
    return Cookies.getJSON(prefix + key, settings);
  },

  remove(key) {
    Cookies.remove(prefix + key, settings, settings);
  },

  getWithPrefix(obj, key) {
    return obj[prefix + key];
  },
};

export default CustomCookieStorage;
