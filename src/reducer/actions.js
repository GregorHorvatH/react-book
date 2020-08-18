import types from './types';

export const setToken = (token) => ({
  type: types.SET_TOKEN,
  payload: token,
});

export const logout = () => ({
  type: types.LOGOUT,
});
