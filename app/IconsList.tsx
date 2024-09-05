"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import withdraw from "../public/withdraw-1-svgrepo-com.svg";
import deposit from "../public/free-deposit-svgrepo-com.svg";
import history from "../public/history-list-svgrepo-com.svg";
import settings from "../public/settings-minimalistic-svgrepo-com.svg";
import Icons from "./Icons";
import { usePathname } from "next/navigation";
import path from "path";

const links = [
  { name: "History", href: "/History", icon: history },
  { name: "Withdraw", href: "/Withdraw", icon: withdraw },
  { name: "bookings", href: "/Bookings", icon: deposit },
  { name: "settings", href: "/Settings", icon: settings },
];
function IconsList() {
  const square = 25;
  const pathName = usePathname();
  console.log(pathName);
  const linkHolder = links.map((links) => {
    const isActive = pathName.startsWith(links.href)
    return (
      <Link href={links.href} key={links.name} className={isActive ? "active bg-gray-200 rounded-lg" : "inactive bg-white"}>
        <section className="icon-child flex flex-col align-middle">
          <Icons src={links.icon} width={square} height={square} />
          <p className="icon-text">{links.name}</p>
        </section>
      </Link>
    );
  });

  return (
    <>
      <section className="icons px-2 bg-white rounded-lg text-xs flex w-full justify-between py-2">
        {linkHolder}
      </section>
    </>
  );
}

export default IconsList;
