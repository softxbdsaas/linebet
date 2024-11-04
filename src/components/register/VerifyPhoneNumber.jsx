"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AllCountryNumberCodeData } from "../../../public/database/countryNumber";
import { IoIosArrowUp } from "react-icons/io";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
const VerifyPhoneNumber = ({ setVerifyPhoneNumberStatus }) => {
  const [activeCountry, setActiveCountry] = useState(false);
  const [selectCountry, setSelectCountry] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [otp, setOtp] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const AllCountry = AllCountryNumberCodeData;
  const timerRef = useRef(null);
  const [countdown, setCountdown] = useState(0); // Initial countdown value
  useEffect(() => {
    if (AllCountry?.length && !selectCountry) {
      const activeCountry = AllCountry?.[12];
      setSelectCountry(activeCountry);
    }
  }, [AllCountry, selectCountry, setSelectCountry]);

  const startCountdown = () => {
    setCountdown(119); // Reset countdown
    if (timerRef.current) {
      clearInterval(timerRef.current); // Clear any existing timer
    }
    timerRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 0) {
          return 0; // Ensure it doesn't go negative
        }
        return prev - 1;
      });
    }, 1000); // Update countdown every second
  };

  const handleSendSubmit = async () => {
    try {
      if (!phoneNumber) {
        Swal.fire({
          title: "error",
          text: ` Phone number  is required`,
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }
      if (phoneNumber.length < 10) {
        Swal.fire({
          title: "error",
          text: ` Phone number should be at least 10 digits.`,
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }
      setIsLoading(true);
      // Make the POST request to your API
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
      console.log(result);
      setVerifyPhoneNumberStatus(result?.data);
      if (response.ok) {
        setIsLoading(false);
        startCountdown();
        Swal.fire({
          title: "Success",
          text: `${result?.message}`,
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        setIsLoading(false);

        Swal.fire({
          title: "Error",
          text: `${result?.message}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      }

      // Send OTP code to the selected country's phone number
    } catch (error) {
      setIsLoading(false);
      Swal.fire({
        title: "Error",
        text: `${error?.message}`,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handlePhoneInput = (e) => {
    // Allow only numbers by using regex to filter out non-numeric characters
    const inputValue = e.target.value.replace(/\D/g, "");
    setPhoneNumber(inputValue);
  };

  const handleOtpInput = (e) => {
    // Allow only numbers by using regex to filter out non-numeric characters
    const inputValue = e.target.value.replace(/\D/g, "");
    setOtp(inputValue);
  };

  const handleVerifyCode = async () => {
    // Verify the OTP code sent to the selected country's phone number
    try {
      try {
        if (!otp) {
          Swal.fire({
            title: "error",
            text: ` Otp code is required`,
            icon: "error",
            confirmButtonText: "OK",
          });
          return;
        }

        Swal.fire({
          title: "Success",
          text: ` Verify  success`,
          icon: "success",
          confirmButtonText: "OK",
        });
        return;
        setIsLoading(true);
        // Make the POST request to your API
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify-token/4`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ phone_number: phoneNumber, otp }),
          }
        );
        const result = await response.json();

        if (response.ok) {
          setIsLoading(false);
          setVerifyPhoneNumberStatus(result?.data?.verifyInfo);
          Swal.fire({
            title: "Success",
            text: `${result?.message}`,
            icon: "success",
            confirmButtonText: "OK",
          });
        } else {
          setIsLoading(false);

          Swal.fire({
            title: "Error",
            text: `${result?.message}`,
            icon: "error",
            confirmButtonText: "OK",
          });
        }

        // Send OTP code to the selected country's phone number
      } catch (error) {
        setIsLoading(false);
        Swal.fire({
          title: "Error",
          text: `${error?.message}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {}
  };
  return (
    <div>
      <div className="w-full relative space-y-8">
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
              <div className="">
                <button
                  type="button"
                  disabled={countdown > 1 || isLoading}
                  onClick={handleSendSubmit}
                  className="text-white font-bold text-[14px]  py-2 px-4  duration-300 bg-button-base hover:bg-light-base"
                >
                  {countdown < 1
                    ? " Send SMS"
                    : `00:${countdown < 10 ? `0${countdown}` : countdown}`}
                </button>
              </div>
            </div>

            {/* select title  */}
            <p className="text-[10px] md:text-[12px] font-normal text-black-base absolute -top-2 left-2 bg-white  px-2  z-20">
              {" "}
              You Phone number
            </p>
          </div>
          {/* active country menu  */}
          {activeCountry ? (
            <div className="max-h-[300px] z-50 absolute w-full top-12 overflow-x-auto bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded selectBarScroll py-3">
              <ul>
                {AllCountryNumberCodeData?.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => (
                      setSelectCountry(item), setActiveCountry(!activeCountry)
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
        </div>
        <div className="">
          <div className="relative w-full    text-black-base max-w-full ">
            <div>
              <input
                value={otp}
                onInput={handleOtpInput}
                type="tel"
                className="global-input"
              />
              <label className="global-label">Confirmation code</label>
              <button
                type="button"
                onClick={handleVerifyCode}
                className="text-white font-bold text-[14px] py-2 px-4 absolute rounded-r right-0 top-0 h-full   w-[] duration-300 bg-button-base hover:bg-light-base"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPhoneNumber;
