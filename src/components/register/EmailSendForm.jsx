"use client";
import { useSendEmilForUsernameAndPasswordMutation } from "@/redux/api/authApi";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const EmailSendForm = ({ userinfo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    mode: "onChange", // Validate on change for real-time feedback
  });
  const [sendEmilForUsernameAndPassword, { isLoading }] =
    useSendEmilForUsernameAndPasswordMutation();

  const onSubmit = async (data) => {
    try {
      const newData = {
        email: data.email,
        password: userinfo?.password,
        user_name: userinfo?.userName,
      };
      
      // Send email using the sendEmilForUsernameAndPassword mutation
      const res = await sendEmilForUsernameAndPassword(newData).unwrap();
      if (res?.status == true) {
        Swal.fire({
          title: "Success",
          text: "Email sent successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Email not sent.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Email send  failed.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const email = watch("email");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
        {/* Email Input */}
        <div>
          <input
            type="email"
            className={`w-full px-3 py-2 border rounded outline-0 sm:text-sm ${
              errors.email
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300  focus:border-light-base"
            }`}
            placeholder="Enter your email address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Enter a valid email address",
              },
            })}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isValid || !email}
          className={`uppercase w-full px-4 rounded text-black-base ${
            isValid && email
              ? "bg-light-base text-white cursor-pointer"
              : "bg-light-muted  text-black-base cursor-not-allowed"
          }`}
        >
          Send to e-mail
        </button>
      </div>
    </form>
  );
};

export default EmailSendForm;
