import React, { Fragment } from 'react';

const FilterMenu = (props) => {
  const {
    dates,
    changeHandler,
    clearFilter,
    filterDate
  } = props;

  return(
    <Fragment>
      <div className="input-group">
        <select
          id="filterDate"
          onChange={changeHandler}
          className="custom-select"
          value={filterDate}
        >
          <option defaultValue>Filter By Date</option>
          {
            dates.map((date, idx) =>
              <option key={`${date}_${idx}`}>{date}</option>
            )
          }
        </select>
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={clearFilter}
          >Clear Filter</button>
        </div>
      </div>
    </Fragment>
  )
};

export default FilterMenu;
