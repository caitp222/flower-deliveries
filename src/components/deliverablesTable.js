import React, { Fragment } from "react";

const DeliverablesTable = (props) => {
  const { deliveries, markDelivered } = props;

  const deliveryCards = deliveries.map((del) => (
    <div key={del.id} className="card" style={{width: '18rem'}}>
      <div className="card-body">
        <h5 className="card-title">{del.recipient.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Delivery Date: { del.deliveryDate }</h6>
        <p>{ `${del.recipient.addressLineOne}, ${ del.recipient.city }, ${ del.recipient.state } ${ del.recipient.zipCode }` }</p>
        <p
          className={`${del.orderStatus === "Accepted" ? "accepted" : "delivered"}`}
        >{ del.orderStatus === "Accepted" ? "Pending" : del.orderStatus }</p>
        {
          del.orderStatus === "Accepted" ?
            <button
              id={del.id}
              onClick={markDelivered}
              className="btn btn-outline-secondary btn-sm"
            >Mark Delivered</button> :
            ""
        }
      </div>
    </div>
  ))

  return(
    <Fragment>
      <div className="row">
        {deliveryCards}
      </div>
    </Fragment>
  )
};

export default DeliverablesTable;
