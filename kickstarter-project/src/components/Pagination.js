import React from 'react';

const Pagination = ({ recordsPerPage, totalRecords, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalRecords / recordsPerPage);
  const pageNumbers = [];

  // Always show the first page
  pageNumbers.push(1);

  const startPage = Math.max(2, currentPage - 2);
  const endPage = Math.min(totalPages - 1, currentPage + 2);

  if (startPage > 2) {
    pageNumbers.push('...');
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  if (endPage < totalPages - 1) {
    pageNumbers.push('...');
  }

  // Always show the last page
  if (totalPages > 1) {
    pageNumbers.push(totalPages);
  }

  return (
    <nav>
      <ul className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {pageNumbers.map((number, index) =>
          number === '...' ? (
            <li key={index} className="page-item">
              <span className="ellipsis">...</span>
            </li>
          ) : (
            <li key={index} className="page-item">
              <button
                onClick={() => paginate(number)}
                className={currentPage === number ? 'active' : ''}
              >
                {number}
              </button>
            </li>
          )
        )}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </ul>
    </nav>
  );
};

export default Pagination;