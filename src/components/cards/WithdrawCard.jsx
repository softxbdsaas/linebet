"use client";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "../Modal/Modal";
import MakeWithdrawals from "../accountCommonLayout/withdrawals/MakeWithdrawals";

const WithdrawCard = ({ item }) => {
  const [activeModal, setActiveModal] = useState({});
  return (
    <>
      <div
        onClick={() => setActiveModal(item)}
        className="w-[120px] cursor-pointer"
      >
        <div className=" bg-white h-[80px] w-[120px]">
          <Image
            className="w-full h-[80px]  object-contain "
            width={120}
            height={120}
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/public/images/${item?.photo}`}
            alt="image"
          ></Image>
        </div>
        <div className=" caption-bottom bg-light-base text-white text-[12px] py-[10px] font-medium text-center ">
          <p>{item?.name}</p>
          <p>{item?.agent?.user_name}</p>
        </div>
      </div>
      {activeModal?.id && (
        <Modal>
          <MakeWithdrawals
            activeModal={activeModal}
            setActiveModal={setActiveModal}
          />
        </Modal>
      )}
    </>
  );
};

export default WithdrawCard;
