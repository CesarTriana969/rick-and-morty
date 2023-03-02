import React, { useState, useEffect } from 'react';
import ResidentCard from './ResidentCard';
import './styles/residentList.css';

const ResidentList = ({ location, pageSize, onPageChange, onPageSizeChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [residentsPerPage, setResidentsPerPage] = useState(pageSize);

  const totalResidents = location?.residents.length || 0;
  const totalPages = Math.ceil(totalResidents / residentsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  const handlePageSizeChange = (e) => {
    const newPageSize = Number(e.target.value);
    setResidentsPerPage(newPageSize);
    setCurrentPage(1);
    onPageSizeChange(newPageSize);
  };

  const residents = location?.residents.slice(
    (currentPage - 1) * residentsPerPage,
    currentPage * residentsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [pageSize]);

  return (
    <div className="resident-list-container">
      <section className='location-residents'>
        {residents?.map((urlResident) => (
          <ResidentCard key={urlResident} urlResident={urlResident} />
        ))}
      </section>
      <div className='pagination'>
        <span className='pagination__label'>Show</span>
        <select
          className='pagination__select'
          value={residentsPerPage}
          onChange={handlePageSizeChange}
        >
          <option value={20}>20</option>
          <option value={40}>40</option>
          <option value={60}>60</option>
        </select>
        <span className='pagination__label'>residents per page</span>
        <button
          className='pagination__button pagination__button--prev'
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`pagination__button ${currentPage === index + 1 ? 'pagination__button--active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className='pagination__button pagination__button--next'
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ResidentList;