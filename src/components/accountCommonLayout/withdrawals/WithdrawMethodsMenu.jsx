"use client";
import React, { useState } from "react";
import { PaymentMethodsData } from "../../../../public/database/PaymentMethodItemsDB";

const WithdrawMethodsMenu = ({
  paymentTypes,
  getAllPaymentMethods,
  setShowPaymentMethods,
}) => {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="border-[2px] border-light-base rounded">
        <div
          onClick={() => {setActive(0),setShowPaymentMethods(0)}}
          className={`${active == 0 ? " bg-light-base text-white" : ""}  ${
            0 == 0 ? "" : "  border-b-2 border-light-base "
          }  text-black-base px-2 flex justify-between  cursor-pointer items-center py-2`}
        >
          <p className="text-[12px] uppercase"> All Payment Methods</p>
          <p> {getAllPaymentMethods} </p>
        </div>
        {paymentTypes?.map((item, index) => (
          <div
            onClick={() => {setActive(index + 1),setShowPaymentMethods(item)}}
            key={index}
            className={`${
              active == index + 1 ? " bg-light-base text-white" : ""
            }  ${
              index + 1 == PaymentMethodsData?.length
                ? ""
                : "  border-b-2 border-light-base "
            }  text-black-base px-2 flex justify-between  cursor-pointer items-center py-2`}
          >
            <p className="text-[12px] uppercase">{item?.name}</p>
            <p> {item?.payment_methods?.length} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WithdrawMethodsMenu;
