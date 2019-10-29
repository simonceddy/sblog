import React from 'react';

function Content({ children }) {
  return (
    <div className="flex-1 p-3 flex flex-col">
      {children}
    </div>
  );
}

export default Content;
