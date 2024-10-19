"use client";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import Swal from "sweetalert2";

export default function ChangePasswordModal({ activeModal, setActiveModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues, // Use getValues to access form values
  } = useForm({
    mode: "onBlur", // Validate on blur for better user experience
  });
  const [activePassword, setActivePassword] = useState(false);
  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const onSubmit = async (data) => {
    const newData = {
      current_password: data.current_password,
      new_password: data.new_password,
      new_password_confirmation: data.new_password_confirmation,
    };

    try {
      const result = await changePassword(newData).unwrap();
      if (result.status) {
        Swal.fire({
          title: "Success",
          text: "Password changed successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
        setActiveModal(!activeModal);
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

  return (
    <>
      {activeModal ? (
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
                <div className="w-full max-full rounded pt-7">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-5">
                      <div className="relative w-full text-black-base max-w-full">
                        <input
                          {...register("current_password", {
                            required: "Current password is required.",
                          })}
                          type={activePassword ? "text" : "password"}
                          className="peer global-input"
                          placeholder="Current Password"
                        />
                        <label className="global-label">Current Password</label>
                        {errors.current_password && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.current_password.message}
                          </p>
                        )}
                        <button
                          type="button"
                          className="absolute top-0  inset-y-0 right-0 px-3 py-2 text-black-base"
                          onClick={() => setActivePassword(!activePassword)}
                        >
                          {activePassword ? "🙈" : "👁️"}
                        </button>
                      </div>

                      <div className="relative w-full text-black-base max-w-full">
                        <input
                          {...register("new_password", {
                            required: "New password is required.",
                            minLength: {
                              value: 8,
                              message:
                                "Password must be at least 8 characters.",
                            },
                          })}
                          type={activePassword ? "text" : "password"}
                          className="peer global-input"
                          placeholder="New Password"
                        />
                        <label className="global-label">New Password</label>
                        {errors.new_password && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.new_password.message}
                          </p>
                        )}

                        <button
                          type="button"
                          className="absolute top-0 inset-y-0 right-0 px-3 py-2 text-black-base"
                          onClick={() => setActivePassword(!activePassword)}
                        >
                          {activePassword ? "🙈" : "👁️"}
                        </button>
                      </div>

                      <div className="relative w-full text-black-base max-w-full">
                        <input
                          {...register("new_password_confirmation", {
                            required: "Confirm password is required.",
                            validate: (value) => {
                              const { new_password } = getValues(); // Get the new password value
                              return (
                                value === new_password ||
                                "Passwords do not match."
                              );
                            },
                          })}
                          type={activePassword ? "text" : "password"}
                          className="peer global-input"
                          placeholder="Confirm Password"
                        />
                        <label className="global-label">Confirm Password</label>
                        {errors.new_password_confirmation && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.new_password_confirmation.message}
                          </p>
                        )}

                        <button
                          type="button"
                          className="absolute top-0  inset-y-0 right-0 px-3 py-2 text-black-base"
                          onClick={() => setActivePassword(!activePassword)}
                        >
                          {activePassword ? "🙈" : "👁️"}
                        </button>
                      </div>

                      <button
                        disabled={isLoading}
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-primary-base rounded hover:bg-light-base focus:outline-none focus:bg-green-600"
                      >
                        {isLoading ? "Loading..." : "Change Password"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
