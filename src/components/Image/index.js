import React from 'react';

const Image = ({ filename }) => (
  <img
    src={process.env.PUBLIC_URL + '/images/' + filename}
    className="img-fluid mx-auto d-block"
    alt="screenshot"
    loading="lazy"
  />
);

export default Image;
