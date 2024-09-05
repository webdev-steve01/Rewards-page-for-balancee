import React from 'react';
import Logo from '../public/logo-abletonlink-svgrepo-com.svg'
import Image from 'next/image';

function Nav() {
  return (
    <>
      <nav className="nav flex items-center justify-between bg-white px-5 sticky">
        <section className="logo">
          <Image src={Logo} alt="" width={60} height={20} />
        </section>
        <section className="learn">Learn about the dashboard</section>
        <section className="nav-elements flex gap-2">
          <p>search</p>
          <p>info</p>
          <p>ham</p>
        </section>
      </nav>
      
    </>
  );
}

export default Nav;
