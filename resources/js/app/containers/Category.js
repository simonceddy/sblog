import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CategoryArticles from '../components/pages/CategoryArticles';

function Category() {
  const [category, setCategory] = useState(null);

  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await window.axios.get(`/api/category/${slug}`);
      // console.log(result.data);
      setCategory(result.data);
    };
    fetchData();
  }, []);

  if (!category) return <div>Loading...</div>;

  // console.log(category);

  return (
    <CategoryArticles articles={category.articles} />
  );
}

export default Category;
