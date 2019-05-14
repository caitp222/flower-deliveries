import React, { Fragment } from 'react';

const FilterMenu = (props) => {
  const { dates, changeHandler } = props;

  return(
    <Fragment>
      <select className="custom-select" id="filterDate" onChange={changeHandler}>
        <option defaultValue>Filter By Date</option>
        { dates.map((date, idx) => <option key={`${date}_${idx}`}>{date}</option>) }
      </select>
    </Fragment>
  )
};

export default FilterMenu;
