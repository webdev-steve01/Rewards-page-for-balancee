import React from 'react';
import Image from 'next/image';

interface props{
  src: string;
  width: number;
  height: number;
}

function Icons(props: props) {
  return (

      <div className="icon-img flex justify-center">
        <Image src={props.src} alt="" width={props.width} height={props.height} />
      </div>
  );
}

export default Icons;
