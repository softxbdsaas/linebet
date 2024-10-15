"use client";
import React from "react";
import PaymentItemsComponent from "./PaymentItemsComponent";

const PaymentMethodsItems = ({ paymentTypes, showPaymentMethods }) => {
  return (
    <div className=" space-y-3">
      {showPaymentMethods == 0 ? (
        paymentTypes?.map((paymentTypes, index) => (
          <PaymentItemsComponent
            key={index}
            paymentMethod={paymentTypes?.payment_methods}
            title={paymentTypes?.name}
          />
        ))
      ) : (
        <PaymentItemsComponent
          paymentMethod={showPaymentMethods?.payment_methods}
          title={showPaymentMethods?.name}
        />
      )}
    </div>
  );
};

export default PaymentMethodsItems;
