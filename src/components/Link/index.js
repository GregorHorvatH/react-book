import React from 'react';

const Link = ({ link, text }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    {text}
  </a>
);

export default Link;
