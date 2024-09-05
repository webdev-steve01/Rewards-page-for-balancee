import React from 'react';
import CashOutOptions from './CashOutOptions';
import Button from './Button';
import Promo from './Promo';



function DirectCashout() {
  return (
    <>
      <section className="direct-cashout px-4 ">
        {/* <p className="italic text-sm soft-text new-soft-text">
          pay by bank withdrawal:
        </p> */}
        <form
          action=""
          className="border border-transparent border-solid flex flex-col bg-white px-2 py-4 rounded-xl gap-4"
        >
          <CashOutOptions
            label="Bank name: "
            id="bankName"
            placeholder="First Bank"
            type="string"
          />
          <CashOutOptions
            label="Amount: "
            id="amount"
            placeholder="$###"
            type="string"
          />
          <CashOutOptions
            label="description: "
            id="desc"
            placeholder="Optional"
            type="textarea"
          />
          <CashOutOptions
            label="Pin: "
            id="pin"
            placeholder="****"
            type="password"
          />
          <section className="button flex justify-center">
            <Button text="Withdraw" class="blue-button" />
          </section>
        </form>
      </section>
      <div className='px-4 my-4'>
        <section className="direct-cashout promo-code border border-transparent border-solid flex flex-col bg-white px-2 py-4 rounded-xl gap-4">
          <Promo />
        </section>
      </div>
    </>
  );
}

export default DirectCashout;
