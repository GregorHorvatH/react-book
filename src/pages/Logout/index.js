import React, { useContext } from 'react';
import appContext from '../../reducer/appContext';

import { logout } from '../../reducer/actions';

const Logout = () => {
  const { dispatch } = useContext(appContext);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="logout">
      <h2>Выход</h2>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
};

export default Logout;
