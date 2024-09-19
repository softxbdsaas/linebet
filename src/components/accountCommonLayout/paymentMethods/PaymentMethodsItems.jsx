import React from "react";
import PaymentItemsComponent from "./PaymentItemsComponent";

const PaymentMethodsItems = () => {
  return (
    <div  className=" space-y-3">
      <PaymentItemsComponent title={"recommended methods"} />
      <PaymentItemsComponent title={"All methods"} />
      <PaymentItemsComponent title={"e-wallets"} />
      <PaymentItemsComponent title={"payment systems"} />
      <PaymentItemsComponent title={"bank transfer"} />
    </div>
  );
};

export default PaymentMethodsItems;
