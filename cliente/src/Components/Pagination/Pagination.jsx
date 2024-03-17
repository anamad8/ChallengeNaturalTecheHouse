import React from "react";
import style from "../../styles/Pagination.module.css";

const Pagination = ({currentPage, totalPages,nextPage,prevPage, goToPage}) => {

  const handleNextPage = () => {
    nextPage();
  };

  const handlePrevPage = () => {
    prevPage();
  };

  const handleGoToPage = (pageNumber) => {
    goToPage(pageNumber);
  };

  return (
    <div className={style.container_pagination}>
      <div>
        <button className={style.button_page} onClick={() => handleGoToPage(1)}>
          {"|<"}
        </button>
        <button className={style.button_page} onClick={handlePrevPage}>
          {"<"}
        </button>
      </div>
      <h3 className={style.page}>{currentPage}</h3>
      <div>
        <button className={style.button_page} onClick={handleNextPage}>
          {">"}
        </button>
        <button className={style.button_page} onClick={() => handleGoToPage(totalPages)}>
          {">|"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;