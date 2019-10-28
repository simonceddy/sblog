import React from 'react';
import { Link } from 'react-router-dom';

function CategoryBox({ children, slug }) {
  return (
    <Link to={`/category/${slug}`} className="p-1 border m-1 shadow">
      {children}
    </Link>
  );
}

export default CategoryBox;
