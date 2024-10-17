"use client";
import React from "react";
import WithdrawItemsComponent from "./WithdrawItemsComponent";
const WithdrawMethodsItems = ({ paymentTypes, showPaymentMethods }) => {
  return (
    <div className=" space-y-3">
      {showPaymentMethods == 0 ? (
        paymentTypes?.map((paymentTypes, index) => (
          <WithdrawItemsComponent
            key={index}
            paymentMethod={paymentTypes?.payment_methods}
            title={paymentTypes?.name}
          />
        ))
      ) : (
        <WithdrawItemsComponent
          paymentMethod={showPaymentMethods?.payment_methods}
          title={showPaymentMethods?.name}
        />
      )}
    </div>
  );
};

export default WithdrawMethodsItems;
