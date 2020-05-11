import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ArticleList from '../components/ArticleList';
import LoadingSpinner from '../shared/components/LoadingSpinner';
import Pagination from '../components/Pagination/index';

function Articles() {
  const [data, setData] = useState(null);

  const { search, pathname } = useLocation();

  // TODO validate url params

  useEffect(() => {
    const fetchData = async () => {
      const result = await window.axios.get(`/api/article?${search}`);
      // console.log(result.data);
      setData(result.data);
    };
    fetchData();
  }, [search]);

  if (!data) {
    return (
      <LoadingSpinner>
        Fetching articles
      </LoadingSpinner>
    );
  }

  const {
    data: articles,
    /* from,
    to,
    total, */
    current_page: current,
    last_page: lastPage
  } = data;

  /* const query = new URLSearchParams(search);
  query.delete('page');
  const baseQuery = query.toString(); */

  if (articles.length < 1) {
    return (
      <div>
        No articles were found.
      </div>
    );
  }

  return (
    <>
      <Pagination
        current={current}
        lastPage={lastPage}
        baseUrl={pathname}
      />
      <ArticleList articles={articles} />
      <Pagination
        current={current}
        lastPage={lastPage}
        baseUrl={pathname}
      />
    </>
  );
}

export default Articles;
