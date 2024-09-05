import React from 'react';
interface buttonProps{
  text: string;
  class: string;
}

function Button(props: buttonProps) {
  return (
    <button type='button' className={props.class}>
      {props.text}
    </button>
  );
}

export default Button;
