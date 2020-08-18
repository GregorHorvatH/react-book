import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosMenu } from 'react-icons/io';

import appContext from '../../reducer/appContext';
import routes from '../../routes';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(true);
  const {
    state: { isAuthorized },
  } = useContext(appContext);

  const handleMenuClick = () => setShowMenu(!showMenu);

  return (
    <div className="navigation">
      <div className="menu-button" onClick={handleMenuClick}>
        <IoIosMenu />
      </div>

      {showMenu &&
        routes.map(
          ({ path, title, exact, isSecure, hideWhenAuthorized = false }) =>
            (isSecure && isAuthorized) ||
            (!hideWhenAuthorized && !isSecure) ||
            (hideWhenAuthorized && !isAuthorized && !isSecure) ? (
              <NavLink to={path} exact={exact} key={path}>
                {title}
              </NavLink>
            ) : null,
        )}
    </div>
  );
};

export default Navigation;
