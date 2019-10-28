import React from 'react';
import PaginationLink from './PaginationLink';

function Pagination({
  current,
  lastPage,
  baseUrl = '/'
}) {
  const firstPageUrl = `${baseUrl}&page=1`;
  const next = current < lastPage ? current + 1 : null;
  const previous = current > 1 ? current - 1 : null;

  const previousDisabled = previous === null;
  const nextDisabled = next === null;

  return (
    <div className="flex flex-row border border-black p-3 w-full">
      <span className="mr-2">Page {current} of {lastPage}</span>
      <PaginationLink url={firstPageUrl} disabled={previousDisabled}>
        First
      </PaginationLink>
      <PaginationLink url={`${baseUrl}&page=${previous}`} disabled={previousDisabled}>
        Previous
      </PaginationLink>

      <PaginationLink url={`${baseUrl}&page=${next}`} disabled={nextDisabled}>
        Next
      </PaginationLink>
      <PaginationLink url={`${baseUrl}&page=${lastPage}`} disabled={nextDisabled}>
        Last
      </PaginationLink>
      {/* pagination links */}
      {}
    </div>
  );
}

export default Pagination;
