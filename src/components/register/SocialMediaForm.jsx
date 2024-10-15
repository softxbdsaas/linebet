"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SelectOptionsAndSearch from "../ui/inputs/SelectOptionsAndSearch";
import SelectCurrencyAndSearch from "../ui/inputs/SelectCurrencyAndSearch";
import SocialIcons from "./SocialIcons";


const SocialMediaForm = () => {
  const [selectCountry, setSelectCountry] = useState();
  const [selectCurrency, setSelectCurrency] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="pt-6 pb-4">
      <SocialIcons />
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
              className="global-label"
            >
              Prome code (if you have one)
            </label>
          </div>

          <div className="w-full">
            <button
              type="submit"
              className="bg-button-base w-full hover:bg-active-base duration-300 text-white uppercase font-sans text-[14px] md:text-[16px] font-medium py-2 md:py-3 px-4 rounded"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SocialMediaForm;
