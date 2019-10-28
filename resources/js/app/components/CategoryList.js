import React from 'react';

function CategoryList({ categories = [] }) {
  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          {category.name}
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
