import React from 'react';
import CashOutOptions from './CashOutOptions';
import Button from './Button';

function Promo() {
  return (
    <div className='promo flex flex-col gap-4'>
      <div className='flex flex-col'>
        <CashOutOptions type='text' placeholder='XXX-22AB-E4R7-YYYY' label='promo-code:' id='promo-code' />
        <p className='text-xs info'>Cash in a promo code to get a cheaper deal on your next booking</p>
      </div>
      <Button text='Withdraw' class='blue-button' />
    </div>
  );
}

export default Promo;
