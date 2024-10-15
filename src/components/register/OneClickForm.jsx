import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SelectOptionsAndSearch from "../ui/inputs/SelectOptionsAndSearch";
import SelectCurrencyAndSearch from "../ui/inputs/SelectCurrencyAndSearch";
import { useDispatch } from "react-redux";
import { userInfo } from "@/redux/features/authSlice";
import { MySwal } from "../ui/toast/SweetAlert";
import { registerToggle } from "@/redux/features/registerSlice";
import Cookies from "js-cookie";
import { authKey } from "@/constants/authKey";

const OneClickForm = () => {
  const [selectCountry, setSelectCountry] = useState();
  const [selectCurrency, setSelectCurrency] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      // Create the new data object
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/one-click`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        }
      );

      const result = await response.json();
      Cookies.set(authKey, result?.data?.token?.access_token, {
        expires: result?.data?.token?.expires_in,
        path: "/",
      });
      const userIfo = result?.data?.user;
      const newData = {
        ...userIfo,
        country: selectCountry,
        currency: selectCurrency,
      };

      // If confirmed, submit the form
      dispatch(userInfo(newData)); // Call your submit function
      MySwal.fire("Submitted!", " Registration success", "success");
      setIsLoading(false);
      MySwal.fire({
        title: "Your UserId And Password",
        text: `Your UserId :${result?.data?.userName} and Password :${result?.data?.password}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes , I got it!",
      }).then((result) => {
        if (result.isConfirmed) {
          setIsLoading(false);
          dispatch(registerToggle());
          window.location.replace("/office/account");
          MySwal.fire({
            title: "success",
            text: "One  click Register success",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
      });
    } catch (error) {
      // Handle errors
      setIsLoading(false);
      MySwal.fire(
        "Error!",
        "Something went wrong during form submission.",
        "error"
      );
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
            <SelectCurrencyAndSearch
              selectCurrency={selectCurrency}
              setSelectCurrency={setSelectCurrency}
            />
          </div>
          <div className="relative w-full  text-black-base max-w-full">
            <input
              {...register("prome_code")}
              type="text"
              className="global-input"
              placeholder
            />
            <label
              className="global-label">
              Prome code (if you have one)
            </label>
          </div>

          <div className="w-full">
            <button
              disabled={isLoading}
              type="submit"
              className="bg-button-base w-full hover:bg-active-base duration-300 text-white uppercase font-sans text-[14px] md:text-[16px] font-medium py-2 md:py-3 px-4 rounded"
            >
              {isLoading ? "Loading..." : "Register"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OneClickForm;
