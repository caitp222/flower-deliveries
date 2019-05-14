import React, { Component, Fragment } from "react";
import DeliverablesTable from './deliverablesTable';
import FilterMenu from './filterMenu';

class Deliverables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDeliveries: [],
      filterDate: "",
      filteredDeliveries: [],
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
    this.markDelivered = this.markDelivered.bind(this);
  };

  componentDidMount() {
    const allDeliveries = require('../../TakeHomeSample.json');
    this.setState({ allDeliveries, filteredDeliveries: allDeliveries });
  }

  componentDidUpdate(prevProps, prevState) {
    if ( prevState.filterDate !== this.state.filterDate ) {
      let filteredDeliveries;
      if ( this.state.filterDate === "Filter By Date" || this.state.filterDate.length === 0 ) {
        filteredDeliveries = [...this.state.allDeliveries];
      } else {
        filteredDeliveries = this.state.allDeliveries.filter((del) =>
          del.deliveryDate === this.state.filterDate
        )
      }
      this.setState({ filteredDeliveries });
    }
  }

  changeHandler(e) {
    this.setState({ [e.target.id]: e.target.value })
  }

  clearFilter() {
    this.setState({ filterDate: "" })
  }

  markDelivered(e) {
    const allDeliveries = [...this.state.allDeliveries];
    const delivery = allDeliveries.find((del) => del.id === parseInt(e.target.id) );
    delivery.orderStatus = "Delivered";
    this.setState({ allDeliveries });
  }

  render() {
    const { allDeliveries, filteredDeliveries, filterDate } = this.state;

    let allDates = allDeliveries.map((del) => del.deliveryDate);
    allDates = allDates.filter(unique);

    return(
      <Fragment>
        <h1>💐 🌷 💐 🌷</h1>
        <FilterMenu
          dates={allDates}
          changeHandler={this.changeHandler}
          clearFilter={this.clearFilter}
          filterDate={filterDate}
        />
        <DeliverablesTable
          deliveries={filteredDeliveries}
          markDelivered={this.markDelivered}
        />
      </Fragment>
    )
  }
}

const unique = (value, index, self) => {
  return self.indexOf(value) === index;
}

export default Deliverables;
