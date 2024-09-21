"use client";
import React, { useState } from "react";
import { PaymentMethodsData } from "../../../../../public/database/PaymentMethodItemsDB";
const PaymentMethodsMenu = () => {
  const [active, setActive] = useState(1);
  return (
    <div>
      <div className="border-[2px] border-light-base rounded">
        {PaymentMethodsData?.map((item, index) => (
          <div
            onClick={() => setActive(index + 1)}
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
            <p> {item?.quantity} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethodsMenu;
