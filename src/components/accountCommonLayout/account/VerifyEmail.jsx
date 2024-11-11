"use client";
import {
  useEmailOtpVerifyMutation,
  useVerifyEmailMutation,
} from "@/redux/api/authApi";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import Swal from "sweetalert2";

const VerifyEmail = ({ activeModal, setActiveModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues, // Use getValues to access form values
  } = useForm({
    mode: "onBlur", // Validate on blur for better user experience
  });
  const [activeVerifyCode, setActiveVerifyCode] = useState(false);
  const [emailOtpVerify, { isLoading: otpIsLoading }] =
    useEmailOtpVerifyMutation();
  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();
  const [email, setEmail] = useState("");

  const onSubmit = async (data) => {
    const newData = {
      email: data.email,
    };
    setEmail(data.email);
    try {
      const result = await verifyEmail(newData).unwrap();
      if (result.status) {
        Swal.fire({
          title: "Success",
          text: "Email send success, please check our email!",
          icon: "success",
          confirmButtonText: "OK",
        });
        setActiveVerifyCode(!activeVerifyCode);
      } else {
        Swal.fire({
          title: "Error",
          text: result.data || "Something went wrong!",
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

  const onSubmitOtp = async (data) => {
    const newData = {
      email: email,
      otp: parseInt(data.otp),
    };
    try {
      const result = await emailOtpVerify(newData).unwrap();
      console.log(result);
      if (result.status) {
        Swal.fire({
          title: "Success",
          text: "Your email verification success!",
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
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-5">
                      <p className=" text-base text-black-base md:text-lg lg:text-xl">
                        Link your e-mail address to your account
                      </p>
                      <p className="text-black-base  text-sm">
                        This e-mail address will be used to recover access to
                        your account if you lose your login details!
                      </p>
                      <div className="relative w-full text-black-base max-w-full">
                        <input
                          {...register("email", {
                            required: " Email is required.",
                          })}
                          type={"text"}
                          className="peer global-input"
                          placeholder="Enter your email address"
                        />
                        <label className="global-label">Enter Your Email</label>
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <button
                        disabled={isLoading}
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-primary-base rounded hover:bg-light-base focus:outline-none focus:bg-green-600"
                      >
                        {isLoading ? "Loading..." : "Submit"}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="w-full max-full rounded pt-7">
                  <form onSubmit={handleSubmit(onSubmitOtp)}>
                    <div className="space-y-5">
                      <p className=" text-base text-black-base md:text-lg lg:text-xl">
                        Opt Verification
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
                        disabled={otpIsLoading}
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-primary-base rounded hover:bg-light-base focus:outline-none focus:bg-green-600"
                      >
                        {otpIsLoading ? "Loading..." : "Submit"}
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

export default VerifyEmail;
