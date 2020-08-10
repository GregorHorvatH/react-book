import React from 'react';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { IconContext } from 'react-icons';

const Alert = ({ children }) => (
  <IconContext.Provider value={{ size: '2em' }}>
    <div className="alert alert-primary">
      <div className="icon">
        <IoIosInformationCircleOutline />
      </div>
      <div className="text">{children}</div>
    </div>
  </IconContext.Provider>
);

export default Alert;
