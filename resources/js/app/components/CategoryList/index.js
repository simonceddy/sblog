import React from 'react';
import { Link } from 'react-router-dom';

function CategoryList({ categories = [] }) {
  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <Link to={`/category/${category.slug}`}>
            {category.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
