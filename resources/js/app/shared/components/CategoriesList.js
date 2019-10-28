import React from 'react';

function CategoriesList({ children }) {
  return (
    <div className="flex flex-row flex-wrap text-sm mb-2 items-center">
      <div className="text-base">Categories:</div>
      {children}
    </div>
  );
}

export default CategoriesList;
