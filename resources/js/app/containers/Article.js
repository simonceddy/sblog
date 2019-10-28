import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ViewArticle from '../components/pages/ViewArticle';

function Article() {
  const [article, setArticle] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await window.axios.get(`/api/article/${id}`);
      console.log(result.data);
      setArticle(result.data);
    };
    fetchData();
  }, []);

  if (!article) return <div>Loading...</div>;

  return (
    <ViewArticle article={article} />
  );
}

export default Article;
