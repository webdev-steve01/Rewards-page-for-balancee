"use client";
import React, { useEffect, useState } from "react";
import withdraw from "../public/withdraw-1-svgrepo-com.svg";
import deposit from "../public/free-deposit-svgrepo-com.svg";
import Data from "./records.json";
import eyeOpen from "../public/eye-svgrepo-com.svg";
import history from "../public/history-list-svgrepo-com.svg";
import settings from "../public/settings-minimalistic-svgrepo-com.svg";
import wallet from "../public/wallet-money-svgrepo-com.svg";
import Image from "next/image";
import Link from "next/link";
import Icons from "./Icons";
import close from '../public/eye-off-svgrepo-com.svg'
import IconsList from "./IconsList";

function DisplayCard() {
  const [amount, setAmount] = useState("");
  const [openEye, setOpenEye] = useState(true);
  const [cashback, setCashback] = useState("");
  useEffect(() => {
    const previousAmount = 1110;
    let Total = 0;
    let test = Data.map((i) => i.cashback_earned);
    console.log(test);

    for (let i = 0; i <= test.length - 1; i++) {
      Total = Total + test[i];
    }
    console.log(Total);
    setAmount(`${Total + previousAmount}`);
    setCashback(`${Total}`);
  }, []);
  function handleClick() {
    if (openEye) {
      setOpenEye(false);
      setAmount("****");
      setCashback("****");
    } else {
      let test = Data.map((i) => i.cashback_earned);
      console.log(test);
      let Total: number = 0;
      let oldAmount: number = 1110;
      for (let i = 0; i <= test.length - 1; i++) {
        Total = Total + test[i];
      }
      setOpenEye(true);
      setAmount(`${Total + oldAmount}`);
      setCashback(`${Total}`);
    }
  }




  return (
    <section className="card grid gap-2 px-4 py-2">
      <section className="details border border-solid rounded-xl">
        <section className="card-text flex justify-between px-3 py-4">
          <section className="italic flex gap-2 align-middle">
            <Icons src={wallet} width={30} height={30} />
            <p className="flex align-middle">
              <strong>Wallet</strong>
            </p>
          </section>
          <Image
            className="image"
            src={openEye? eyeOpen: close}
            alt=""
            width={20}
            height={20}
            onClick={handleClick}
            id="eye"
          />
        </section>
        <section className="balance px-3 py-3 ">
          <div className="big-amount skeleton-price">
            <p className="cover">${cashback}</p>
          </div>
          <section className="cashback soft-text">
            <p className="small-text">
              <strong>Total cashback earned:</strong>
            </p>
            <p>${amount}</p>
          </section>
        </section>
      </section>
      <IconsList />
    </section>
  );
}

export default DisplayCard;
