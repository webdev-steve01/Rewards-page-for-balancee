import React from "react";
import Data from "./records.json";

function TransactionHistory() {
  // const listChild = Data.map((i) => {
  //   <li key={i.id}>{i.booking_id}</li>;
  // });
  let newData = Data.map((i) => (
    <li className="list-child flex justify-between rounded-md text-sm bg-white px-2 py-2" key={i.id}>
      <section className="left">
        <div className="name">
          {i.name}
        </div>
        <div className="bottom flex text-xs gap-1">
          <p>
            {i.booking_id} 
          </p>
          <p>
            {i.transaction_date}
          </p>
        </div>
      </section>
      <section className="list-right">
        <p className="">${i.cashback_earned}</p>
      </section>
    </li>
  ));
  // console.log(newData);

  return (
    <>
      <ul className="transaction-history flex flex-col gap-2 px-2 py-2">{newData}</ul>
    </>
  );
}

export default TransactionHistory;
