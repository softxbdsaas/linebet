"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SelectCurrencyAndSearch from "../ui/inputs/SelectCurrencyAndSearch";
import VerifyPhoneNumber from "./VerifyPhoneNumber";
import Swal from "sweetalert2";
import { userInfo } from "@/redux/features/authSlice";
import { useDispatch } from "react-redux";
import { registerToggle } from "@/redux/features/registerSlice";
import Cookies from "js-cookie";
import { authKey, cookiesExpires } from "@/constants/authKey";
const PhoneNumberForm = () => {
  const [selectCurrency, setSelectCurrency] = useState();
  const [verifyPhoneNumberStatus, setVerifyPhoneNumberStatus] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(verifyPhoneNumberStatus)
    try {
      const newData = {
        currency: selectCurrency?.currency,
        phone_number: verifyPhoneNumberStatus?.mobile,
      };
      console.log(newData)
      setLoading(true);
      // Make the POST request to your API
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newData),
        }
      );

      const result = await response.json();

      // Handle success or error based on response
      if (response.ok) {
        setLoading(false);
        Cookies.set(authKey, result?.data?.token?.access_token, {
          expires: cookiesExpires, // Set the cookie to expire in 10 days
          secure: process.env.NODE_ENV === "production", // Secure flag for production
          path: "/",
        });
  
        dispatch(userInfo(result?.data?.user)); // Call your submit function
        Swal.fire({
          title: "Success",
          text: "Registration successful!",
          icon: "success",
          confirmButtonText: "OK",
        });
        dispatch(registerToggle());
        window.location.replace("/");
      } else {
        setLoading(false);
        Swal.fire({
          title: "Error",
          text: result.message || "Something went wrong!",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        title: "Error",
        text: "There was an issue with the request.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };


  return (
    <div className="pt-6 pb-4">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid sm:grid-cols-2 gap-4 items-start py-3 mt-3">
          <div>
            <VerifyPhoneNumber
              setVerifyPhoneNumberStatus={setVerifyPhoneNumberStatus}
            />
          </div>
          <div className=" space-y-7">
            <div>
              <SelectCurrencyAndSearch
                selectCurrency={selectCurrency}
                setSelectCurrency={setSelectCurrency}
              />
            </div>
            <div className="relative w-full text-black-base max-w-full">
              <input
                {...register("prome_code")}
                type="text"
                className="global-input"
                placeholder
              />
              <label
                className="global-label"
              >
                Prome code (if you have one)
              </label>
            </div>
          </div>
        </div>
        {/* submit button  */}
        <div className="w-full mt-4">
          <button
            disabled={!verifyPhoneNumberStatus || loading}
            type="submit"
            className="bg-button-base w-full hover:bg-active-base duration-300 text-white uppercase font-sans text-[14px] md:text-[16px] font-medium py-2 md:py-3 px-4 rounded"
          >
            {loading ? "Loading..." : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PhoneNumberForm;
