import React, { useReducer, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import Book from '../Book';

import AppContext from '../../reducer/appContext';
import { setToken } from '../../reducer/actions';
import reducer from '../../reducer';

const initialState = {
  isAuthorized: false,
  errorMessage: undefined,
  token: undefined,
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token === '7bdf9835-262c-4a06-81fd-8d0b678dbfc4') {
      dispatch(setToken(token));
    }
  }, []);

  return (
    <HashRouter>
      <AppContext.Provider value={{ state, dispatch }}>
        <Book />
      </AppContext.Provider>
    </HashRouter>
  );
};

export default App;
