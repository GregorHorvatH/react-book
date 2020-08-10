import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosMenu } from 'react-icons/io';

import routes from '../../routes';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(true);

  const handleMenuClick = () => setShowMenu(!showMenu);

  return (
    <div className="navigation">
      <div className="menu-button" onClick={handleMenuClick}>
        <IoIosMenu />
      </div>

      {showMenu &&
        routes.map(({ path, title, exact }) => (
          <NavLink to={path} exact={exact} key={path}>
            {title}
          </NavLink>
        ))}
    </div>
  );
};

export default Navigation;
