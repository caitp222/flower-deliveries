import React, { Component, Fragment } from "react";
import DeliverablesTable from './deliverablesTable';
// import FilterMenu from './filterMenu';

class Deliverables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDeliveries: [],
    }
  };

  componentDidMount() {
    const allDeliveries = require('../../TakeHomeSample.json');
    this.setState({ allDeliveries });
  }

  render() {
    const { deliveries } = this.state;

    return(
      <Fragment>
        // <FilterMenu />
        <DeliverablesTable deliveries={deliveries} />
      </Fragment>
    )
  }
}

export default Deliverables;
