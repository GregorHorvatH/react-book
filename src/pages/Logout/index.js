import React, { useContext } from 'react';
import appContext from '../../reducer/appContext';

import { logout } from '../../reducer/actions';

const Logout = () => {
  const { dispatch } = useContext(appContext);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
  };

  return (
    <div className="logout">
      <h2>Выход</h2>
      <button className="btn btn-danger" onClick={handleLogout}>
        Выйти
      </button>
    </div>
  );
};

export default Logout;
