import types from './types';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case types.SET_TOKEN:
      return { isAuthorized: true, token: payload };

    case types.LOGOUT:
      return { isAuthorized: false, token: undefined };

    default:
      throw state;
  }
};

export default reducer;
