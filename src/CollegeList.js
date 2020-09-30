import React, { createElement, useState, useRef, useCallback } from 'react';
import './CollegeList.css';
import { CollegeCard, CollegeCardLoading } from './components';
import useCollegeListPagination from './hooks/useCollegeListPagination';

function CollegeList() {
  const [pageNumber, setPageNumber] = useState(1);

  const { colleges, loading, hasNext, length } = useCollegeListPagination(
    pageNumber
  );

  const observer = useRef();

  // Render Last Card
  const lastCollegeCardRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNext) {
          setPageNumber((lastPageNumber) => lastPageNumber + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasNext]
  );

  return (
    <div className="college-list">
      <div className="college-list__title">Colleges in North India</div>
      <div className="college-list__items">
        {/* Map details from API into each card */}
        {colleges.map((college, index) =>
          createElement(CollegeCard, {
            ref: (ref) => index === length - 1 && lastCollegeCardRef(ref),
            detail: college,
            key: index,
          })
        )}
        {/* Loading 4 college cards */}
        {loading && [...Array(4)].map((e, i) => <CollegeCardLoading key={i} />)}
      </div>
    </div>
  );
}

export default CollegeList;
