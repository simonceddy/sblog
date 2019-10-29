import React from 'react';
import Spinner from 'react-spinkit';

function LoadingSpinner({ children }) {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <Spinner name="line-scale-pulse-out" fadeIn="none" color="#2b6cb0" />
      <div className="capitalize text-xl">
        {children}
      </div>
    </div>
  );
}

export default LoadingSpinner;
