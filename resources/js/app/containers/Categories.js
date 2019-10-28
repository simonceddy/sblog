import React, { useState, useEffect } from 'react';
import CategoryList from '../components/CategoryList';
// import { useLocation } from 'react-router-dom';

function Categories() {
  const [data, setData] = useState(null);

  // const { search, pathname } = useLocation();

  // TODO validate url params

  useEffect(() => {
    const fetchData = async () => {
      const result = await window.axios.get('/api/category');
      // console.log(result.data);
      setData(result.data);
    };
    fetchData();
  }, []);

  if (!data) {
    return (
      <div>
        Loading Results...
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
        No results were found.
      </div>
    );
  }

  return (
    <div>
      Categoies
      <CategoryList categories={data} />
    </div>
  );
}

export default Categories;
