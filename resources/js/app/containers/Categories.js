import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CategoryList from '../components/CategoryList';
import LoadingSpinner from '../shared/components/LoadingSpinner';
import Pagination from '../components/Pagination/index';

function Categories() {
  const [data, setData] = useState(null);

  const { search, pathname } = useLocation();

  // TODO validate url params

  useEffect(() => {
    const fetchData = async () => {
      const result = await window.axios.get(`/api/category?${search}`);
      // console.log(result.data);
      setData(result.data);
    };
    fetchData();
  }, [search]);

  if (!data) {
    return (
      <LoadingSpinner>
        Fetching categories
      </LoadingSpinner>
    );
  }

  const {
    data: categories,
    /* from,
    to,
    total, */
    current_page: current,
    last_page: lastPage
  } = data;

  /* const query = new URLSearchParams(search);
  query.delete('page');
  const baseQuery = query.toString(); */

  if (categories.length < 1) {
    return (
      <div>
        No results were found.
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
      <CategoryList categories={categories} />
    </>
  );
}

export default Categories;
