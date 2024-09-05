import React from 'react';
interface inputProps {
  placeholder: string;
  label: string;
  id: string;
  type: string;
}
function CashOutOptions(props: inputProps) {
  return (
    <>
      <label htmlFor={props.id}>
        {props.label}
      </label>
      <input className='input rounded-lg px-2 py-2' placeholder={props.placeholder} type={props.type} id={props.id} />
    </>
  );
}

export default CashOutOptions;
