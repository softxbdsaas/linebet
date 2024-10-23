"use client";

import { useForgotPasswordMutation } from "@/redux/api/forgotApi";
import { forgotStatus } from "@/redux/features/forgotPasswordSlice";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import SentOtp from "./SentOtp";
import SetNewPassword from "./SetNewPassword";

const ForgotModal = ({ forgot }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [method, setMethod] = useState("email"); // Default to email

  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const [activeOtp, setActiveOtp] = useState(null);
  const [activeSetPassword, setActiveSetPassword] = useState(null);

  const onSubmit = async (data) => {
    try {
      console.log(data);

      const result = await forgotPassword(data).unwrap();
      if (result.status == true) {
        setActiveOtp(data);
        Swal.fire({
          title: "Success",
          text: "Otp sent successful!",
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
  // const forgot = true;
  return (
    <>
      {forgot && (
        <div className="fixed  left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-[500]">
          {activeOtp ? (
            <SentOtp
              setActiveOtp={setActiveOtp}
              setActiveSetPassword={setActiveSetPassword}
              activeOtp={activeOtp}
            />
          ) : activeSetPassword ? (
            <SetNewPassword />
          ) : (
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md relative ">
              <div
                onClick={() => dispatch(forgotStatus())}
                className=" text-black-base  hover:text-red-400 absolute  cursor-pointer duration-300  right-2 top-2"
              >
                <IoClose className="text-[20px]" />
              </div>

              <h2 className=" text-lg md:text-2xl font-medium md:font-semibold mb-6  text-black-base ">
                Password recovery
              </h2>

              <div className="flex mb-6">
                <button
                  className={`w-1/2 py-2 text-sm  font-semibold ${
                    method === "email"
                      ? "bg-light-base text-white"
                      : "bg-light-muted text-gray-700"
                  }`}
                  onClick={() => setMethod("email")}
                >
                  By e-mail
                </button>
                <button
                  className={`w-1/2 py-2 text-sm font-semibold ${
                    method === "phone"
                      ? "bg-light-base text-white"
                      : "bg-light-muted text-gray-700"
                  }`}
                  onClick={() => setMethod("phone")}
                >
                  By phone
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {method === "email" && (
                  <>
                    <label className="block">
                      <span className="text-gray-700">
                        Enter the email address you used to register
                      </span>
                      <input
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                        })}
                        className="mt-1 block w-full px-3 py-2 border-gray-500 text-black-base  border focus:border-light-base outline-none rounded-md shadow-sm  "
                        placeholder="Your e-mail*"
                      />
                      {errors.email && (
                        <p className="text-red-600 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </label>
                  </>
                )}

                {method === "phone" && (
                  <>
                    <label className="block">
                      <span className="text-gray-700">
                        Enter the mobile phone number you used to register
                      </span>
                      <input
                        type="tel"
                        {...register("phone_number", {
                          required: "Phone number is required",
                        })}
                        className="mt-1 block w-full px-3 py-2 border-gray-500 text-black-base  border focus:border-light-base outline-none rounded-md shadow-sm "
                        placeholder="Your phone number*"
                      />
                      {errors.phone_number && (
                        <p className="text-red-600 text-sm mt-1">
                          {errors.phone_number.message}
                        </p>
                      )}
                    </label>
                  </>
                )}

                <button
                  type="submit"
                  className="w-full py-2 px-4  bg-primary-base text-white font-semibold rounded-md shadow hover:bg-primary-muted transition-colors"
                >
                  {isLoading ? "loading.." : "SEND"}
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ForgotModal;
