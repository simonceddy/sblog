import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ViewArticle from '../components/pages/ViewArticle';
import LoadingSpinner from '../shared/components/LoadingSpinner';

function Article() {
  const [article, setArticle] = useState(null);

  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await window.axios.get(`/api/article/${slug}`);
      // console.log(result.data);
      setArticle(result.data);
    };
    fetchData();
  }, []);

  if (!article) {
    return (
      <LoadingSpinner>
        Fetching article
      </LoadingSpinner>
    );
  }

  return (
    <ViewArticle article={article} />
  );
}

export default Article;
