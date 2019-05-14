import React, { Component } from "react";

const DeliverablesTable = (props) => {
  const { deliveries, markDelivered } = props;

  const headers = [
    'Delivery Date',
    'Recipient Name',
    'Recipient Address',
    'Status',
    'Actions',
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
      <td className={`${del.orderStatus === "Accepted" ? "accepted" : "delivered"}`}>
        { del.orderStatus }
      </td>
      <td>
        { del.orderStatus === "Accepted" ?
            <button
              id={del.id}
              onClick={markDelivered}
              className="btn btn-outline-secondary btn-sm"
            >Mark Delivered</button> :
            ""
        }
      </td>
    </tr>
  )

  return(
    <table className="table table-bordered">
      <thead>{ tableHeaders }</thead>
      <tbody>{ tableRows }</tbody>
    </table>
  )
};

export default DeliverablesTable;
