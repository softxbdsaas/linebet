"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SelectOptionsAndSearch from "../ui/inputs/SelectOptionsAndSearch";
import SelectCurrencyAndSearch from "../ui/inputs/SelectCurrencyAndSearch";
import SelectCityAndSearch from "../ui/inputs/SelectCityAndSearch";
import { FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { userInfo } from "@/redux/features/authSlice";
import { useDispatch } from "react-redux";
import { registerToggle } from "@/redux/features/registerSlice";
import Cookies from "js-cookie";
import { authKey, cookiesExpires } from "@/constants/authKey";
import {
  useRegisterForEmailMutation,
  useRegisterMutation,
} from "@/redux/api/authApi";
const EmailForm = () => {
  const [activePassword, setActivePassword] = useState(false);
  const [selectCity, setSelectCity] = useState();
  const [selectCountry, setSelectCountry] = useState();
  const [selectCurrency, setSelectCurrency] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [registerForEmail, { loading, error }] = useRegisterForEmailMutation();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    try {
      // Destructure form data
      const {
        email,
        password,
        confirmPassword,
        city,
        promo,
        firstName,
        lastName,
        phone_number,
      
      } = data;

      // Validate passwords match
      if (confirmPassword !== password) {
        Swal.fire({
          title: "Error",
          text: "Passwords do not match!",
          icon: "error",
          confirmButtonText: "Try Again",
        });
        return;
      }

      // Prepare the data to send
      const newData = {
        email,
        password,
        country: selectCountry?.countryname || "", // Provide a default or empty string
        city: selectCity?.name || "", // Provide a default or empty string
        currency: selectCurrency?.currency || "", // Provide a default or empty string
        promo,
        name: `${firstName} ${lastName}`,
        phone_number: phone_number,
      };

      console.log(newData)


      // Attempt to register the user
      const result = await registerForEmail(newData).unwrap();
      console.log(result)
      // Check for API response
      if (result.status == true) {
        // Handle successful response
        Cookies.set(authKey, result?.data?.token?.access_token, {
          expires: cookiesExpires, // Set the cookie to expire in 10 days
          secure: process.env.NODE_ENV === "production", // Secure flag for production
          path: "/",
        });
        dispatch(userInfo(result?.data?.user));

        Swal.fire({
          title: "Success",
          text: "Registration successful!",
          icon: "success",
          confirmButtonText: "OK",
        });

        dispatch(registerToggle());
        window.location.replace("/");
      } else {
        // Changed to simply check for falsy value
        Swal.fire({
          title: "Error",
          text: result.data || "Something went wrong!",
          icon: "error",
          confirmButtonText: "Try Again",
        });
        return; // Exit early
      }
    } catch (error) {
      console.log(error)
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "An unexpected error occurred!";
      Swal.fire({
        title: "Error",
        text: errorMessage,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="pt-6 pb-4">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid sm:grid-cols-2 gap-4 items-start py-3">
          <div>
            <SelectOptionsAndSearch
              selectCountry={selectCountry}
              setSelectCountry={setSelectCountry}
            />
          </div>
          <div>
            <SelectCityAndSearch
              selectCity={selectCity}
              setSelectCity={setSelectCity}
            />
          </div>
        </div>
        <div className="py-2">
          <SelectCurrencyAndSearch
            selectCurrency={selectCurrency}
            setSelectCurrency={setSelectCurrency}
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4 items-start py-3">
          <div className="relative w-full  text-black-base max-w-full">
            <input
              {...register("email", { required: "Email is  required" })}
              type="text"
              className="global-input"
              placeholder
            />
            <label
              className="global-label"
            >
              Email
            </label>
            <div>
              {errors.email && (
                <p role="alert" className="text-[12px] text-red-600">
                  {errors.email?.message}
                </p>
              )}
            </div>
          </div>

          <div className="relative w-full  text-black-base max-w-full">
            <input
              {...register("phone_number")}
              type="text"
              className="global-input"
              placeholder
            />
            <label
              className="global-label"
            >
              Phone number
            </label>
          </div>

          <div className="relative w-full  text-black-base max-w-full">
            <input
              {...register("firstName")}
              type="text"
              className="global-input"
              placeholder
            />
            <label
              className="global-label"
            >
              First name
            </label>
          </div>

          <div className="relative w-full  text-black-base max-w-full">
            <input
              {...register("lastName")}
              type="text"
              className="global-input"
              placeholder
            />
            <label
              className="global-label"
            >
              Last name{" "}
            </label>
          </div>
          {/* password  */}
          <div className="relative w-full  text-black-base max-w-full">
            <input
              {...register("password", { required: "password is required" })}
              type={`${activePassword ? " text" : "password"}`}
              className="global-input"
              placeholder
            />
            <label
              className="global-label"
            >
              Enter your password
            </label>
            <span
              onClick={() => setActivePassword(!activePassword)}
              className=" absolute right-2 cursor-pointer top-4"
            >
              <FaEyeSlash className="text-[18px] font-normal" />
            </span>
            <div>
              {errors.password && (
                <p role="alert" className="text-[12px] text-red-600">
                  {errors.password?.message}
                </p>
              )}
            </div>
          </div>
          <div className="relative w-full  text-black-base max-w-full">
            <input
              {...register("confirmPassword", {
                required: "confirmPassword is required",
              })}
              type={`${activePassword ? " text" : "password"}`}
              className="global-input"
              placeholder
            />
            <label
              className="global-label"
            >
              Re-enter your password
            </label>
            <span
              onClick={() => setActivePassword(!activePassword)}
              className=" absolute right-2 cursor-pointer top-4"
            >
              <FaEyeSlash className="text-[18px] font-normal" />
            </span>
            <div>
              {errors.confirmPassword && (
                <p role="alert" className="text-[12px] text-red-600">
                  {errors.confirmPassword?.message}
                </p>
              )}
            </div>
          </div>

          {/* prome code  */}

          <div className="relative w-full  text-black-base max-w-full">
            <input
              {...register("promo")}
              type="text"
              className="global-input"
              placeholder
            />
            <label
              className="global-label"
            >
              Prome code (if you have one)
            </label>
          </div>
          {/* submit button  */}
          <div className="w-full">
            <button
              disabled={loading}
              type="submit"
              className="bg-button-base w-full hover:bg-active-base duration-300 text-white uppercase font-sans text-[14px] md:text-[16px] font-medium py-2 md:py-3 px-4 rounded"
            >
              {loading ? "Loading..." : "Registration"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
