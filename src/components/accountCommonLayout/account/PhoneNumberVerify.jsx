"use client";
import {
  useEmailOtpVerifyMutation,
  usePhoneNumberVerifyMutation,
  useVerifyEmailMutation,
} from "@/redux/api/authApi";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import Swal from "sweetalert2";
import { AllCountryNumberCodeData } from "../../../../public/database/countryNumber";
import Image from "next/image";
import { IoIosArrowUp } from "react-icons/io";

const PhoneNumberVerify = ({ activeModal, setActiveModal }) => {
  const [activeCountry, setActiveCountry] = useState(false);
  const [selectCountry, setSelectCountry] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues, // Use getValues to access form values
  } = useForm({
    mode: "onBlur", // Validate on blur for better user experience
  });
  const [activeVerifyCode, setActiveVerifyCode] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const AllCountry = AllCountryNumberCodeData;
  const [phoneNumberVerify, { isLoading: optIsLoading }] =
    usePhoneNumberVerifyMutation();
  const handlePhoneInput = (e) => {
    // Allow only numbers by using regex to filter out non-numeric characters
    const inputValue = e.target.value.replace(/\D/g, "");
    setPhoneNumber(inputValue);
  };

  const handleSendSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify-token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone_number: phoneNumber }),
        }
      );
      const result = await response.json();
      if (result.status) {
        Swal.fire({
          title: "Success",
          text: "Otp send success, please check your mobile!",
          icon: "success",
          confirmButtonText: "OK",
        });
        setIsLoading(false);
        setActiveVerifyCode(!activeVerifyCode);
      } else {
        setIsLoading(false);
        Swal.fire({
          title: "Error",
          text: result.data || "Something went wrong!",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      setIsLoading(false);
      Swal.fire({
        title: "Error",
        text: "There was an issue with the request.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const onSubmitOtp = async (data) => {
    const newData = {
      phone_number: phoneNumber,
      otp: parseInt(data.otp),
    };
    try {
      const result = await phoneNumberVerify(newData).unwrap();
      if (result.status) {
        Swal.fire({
          title: "Success",
          text: "Your Mobile verification success!",
          icon: "success",
          confirmButtonText: "OK",
        });
        setActiveModal(!activeModal);
      } else {
        Swal.fire({
          title: "Error",
          text: result.message || "Something went wrong!",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "There was an issue with the request.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  useEffect(() => {
    if (AllCountry?.length && !selectCountry) {
      const activeCountry = AllCountry?.[12];
      setSelectCountry(activeCountry);
    }
  }, [AllCountry, selectCountry, setSelectCountry]);

  return (
    <div>
      <div className="fixed left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-[500]">
        <div className="flex justify-center items-center">
          <div className="rounded relative">
            <div className="flex md:w-[340px] py-4 justify-center items-center p-4 bg-white w-full rounded">
              <div
                onClick={() => setActiveModal(!activeModal)}
                className="text-black-base hover:text-red-400 absolute cursor-pointer duration-300 right-2 top-2"
              >
                <IoClose className="text-[20px]" />
              </div>
              {!activeVerifyCode ? (
                <div className="w-full max-full rounded pt-7">
                  <div>
                    <div className="space-y-5">
                      <p className=" text-base text-black-base md:text-lg lg:text-xl">
                        Link your Phone Number to your account
                      </p>
                      <div>
                        <div
                          className={` ${
                            activeCountry
                              ? "border-2  border-active-base "
                              : "border border-black-base"
                          }   flex justify-between  rounded`}
                        >
                          {/* active   search country input filed   */}
                          <div className=" flex items-center  justify-between gap-2 w-full">
                            <div className=" flex items-center">
                              <div
                                onClick={() => setActiveCountry(!activeCountry)}
                                className="flex text-black-base items-center gap-1 py-2 px-3"
                              >
                                <div className=" flex items-center ">
                                  <div className="w-5 h-5">
                                    <Image
                                      width={20}
                                      height={20}
                                      className="object-cover h-[20px] w-[20px] rounded-full"
                                      src={selectCountry?.flag}
                                      alt="image"
                                    />
                                  </div>
                                  <div className=" text-black-base px-1">
                                    <IoIosArrowUp
                                      className={`${
                                        activeCountry ? "" : "rotate-180"
                                      }  text-[16px]  text-colo duration-500`}
                                    />
                                  </div>
                                </div>
                                <p className=" capitalize text-[14px] font-normal">
                                  {selectCountry?.phone_code}
                                </p>
                              </div>
                              <div className="max-w-[80px]">
                                <input
                                  value={phoneNumber}
                                  onInput={handlePhoneInput}
                                  type="tel"
                                  placeholder="215478"
                                  className=" tracking-wider outline-0 text-black-muted border-0"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* active country menu  */}
                        {activeCountry ? (
                          <div className="max-h-[300px] z-50 absolute w-full top-12 overflow-x-auto bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded selectBarScroll py-3">
                            <ul>
                              {AllCountryNumberCodeData?.map((item, index) => (
                                <li
                                  key={index}
                                  onClick={() => (
                                    setSelectCountry(item),
                                    setActiveCountry(!activeCountry)
                                  )}
                                  className={`  border-b border-[#d8e8d4] hover:bg-light-muted cursor-pointer duration-300`}
                                >
                                  <div className="flex text-black-base items-center gap-2 py-2 px-3">
                                    <div className="w-5 h-5">
                                      <Image
                                        width={20}
                                        height={20}
                                        className="object-cover h-[20px] w-[20px] rounded-full"
                                        src={item?.flag}
                                        alt="image"
                                      />
                                    </div>
                                    <p className=" capitalize text-[14px] font-normal">
                                      {item?.country}
                                    </p>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : null}

                        <div className=" mt-3 ">
                          <button
                            disabled={isLoading}
                            type="button"
                            onClick={handleSendSubmit}
                            className="text-white font-bold text-[14px] w-full  py-2 px-4  duration-300 bg-button-base hover:bg-light-base"
                          >
                            {isLoading ? "loading.." : "submit"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full max-full rounded pt-7">
                  <form onSubmit={handleSubmit(onSubmitOtp)}>
                    <div className="space-y-5">
                      <p className=" text-base text-black-base md:text-lg lg:text-xl">
                        Mobile Verification
                      </p>
                      <div className="relative w-full text-black-base max-w-full">
                        <input
                          {...register("otp", {
                            required: " Otp is required.",
                          })}
                          type={"number"}
                          className="peer global-input"
                          placeholder="Code:"
                        />
                        <label className="global-label">Otp code </label>
                        {errors.otp && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.otp.message}
                          </p>
                        )}
                      </div>
                      <button
                        disabled={optIsLoading}
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-primary-base rounded hover:bg-light-base focus:outline-none focus:bg-green-600"
                      >
                        {optIsLoading ? "Loading..." : "Submit"}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneNumberVerify;
