import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import ArticleList from '../components/ArticleList';

function Articles() {
  const [data, setData] = useState(null);

  // const { search, pathname } = useLocation();

  // TODO validate url params

  useEffect(() => {
    const fetchData = async () => {
      const result = await window.axios.get('/api/article');
      // console.log(result.data);
      setData(result.data);
    };
    fetchData();
  }, []);

  if (!data) {
    return (
      <div>
        Loading articles...
      </div>
    );
  }

  /* const {
    data: items,
    from,
    to,
    total,
    current_page: current,
    last_page: lastPage
  } = data; */

  /* const query = new URLSearchParams(search);
  query.delete('page');
  const baseQuery = query.toString(); */

  if (data.length < 1) {
    return (
      <div>
        No articles were found.
      </div>
    );
  }

  return (
    <div>
      Articles
      <ArticleList articles={data} />
    </div>
  );
}

export default Articles;
