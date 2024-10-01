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
import { authKey } from "@/constants/authKey";
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
    try {
      const newData = {
        currency: selectCurrency?.currency,
        phoneNumber: verifyPhoneNumberStatus?.phoneNumber,
      };
      setLoading(true);

      // Make the POST request to your API
      const response = await fetch("https://express-auth-wheat.vercel.app/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      const result = await response.json();

      // Handle success or error based on response
      if (response.ok) {
        setLoading(false);
        Cookies.set(authKey, result?.token, {
          expires: process.env.JWT_EXPIRES,
          path: "/",
        });
        dispatch(userInfo(result?.user)); // Call your submit function
        Swal.fire({
          title: "Success",
          text: "Registration successful!",
          icon: "success",
          confirmButtonText: "OK",
        });
        dispatch(registerToggle());
        window.location.replace("/office/account");
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
                className="w-full h-full pl-[14px] rounded overflow-hidden text-black-base pr-[30px] pt-[8px] pb-[18px] font-sans text-[14px] font-normal transition-all bg-transparent border  peer   text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] focus:border-[2px] focus:border-[#61d17d] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder
              />
              <label
                className="before:content[' '] after:content[' '] !rounded overflow-hidden  text-black-base pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[14px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-2  before:box-border before:block before:h-1.5 before:w-2.5   before:transition-all 
                   after:mt-[6.5px] after:ml-2 after:box-border after:block after:h-1 after:w-2.5 after:flex-grow  after:border-t after:border-r  z-40 after:transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:leading-[4.7] peer-placeholder-shown:text-[#000000] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent  
                  peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-black-base  peer-focus:before:border-t-[2px] peer-focus:before:border-l-[2px] peer-focus:before:!border-[#61d17d] peer-focus:after:border-t-[2px] peer-focus:after:border-r-[2px] peer-focus:after:!border-[#61d17d] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#61d17d]"
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
