import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import PaymentMethodsMenu from "./PaymentMethodsMenu";
import PaymentMethodsItems from "./PaymentMethodsItems";

const PaymentMethod = () => {
  return (
    <div className="bg-light-muted p-2">
      <div className=" bg-white p-2 md:p-4 ">
        <div>
          <div className="text-black-base b px-2">
            <h1 className="text-[16px] md:text-[22px] font-medium ">
              Account 954971091
            </h1>
            <p className="text-[12px]  md:text-[14px] font-normal py-1">
              Select payment method to top up your account:
            </p>
            <div className="flex items-center gap-2 mt-3">
              <input type="checkbox" className="p-2" name="" id="" />
              <p className="text-[12px]  md:text-[14px] font-normal">
                Payment systems in your region
              </p>
            </div>
          </div>
          {/* warning message  */}
          <div className="text-black-base flex items-center gap-4  bg-gray-base px-2 py-4  mt-5 pb-2">
            <div>
              <RiErrorWarningFill className="text-white-base  text-[25px] md:text-[40px]  " />
            </div>
            <p className="text-[12px]  md:text-[14px] font-normal">{`বিকাশ, নগদ, রকেট এবং উপায় এর মাধ্যমে ডিপজিট যদি ২ ঘন্টার মধ্যে আপনার একাউন্ট অ্যাড না হয় তাহলে, ক্যাশ আউট এর স্ক্রিনশট এবং যাবতীয় সকল তথ্য প্রমান সহ উক্ত ই মেইল - (solution@pay-linebet.com) এ যোগাযোগ করুন অথবা লাইভচ্যাট এ নিজের ডিপসিট বা উইথড্র সমস্যার কথা তুলে ধরুন । লেখার ফরমেট - Deposit: (মেথড এর নাম ) , User id: , Transaction id: , Client phone number: , Agent number: , Date: , Time: , Amount:। অথবা ব্যবহার করুন এই টেলিগ্রাম বোটঃ https://t.me/Linebet_Deposit_withdraw_bot ( দ্রুত সমাধান পাওয়ার জন্য একই সমস্যা বার বার পাঠানো থেকে বিরত থাকুন, বারবার পাঠালে আমাদের সমস্যা সমাধান করতে বরং বেশি সময় লাগে।`}</p>
          </div>
        </div>
        {/* payment system  */}
        <div className="flex items-start gap-2 mt-5">
          <div className=" w-[350px]">
            <PaymentMethodsMenu />
          </div>
          <div className=" w-full">
            <PaymentMethodsItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
