"use client";
import { useSetPasswordMutation } from "@/redux/api/forgotApi";
import { forgotStatus } from "@/redux/features/forgotPasswordSlice";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const SetNewPassword = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();
  const [activePassword, setActivePassword] = useState(false);
  const [setPassword, { isLoading }] = useSetPasswordMutation();

  const onSubmit = async (data) => {
    try {
      const result = await setPassword(data).unwrap();
      if (result.status === true) {
        Swal.fire({
          title: "Success",
          text: "Password set successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
        dispatch(forgotStatus());
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

  const password = watch("password"); // Watch the password field

  return (
    <div>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md relative">
        <div
          onClick={() => dispatch(forgotStatus())}
          className="text-black-base hover:text-red-400 absolute cursor-pointer duration-300 right-2 top-2"
        >
          <IoClose className="text-[20px]" />
        </div>
        <div className="text-black-base">
          <h2 className="text-2xl font-bold mb-6">Password Change</h2>
          <p className=" pb-3 text-xs  md:text-sm">
            Enter your new password: at least 6 characters, including Latin
            letters and numbers
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="" className="text-xs md:text-sm">
                Password *{" "}
              </label>
              <div className="relative">
                <input
                  type={activePassword ? "text" : "password"}
                  id="password"
                  {...register("password", {
                    required: "Password is required.",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters.",
                    },
                    validate: (value) =>
                      /(?=.*[0-9])(?=.*[a-zA-Z])/.test(value) ||
                      "Password must include letters and numbers.",
                  })}
                  placeholder="New Password *"
                  className={`w-full px-4 py-2 border border-gray-500 ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded focus:border-purple-600 focus:text-black-base outline-none`}
                />

                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-3 py-2 text-black-base"
                  onClick={() => setActivePassword(!activePassword)}
                >
                  {activePassword ? "🙈" : "👁️"}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm password */}
            <div>
              <label htmlFor="" className="text-xs md:text-sm">
                {" "}
                Confirm password *
              </label>
              <div className="relative">
                <input
                  type={activePassword ? "text" : "password"}
                  id="confirm_password"
                  {...register("confirm_password", {
                    required: "Confirm Password is required.",
                    validate: (value) =>
                      value === password || "Passwords do not match.",
                  })}
                  placeholder="Re-enter your password *"
                  className={`w-full px-4 py-2 border border-gray-500 ${
                    errors.confirm_password
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded focus:border-light-base focus:text-black-base  outline-none`}
                />

                <button
                  type="button"
                  className="absolute inset-y-0 right-0 h-full flex justify-center items-center px-3 py-2 text-black-base"
                  onClick={() => setActivePassword(!activePassword)}
                >
                  {activePassword ? "🙈" : "👁️"}
                </button>
              </div>
              {errors.confirm_password && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.confirm_password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4  bg-primary-base text-white font-semibold rounded-md shadow hover:bg-primary-muted transition-colors"
              disabled={isLoading} // Disable button if loading
            >
              {isLoading ? "Loading..." : "SAVE"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SetNewPassword;
