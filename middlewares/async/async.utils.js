export const getError = (error = {}) => {
  const { data = {}, status } = (error.response || {});

  return { ...data, code: status };
};

export const isFunction = fn => typeof fn === 'function';
