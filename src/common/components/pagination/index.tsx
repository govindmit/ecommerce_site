import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = (props: any) => {
  const {
    AllData,
    pageCount,
    endIndex,
    startIndex,
    handlePageChange,
    forcePage,
  } = props;

  return (
    <div className="">
      <div className="flex flex-wrap justify-end mr-4">
        <div className="m-2">
          <p className="text-xs text-gray-700">
            Showing
            <span className="font-medium"> {startIndex} </span>
            to
            <span className="font-medium"> {endIndex} </span>
            of
            <span className="font-medium"> {AllData?.length} </span>
            results
          </p>
        </div>
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          onPageChange={handlePageChange}
          forcePage={forcePage}
          activeClassName="active"
          breakClassName={"break-me"}
          containerClassName="pagination"
          previousLabel="< "
          nextLabel=" >"
          breakLabel="..."
          renderOnZeroPageCount={null}
          disabledClassName={"paginationDisableButton"}
        />
      </div>
    </div>
  );
};

export default Pagination;
