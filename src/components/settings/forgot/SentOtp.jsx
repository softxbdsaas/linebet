"use client";
import {
  useResentOtpMutation,
  useVerifyOtpMutation,
} from "@/redux/api/forgotApi";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { IoTimeSharp } from "react-icons/io5";
import Cookies from "js-cookie";
import { authKey, cookiesExpires } from "@/constants/authKey";
import { userInfo } from "@/redux/features/authSlice";
import { forgotStatus } from "@/redux/features/forgotPasswordSlice";

const SentOtp = ({ activeOtp, setActiveSetPassword, setActiveOtp }) => {
  const dispatch = useDispatch();

  const [remainingTime, setRemainingTime] = useState(120); // Initialize with 120 seconds

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
  const [resentOtp] = useResentOtpMutation();

  useEffect(() => {
    // Countdown timer
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalId);
          return 0; // Timer expired
        }
        return prevTime - 1; // Decrease time by 1 second
      });
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [remainingTime]);

  const onSubmit = async (data) => {
    try {
      const newData = { ...activeOtp, otp: data.otp };
      const result = await verifyOtp(newData).unwrap();
      console.log(result);
      if (result.status === true) {
        Cookies.set(authKey, result?.data?.token, {
          expires: cookiesExpires, // Set the cookie to expire in 10 days
          secure: process.env.NODE_ENV === "production", // Secure flag for production
          path: "/",
        });
        dispatch(userInfo(result?.data?.user)); // Call your submit function
        setActiveSetPassword(result?.data?.user);
        setActiveOtp(null);
        Swal.fire({
          title: "Success",
          text: "Otp verify successful!",
          icon: "success",
          confirmButtonText: "OK",
        });
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

  const handleReSendOtp = async () => {
    try {
      const result = await resentOtp({ phone_number: "01617650797" }).unwrap();
      if (result.status === true) {
        setRemainingTime(120); // Reset timer on resend
        Swal.fire({
          title: "Success",
          text: "Resent send otp successful!",
          icon: "success",
          confirmButtonText: "OK",
        });
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

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}m ${seconds}s`;
  };

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md relative ">
      <div
        onClick={() => dispatch(forgotStatus())}
        className="text-black-base hover:text-red-400 absolute cursor-pointer duration-300 right-2 top-2"
      >
        <IoClose className="text-[20px]" />
      </div>
      <div className="text-black-base">
        <h2 className="text-2xl font-bold mb-6">Confirmation</h2>

        <div>
          {activeOtp?.email ? (
            <p>
              If you provided the email address {activeOtp?.email?.split('@')?.[0]}@gmail.com
              when you registered, you will receive an email with a confirmation
              code
            </p>
          ) : (
            <p>
              If you provided the phone number +880 {activeOtp?.phone_number?.slice(1,2)} ***** {activeOtp?.phone_number?.slice(7,11)}  when you
              registered, you will receive a text message with a confirmation
              code
            </p>
          )}
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Enter Code:</span>
            <input
              type="number"
              {...register("otp", {
                required: "Code is required",
              })}
              className="mt-1 block w-full px-3 py-2 border-gray-500 text-black-base border focus:border-light-base outline-none rounded-md shadow-sm"
              placeholder="Code*"
            />
            {errors.otp && (
              <p className="text-red-600 text-sm mt-1">{errors.otp.message}</p>
            )}
          </label>
          <div className="pt-3">
            <div className="flex items-center gap-1">
              <IoTimeSharp />
              <p>
                {remainingTime > 0
                  ? formatTime(remainingTime) + " Time remaining"
                  : "Otp expired!"}
              </p>
              {remainingTime <= 0 ? (
                <span
                  className="cursor-pointer underline"
                  onClick={handleReSendOtp}
                >
                  Send again
                </span>
              ) : null}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4  bg-primary-base text-white font-semibold rounded-md shadow hover:bg-primary-muted transition-colors"
            disabled={remainingTime <= 0} // Disable button if time expired
          >
            {isLoading ? "Loading..." : "CONFIRM"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SentOtp;
