"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SelectOptionsAndSearch from "../ui/inputs/SelectOptionsAndSearch";
import SelectCurrencyAndSearch from "../ui/inputs/SelectCurrencyAndSearch";
import SelectCityAndSearch from "../ui/inputs/SelectCityAndSearch";
import { FaEyeSlash } from "react-icons/fa";
const EmailForm = () => {
  const [activePassword, setActivePassword] = useState(false);
  const [selectCountry, setSelectCountry] = useState();
  const [selectCurrency, setSelectCurrency] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
              selectCurrency={selectCurrency}
              setSelectCurrency={setSelectCurrency}
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
              {...register("email", { required: "email is  required" })}
              type="text"
              className="w-full h-full pl-[14px] rounded overflow-hidden text-black-base pr-[30px] pt-[8px] pb-[18px] font-sans text-[14px] font-normal transition-all bg-transparent border  peer   text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] focus:border-[2px] focus:border-[#61d17d] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder
            />
            <label
              className="before:content[' '] after:content[' '] !rounded overflow-hidden  text-black-base pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[14px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-2  before:box-border before:block before:h-1.5 before:w-2.5   before:transition-all 
                   after:mt-[6.5px] after:ml-2 after:box-border after:block after:h-1 after:w-2.5 after:flex-grow  after:border-t after:border-r  z-40 after:transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:leading-[4.7] peer-placeholder-shown:text-[#000000] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent  
                  peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-black-base  peer-focus:before:border-t-[2px] peer-focus:before:border-l-[2px] peer-focus:before:!border-[#61d17d] peer-focus:after:border-t-[2px] peer-focus:after:border-r-[2px] peer-focus:after:!border-[#61d17d] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#61d17d]"
            >
              Email
            </label>
          </div>

          <div className="relative w-full  text-black-base max-w-full">
            <input
              {...register("phone_number")}
              type="text"
              className="w-full h-full pl-[14px] rounded overflow-hidden text-black-base pr-[30px] pt-[8px] pb-[18px] font-sans text-[14px] font-normal transition-all bg-transparent border  peer   text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] focus:border-[2px] focus:border-[#61d17d] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder
            />
            <label
              className="before:content[' '] after:content[' '] !rounded overflow-hidden  text-black-base pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[14px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-2  before:box-border before:block before:h-1.5 before:w-2.5   before:transition-all 
                   after:mt-[6.5px] after:ml-2 after:box-border after:block after:h-1 after:w-2.5 after:flex-grow  after:border-t after:border-r  z-40 after:transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:leading-[4.7] peer-placeholder-shown:text-[#000000] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent  
                  peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-black-base  peer-focus:before:border-t-[2px] peer-focus:before:border-l-[2px] peer-focus:before:!border-[#61d17d] peer-focus:after:border-t-[2px] peer-focus:after:border-r-[2px] peer-focus:after:!border-[#61d17d] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#61d17d]"
            >
              Phone number
            </label>
          </div>

          <div className="relative w-full  text-black-base max-w-full">
            <input
              {...register("firstName")}
              type="text"
              className="w-full h-full pl-[14px] rounded overflow-hidden text-black-base pr-[30px] pt-[8px] pb-[18px] font-sans text-[14px] font-normal transition-all bg-transparent border  peer   text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] focus:border-[2px] focus:border-[#61d17d] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder
            />
            <label
              className="before:content[' '] after:content[' '] !rounded overflow-hidden  text-black-base pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[14px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-2  before:box-border before:block before:h-1.5 before:w-2.5   before:transition-all 
                   after:mt-[6.5px] after:ml-2 after:box-border after:block after:h-1 after:w-2.5 after:flex-grow  after:border-t after:border-r  z-40 after:transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:leading-[4.7] peer-placeholder-shown:text-[#000000] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent  
                  peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-black-base  peer-focus:before:border-t-[2px] peer-focus:before:border-l-[2px] peer-focus:before:!border-[#61d17d] peer-focus:after:border-t-[2px] peer-focus:after:border-r-[2px] peer-focus:after:!border-[#61d17d] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#61d17d]"
            >
              First name
            </label>
          </div>

          <div className="relative w-full  text-black-base max-w-full">
            <input
              {...register("lastName")}
              type="text"
              className="w-full h-full pl-[14px] rounded overflow-hidden text-black-base pr-[30px] pt-[8px] pb-[18px] font-sans text-[14px] font-normal transition-all bg-transparent border  peer   text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] focus:border-[2px] focus:border-[#61d17d] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder
            />
            <label
              className="before:content[' '] after:content[' '] !rounded overflow-hidden  text-black-base pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[14px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-2  before:box-border before:block before:h-1.5 before:w-2.5   before:transition-all 
                   after:mt-[6.5px] after:ml-2 after:box-border after:block after:h-1 after:w-2.5 after:flex-grow  after:border-t after:border-r  z-40 after:transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:leading-[4.7] peer-placeholder-shown:text-[#000000] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent  
                  peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-black-base  peer-focus:before:border-t-[2px] peer-focus:before:border-l-[2px] peer-focus:before:!border-[#61d17d] peer-focus:after:border-t-[2px] peer-focus:after:border-r-[2px] peer-focus:after:!border-[#61d17d] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#61d17d]"
            >
              Last name{" "}
            </label>
          </div>
          {/* password  */}
          <div className="relative w-full  text-black-base max-w-full">
            <input
              {...register("password")}
              type={`${activePassword ? " text" : "password"}`}
              className="w-full h-full pl-[14px] rounded overflow-hidden text-black-base pr-[30px] pt-[8px] pb-[18px] font-sans text-[14px] font-normal transition-all bg-transparent border  peer   text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] focus:border-[2px] focus:border-[#61d17d] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder
            />
            <label
              className="before:content[' '] after:content[' '] !rounded overflow-hidden  text-black-base pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[14px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-2  before:box-border before:block before:h-1.5 before:w-2.5   before:transition-all 
                   after:mt-[6.5px] after:ml-2 after:box-border after:block after:h-1 after:w-2.5 after:flex-grow  after:border-t after:border-r  z-40 after:transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:leading-[4.7] peer-placeholder-shown:text-[#000000] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent  
                  peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-black-base  peer-focus:before:border-t-[2px] peer-focus:before:border-l-[2px] peer-focus:before:!border-[#61d17d] peer-focus:after:border-t-[2px] peer-focus:after:border-r-[2px] peer-focus:after:!border-[#61d17d] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#61d17d]"
            >
              Enter your password
            </label>
            <span
              onClick={() => setActivePassword(!activePassword)}
              className=" absolute right-2 cursor-pointer top-4"
            >
              <FaEyeSlash className="text-[18px] font-normal" />
            </span>
          </div>
          <div className="relative w-full  text-black-base max-w-full">
            <input
              {...register("re-enter-password")}
              type={`${activePassword ? " text" : "password"}`}
              className="w-full h-full pl-[14px] rounded overflow-hidden text-black-base pr-[30px] pt-[8px] pb-[18px] font-sans text-[14px] font-normal transition-all bg-transparent border  peer   text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] focus:border-[2px] focus:border-[#61d17d] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder
            />
            <label
              className="before:content[' '] after:content[' '] !rounded overflow-hidden  text-black-base pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[14px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-2  before:box-border before:block before:h-1.5 before:w-2.5   before:transition-all 
                   after:mt-[6.5px] after:ml-2 after:box-border after:block after:h-1 after:w-2.5 after:flex-grow  after:border-t after:border-r  z-40 after:transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:leading-[4.7] peer-placeholder-shown:text-[#000000] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent  
                  peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-black-base  peer-focus:before:border-t-[2px] peer-focus:before:border-l-[2px] peer-focus:before:!border-[#61d17d] peer-focus:after:border-t-[2px] peer-focus:after:border-r-[2px] peer-focus:after:!border-[#61d17d] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#61d17d]"
            >
              Re-enter your password
            </label>
            <span
              onClick={() => setActivePassword(!activePassword)}
              className=" absolute right-2 cursor-pointer top-4"
            >
              <FaEyeSlash className="text-[18px] font-normal" />
            </span>
          </div>

          {/* prome code  */}

          <div className="relative w-full  text-black-base max-w-full">
            <input
              {...register("lastName")}
              type="text"
              className="w-full h-full pl-[14px] rounded overflow-hidden text-black-base pr-[30px] pt-[8px] pb-[18px] font-sans text-[14px] font-normal transition-all bg-transparent border  peer   text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] focus:border-[2px] focus:border-[#61d17d] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder
            />
            <label
              className="before:content[' '] after:content[' '] !rounded overflow-hidden  text-black-base pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[14px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-2  before:box-border before:block before:h-1.5 before:w-2.5   before:transition-all 
                   after:mt-[6.5px] after:ml-2 after:box-border after:block after:h-1 after:w-2.5 after:flex-grow  after:border-t after:border-r  z-40 after:transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:leading-[4.7] peer-placeholder-shown:text-[#000000] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent  
                  peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-black-base  peer-focus:before:border-t-[2px] peer-focus:before:border-l-[2px] peer-focus:before:!border-[#61d17d] peer-focus:after:border-t-[2px] peer-focus:after:border-r-[2px] peer-focus:after:!border-[#61d17d] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#61d17d]"
            >
              Prome code (if you have one)
            </label>
          </div>
          {/* submit button  */}
          <div className="w-full">
            <button
              type="submit"
              className="bg-button-base w-full hover:bg-active-base duration-300 text-white uppercase font-sans text-[16px] font-medium py-3 px-4 rounded"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
