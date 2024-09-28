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
        "https://express-auth-wheat.vercel.app/api/auth/verify-phone",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phoneNumber }),
        }
      );
      const result = await response.json();
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

        setIsLoading(true);
        // Make the POST request to your API
        const response = await fetch(
          "https://express-auth-wheat.vercel.app/api/auth/verify-otp",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ phoneNumber, otp }),
          }
        );
        const result = await response.json();
    
        if (response.ok) {
          setIsLoading(false);
          setVerifyPhoneNumberStatus(result?.verifyInfo);
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
                className="w-full h-full pl-[14px] rounded overflow-hidden text-black-base pr-[30px] pt-[8px] pb-[18px] font-sans text-[14px] font-normal transition-all bg-transparent border  peer   text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] focus:border-[2px] focus:border-[#61d17d] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <label
                className="before:content[' '] after:content[' '] !rounded overflow-hidden  text-black-base pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[14px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-2  before:box-border before:block before:h-1.5 before:w-2.5   before:transition-all 
                   after:mt-[6.5px] after:ml-2 after:box-border after:block after:h-1 after:w-2.5 after:flex-grow  after:border-t after:border-r  z-40 after:transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:leading-[4.7] peer-placeholder-shown:text-[#000000] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent  
                  peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-black-base  peer-focus:before:border-t-[2px] peer-focus:before:border-l-[2px] peer-focus:before:!border-[#61d17d] peer-focus:after:border-t-[2px] peer-focus:after:border-r-[2px] peer-focus:after:!border-[#61d17d] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#61d17d]"
              >
                Confirmation code
              </label>
              <button
                type="button"
                onClick={handleVerifyCode}
                className="text-white font-bold text-[14px] py-2 px-4 absolute rounded-r right-0 h-full   w-[] duration-300 bg-button-base hover:bg-light-base"
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
