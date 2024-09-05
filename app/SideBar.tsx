import React from 'react';
import Logo from '../public/logo-abletonlink-svgrepo-com.svg'
import Image from 'next/image';

function SideBar() {
  return (
    <>
      <nav className="side-bar bg-red-500 px-10 py-5">
          <Image className='image-logo' src={Logo} alt='' width={100} height={100} />
        <p className='menu text-2xl'>Menu</p>
        <section className="side-elements flex flex-col gap-4 ">
          <p className="element-child">Book a repair</p>
          <p className="element-child">Appointments</p>
          <p className="element-child">My Vehicles</p>
          <p className="element-child">Repair history</p>
          <p className="element-child">Repair stations</p>
          <p className="element-child">Newsletter</p>
          <p className="element-child">Support</p>
          <p className="element-child reward">Reward summary</p>
          <p className="element-child text-red-600">Log out</p>
        </section>
      </nav>
    </>
  );
}

export default SideBar;
