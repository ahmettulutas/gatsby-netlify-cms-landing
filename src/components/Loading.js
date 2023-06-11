import React from 'react';

export const Loading = ({ type = 'green' }) => (
  <div className={`loader-container ${type}`}>
    <span className="dot"></span>
    <span className="dot"></span>
    <span className="dot"></span>
    <span className="dot"></span>
  </div>
);
