import React, { Component } from "react";

const DeliverablesTable = (props) => {
  const { deliveries } = props;

  const headers = [
    'Delivery Date',
    'Recipient Name',
    'Recipient Address',
    'Status',
  ]

  const tableHeaders = <tr>{
    headers.map((head) =>
      <th key={head}>{head}</th>
    )}</tr>

  const tableRows = deliveries.map((del) => <tr key={del.id}>
      <td>
        { del.deliveryDate }
      </td>
      <td>
        { del.recipient.name }
      </td>
      <td>
        { `${ del.recipient.city }, ${ del.recipient.state }` }
      </td>
      <td>
        { del.orderStatus }
      </td>
    </tr>
  )

  return(
    <table className="table">
      <thead>{ tableHeaders }</thead>
      <tbody>{ tableRows }</tbody>
    </table>
  )
};

export default DeliverablesTable;
