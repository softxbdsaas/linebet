"use client";
import { authKey } from "@/constants/authKey";
import { userInfo } from "@/redux/features/authSlice";
import { loginToggle } from "@/redux/features/loginSlice";
import Cookies from "js-cookie";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaGoogle,
  FaApple,
  FaTwitter,
  FaTelegram,
  FaLine,
  FaTwitch,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
export default function LoginModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const { loginModal } = useSelector((state) => state.loginModal);
  const [activePassword, setActivePassword] = useState(false);
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    try {
      // Make the POST request to your API
      setLoading(true);
      const trimmedData = {
        emailOrID: data.emailOrID.trim(),
        password: data.password.trim(),
      };

      // Make the POST request to your API
      setLoading(true);
      const newData = {
        email: null,
        password: trimmedData.password,
      };

      if (/\S+@\S+\.\S+/.test(trimmedData.emailOrID)) {
        // If the username matches the email pattern
        newData.email = trimmedData.emailOrID;
      } else {
        // Otherwise, treat it as an ID
        newData.userName = trimmedData.emailOrID;
      }

      // Now, newData will have either email or id populated

      const response = await fetch("https://express-auth-wheat.vercel.app/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      const result = await response.json();

      if (result.status == true) {
        setLoading(false);
        Cookies.set(authKey, result?.token, {
          expires: process.env.JWT_EXPIRES,
          path: "/",
        });
        dispatch(userInfo(result?.user)); // Call your submit function
        Swal.fire({
          title: "Success",
          text: "Login successful!",
          icon: "success",
          confirmButtonText: "OK",
        });
        dispatch(loginToggle());
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
    <>
      {loginModal ? (
        <div className="fixed  left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-[500]">
          <div className=" flex justify-center  items-center">
            <div className=" rounded relative">
              <div className="flex justify-center items-center p-4 bg-white   w-full  rounded">
                <div
                  onClick={() => dispatch(loginToggle())}
                  className=" text-black-base  hover:text-red-400 absolute  cursor-pointer duration-300  right-2 top-2"
                >
                  <IoClose className="text-[20px]" />
                </div>
                <div className="w-full max-full rounded  pt-5">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                      <input
                        type="text"
                        id="emailOrID"
                        {...register("emailOrID", {
                          required: "Email or ID is required.",
                        })}
                        placeholder="E-mail or ID"
                        className={`w-full px-4 py-2  border border-gray-500 ${
                          errors.emailOrID ? "border-red-500" : ""
                        } rounded focus:border-[#7C2EEB]  focus: text-black-base`}
                      />
                      {errors.emailOrID && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.emailOrID.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-6">
                      <div className="relative">
                        <input
                          type={activePassword ? "text" : "password"}
                          id="password"
                          {...register("password", {
                            required: "Password is required.",
                          })}
                          placeholder="Password"
                          className={`w-full px-4 py-2 border border-gray-500 ${
                            errors.password
                              ? "border-red-500"
                              : "border-gray-300"
                          } rounded focus:border-[#7C2EEB]  focus: text-black-base`}
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
                        <p className="mt-1 text-sm text-red-500">
                          {errors.password.message}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="remember"
                          className="w-4 h-4 text-primary-base border-gray-300 rounded focus:ring-green-500"
                          {...register("remember")}
                        />
                        <label
                          className="ml-2 text-sm text-primary-base"
                          htmlFor="remember"
                        >
                          Remember
                        </label>
                      </div>

                      <a
                        href="#"
                        className="text-sm text-primary-base hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>

                    <button
                      disabled={loading}
                      type="submit"
                      className="w-full px-4 py-2 text-white bg-primary-base rounded hover:bg-light-base focus:outline-none focus:bg-green-600"
                    >
                      {loading ? "Loading..." : " LOG IN"}
                    </button>

                    <p className="mt-6 text-center text-sm text-gray-600">
                      You can log in to the website via:
                    </p>

                    <div className="mt-4 flex justify-center space-x-4">
                      <div className="hover:bg-light-base p-2 bg-light-muted hover:text-white text-black-base  rounded-full">
                        <FaGoogle className="text-xl   cursor-pointer" />
                      </div>
                      <div className="hover:bg-light-base bg-light-muted text-black-base hover:text-white p-2 rounded-full">
                        <FaApple className="text-xl  cursor-pointer" />
                      </div>
                      <div className="hover:bg-light-base bg-light-muted text-black-base hover:text-white p-2 rounded-full">
                        <FaTwitter className="text-xl  cursor-pointer" />
                      </div>
                      <div className="hover:bg-light-base bg-light-muted text-black-base hover:text-white p-2 rounded-full">
                        <FaTelegram className="text-xl  cursor-pointer" />
                      </div>
                      <div className="hover:bg-light-base bg-light-muted text-black-base hover:text-white p-2 rounded-full">
                        <FaLine className="text-xl  cursor-pointer" />
                      </div>
                      <div className="hover:bg-light-base bg-light-muted text-black-base hover:text-white p-2 rounded-full">
                        <FaTwitch className="text-xl  cursor-pointer" />
                      </div>
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
