"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoLockClosed } from "react-icons/io5";

const AccountForm = () => {
  const [activePassword, setActivePassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="text-black-base grid grid-cols-2 gap-3 md:gap-6">
            <div>
              <div className="px-2 md:px-4 py-3  bg-white mt-3 rounded">
                <div className="mt-3">
                  <h1 className="text-[18px] pb-3 font-medium">Account</h1>
                  <div className=" space-y-6">
                    {/* Account  */}
                    <div>
                      <div className="relative w-full  text-black-base max-w-full">
                        <input
                          {...register("text")}
                          type={`text`}
                          className="w-full h-full pl-[14px] rounded overflow-hidden text-black-base pr-[30px] pt-[8px] pb-[18px] font-sans text-[14px] font-normal transition-all bg-transparent border  peer   text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] focus:border-[2px] focus:border-[#61d17d] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          placeholder
                        />
                        <label
                          className="before:content[' '] after:content[' '] !rounded overflow-hidden  text-black-base pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[14px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-2  before:box-border before:block before:h-1.5 before:w-2.5   before:transition-all 
                   after:mt-[6.5px] after:ml-2 after:box-border after:block after:h-1 after:w-2.5 after:flex-grow  after:border-t after:border-r  z-40 after:transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:leading-[4.7] peer-placeholder-shown:text-[#000000] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent  
                  peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-black-base  peer-focus:before:border-t-[2px] peer-focus:before:border-l-[2px] peer-focus:before:!border-[#61d17d] peer-focus:after:border-t-[2px] peer-focus:after:border-r-[2px] peer-focus:after:!border-[#61d17d] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#61d17d]"
                        >
                          Account number
                        </label>
                        <span className=" absolute right-2 cursor-pointer top-4">
                          <IoLockClosed className="text-[18px] font-normal" />
                        </span>
                      </div>
                    </div>

                    <div className="relative w-full  text-black-base max-w-full">
                      <input
                        {...register("password")}
                        type={`text`}
                        className="w-full h-full pl-[14px] rounded overflow-hidden text-black-base pr-[30px] pt-[8px] pb-[18px] font-sans text-[14px] font-normal transition-all bg-transparent border  peer   text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] focus:border-[2px] focus:border-[#61d17d] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder
                      />
                      <label
                        className="before:content[' '] after:content[' '] !rounded overflow-hidden  text-black-base pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[14px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-2  before:box-border before:block before:h-1.5 before:w-2.5   before:transition-all 
                   after:mt-[6.5px] after:ml-2 after:box-border after:block after:h-1 after:w-2.5 after:flex-grow  after:border-t after:border-r  z-40 after:transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:leading-[4.7] peer-placeholder-shown:text-[#000000] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent  
                  peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-black-base  peer-focus:before:border-t-[2px] peer-focus:before:border-l-[2px] peer-focus:before:!border-[#61d17d] peer-focus:after:border-t-[2px] peer-focus:after:border-r-[2px] peer-focus:after:!border-[#61d17d] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#61d17d]"
                      >
                        Password
                      </label>
                      <span className=" absolute right-2 cursor-pointer top-4">
                        <IoLockClosed className="text-[18px] font-normal" />
                      </span>
                    </div>
                    {/* Registration date  */}
                    <div className="relative w-full  text-black-base max-w-full">
                      <input
                        {...register("text")}
                        type={`text`}
                        className="w-full h-full pl-[14px] rounded overflow-hidden text-black-base pr-[30px] pt-[8px] pb-[18px] font-sans text-[14px] font-normal transition-all bg-transparent border  peer   text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] focus:border-[2px] focus:border-[#61d17d] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder
                      />
                      <label
                        className="before:content[' '] after:content[' '] !rounded overflow-hidden  text-black-base pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[14px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-2  before:box-border before:block before:h-1.5 before:w-2.5   before:transition-all 
                   after:mt-[6.5px] after:ml-2 after:box-border after:block after:h-1 after:w-2.5 after:flex-grow  after:border-t after:border-r  z-40 after:transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:leading-[4.7] peer-placeholder-shown:text-[#000000] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent  
                  peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-black-base  peer-focus:before:border-t-[2px] peer-focus:before:border-l-[2px] peer-focus:before:!border-[#61d17d] peer-focus:after:border-t-[2px] peer-focus:after:border-r-[2px] peer-focus:after:!border-[#61d17d] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#61d17d]"
                      >
                        Registration date
                      </label>
                      <span className=" absolute right-2 cursor-pointer top-4">
                        <IoLockClosed className="text-[18px] font-normal" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2 md:px-4 py-3  bg-white mt-3 rounded">
                <div className="mt-3">
                  <h1 className="text-[18px] pb-3 font-medium">Contacts</h1>
                  <div className=" space-y-6">
                    {/* Account  */}
                    <div>
                      <div className="relative w-full  text-black-base max-w-full">
                        <input
                          {...register("text")}
                          type={`text`}
                          className="w-full h-full pl-[14px] rounded overflow-hidden text-black-base pr-[30px] pt-[8px] pb-[18px] font-sans text-[14px] font-normal transition-all bg-transparent border  peer   text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] focus:border-[2px] focus:border-[#61d17d] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          placeholder
                        />
                        <label
                          className="before:content[' '] after:content[' '] !rounded overflow-hidden  text-black-base pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[14px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-2  before:box-border before:block before:h-1.5 before:w-2.5   before:transition-all 
                   after:mt-[6.5px] after:ml-2 after:box-border after:block after:h-1 after:w-2.5 after:flex-grow  after:border-t after:border-r  z-40 after:transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:leading-[4.7] peer-placeholder-shown:text-[#000000] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent  
                  peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-black-base  peer-focus:before:border-t-[2px] peer-focus:before:border-l-[2px] peer-focus:before:!border-[#61d17d] peer-focus:after:border-t-[2px] peer-focus:after:border-r-[2px] peer-focus:after:!border-[#61d17d] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#61d17d]"
                        >
                          Phone
                        </label>
                        <span className=" absolute right-2 cursor-pointer top-4">
                          <IoLockClosed className="text-[18px] font-normal" />
                        </span>
                      </div>
                    </div>

                    <div className="relative w-full  text-black-base max-w-full">
                      <input
                        {...register("email")}
                        type={`email`}
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
                      <span className=" absolute right-2 cursor-pointer top-4">
                        <IoLockClosed className="text-[18px] font-normal" />
                      </span>
                    </div>
                    {/* title  */}
                    <p className="text-[12px]">
                      To change the email address linked to your account you
                      need to contact{" "}
                      <Link href={"/"} className="text-primary-base">
                        {" "}
                        customer support
                      </Link>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="px-2 md:px-4 py-3  bg-white mt-3 rounded">
                <h1 className="text-[18px] pb-3 font-medium">Personal info</h1>
                <div className="grid grid-cols-2 gap-3  md:gap-4 items-start mt-3">
                  {/* Account  */}

                  <div className="relative w-full  text-black-base max-w-full">
                    <input
                      {...register("text")}
                      type={`text`}
                      className="w-full h-full pl-[14px] rounded overflow-hidden text-black-base pr-[30px] pt-[8px] pb-[18px] font-sans text-[14px] font-normal transition-all bg-transparent border  peer   text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] focus:border-[2px] focus:border-[#61d17d] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder
                    />
                    <label
                      className="before:content[' '] after:content[' '] !rounded overflow-hidden  text-black-base pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[14px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-2  before:box-border before:block before:h-1.5 before:w-2.5   before:transition-all 
                   after:mt-[6.5px] after:ml-2 after:box-border after:block after:h-1 after:w-2.5 after:flex-grow  after:border-t after:border-r  z-40 after:transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:leading-[4.7] peer-placeholder-shown:text-[#000000] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent  
                  peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-black-base  peer-focus:before:border-t-[2px] peer-focus:before:border-l-[2px] peer-focus:before:!border-[#61d17d] peer-focus:after:border-t-[2px] peer-focus:after:border-r-[2px] peer-focus:after:!border-[#61d17d] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#61d17d]"
                    >
                      Surname
                    </label>
                  </div>

                  <div className="relative w-full  text-black-base max-w-full">
                    <input
                      {...register("first-name")}
                      type={`first-name`}
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
                  {/* Registration date  */}
                  <div className="relative w-full  text-black-base max-w-full">
                    <input
                      {...register("date")}
                      type={`date`}
                      className="w-full h-full pl-[14px] rounded overflow-hidden text-black-base pr-[30px] pt-[8px] pb-[18px] font-sans text-[14px] font-normal transition-all bg-transparent border  peer   text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] focus:border-[2px] focus:border-[#61d17d] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder
                    />
                    <label
                      className="before:content[' '] after:content[' '] !rounded overflow-hidden  text-black-base pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[14px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-2  before:box-border before:block before:h-1.5 before:w-2.5   before:transition-all 
                   after:mt-[6.5px] after:ml-2 after:box-border after:block after:h-1 after:w-2.5 after:flex-grow  after:border-t after:border-r  z-40 after:transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:leading-[4.7] peer-placeholder-shown:text-[#000000] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent  
                  peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-black-base  peer-focus:before:border-t-[2px] peer-focus:before:border-l-[2px] peer-focus:before:!border-[#61d17d] peer-focus:after:border-t-[2px] peer-focus:after:border-r-[2px] peer-focus:after:!border-[#61d17d] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#61d17d]"
                    >
                      Registration date
                    </label>
                  </div>
                  {/* Place of birth  */}
                  <div className="relative w-full  text-black-base max-w-full">
                    <input
                      {...register("placeOfBirth")}
                      type={`text`}
                      className="w-full h-full pl-[14px] rounded overflow-hidden text-black-base pr-[30px] pt-[8px] pb-[18px] font-sans text-[14px] font-normal transition-all bg-transparent border  peer   text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] focus:border-[2px] focus:border-[#61d17d] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder
                    />
                    <label
                      className="before:content[' '] after:content[' '] !rounded overflow-hidden  text-black-base pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[14px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-2  before:box-border before:block before:h-1.5 before:w-2.5   before:transition-all 
                   after:mt-[6.5px] after:ml-2 after:box-border after:block after:h-1 after:w-2.5 after:flex-grow  after:border-t after:border-r  z-40 after:transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:leading-[4.7] peer-placeholder-shown:text-[#000000] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent  
                  peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-black-base  peer-focus:before:border-t-[2px] peer-focus:before:border-l-[2px] peer-focus:before:!border-[#61d17d] peer-focus:after:border-t-[2px] peer-focus:after:border-r-[2px] peer-focus:after:!border-[#61d17d] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#61d17d]"
                    >
                      Place of birth
                    </label>
                    <span className=" absolute right-2 cursor-pointer top-4">
                      <IoLockClosed className="text-[18px] font-normal" />
                    </span>
                  </div>
                  {/* Type of document  */}
                  <div className="relative w-full  text-black-base max-w-full">
                    <input
                      {...register("TypeOfDocument")}
                      type={`text`}
                      className="w-full h-full pl-[14px] rounded overflow-hidden text-black-base pr-[30px] pt-[8px] pb-[18px] font-sans text-[14px] font-normal transition-all bg-transparent border  peer   text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] focus:border-[2px] focus:border-[#61d17d] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder
                    />
                    <label
                      className="before:content[' '] after:content[' '] !rounded overflow-hidden  text-black-base pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[14px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-2  before:box-border before:block before:h-1.5 before:w-2.5   before:transition-all 
                   after:mt-[6.5px] after:ml-2 after:box-border after:block after:h-1 after:w-2.5 after:flex-grow  after:border-t after:border-r  z-40 after:transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:leading-[4.7] peer-placeholder-shown:text-[#000000] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent  
                  peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-black-base  peer-focus:before:border-t-[2px] peer-focus:before:border-l-[2px] peer-focus:before:!border-[#61d17d] peer-focus:after:border-t-[2px] peer-focus:after:border-r-[2px] peer-focus:after:!border-[#61d17d] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#61d17d]"
                    >
                      Type of document{" "}
                    </label>
                    <span className=" absolute right-2 cursor-pointer top-4">
                      <IoLockClosed className="text-[18px] font-normal" />
                    </span>
                  </div>
                  {/* Document number  */}
                  <div className="relative w-full  text-black-base max-w-full">
                    <input
                      {...register("documentNumber")}
                      type={`text`}
                      className="w-full h-full pl-[14px] rounded overflow-hidden text-black-base pr-[30px] pt-[8px] pb-[18px] font-sans text-[14px] font-normal transition-all bg-transparent border  peer   text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] focus:border-[2px] focus:border-[#61d17d] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder
                    />
                    <label
                      className="before:content[' '] after:content[' '] !rounded overflow-hidden  text-black-base pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[14px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-2  before:box-border before:block before:h-1.5 before:w-2.5   before:transition-all 
                   after:mt-[6.5px] after:ml-2 after:box-border after:block after:h-1 after:w-2.5 after:flex-grow  after:border-t after:border-r  z-40 after:transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:leading-[4.7] peer-placeholder-shown:text-[#000000] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent  
                  peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-black-base  peer-focus:before:border-t-[2px] peer-focus:before:border-l-[2px] peer-focus:before:!border-[#61d17d] peer-focus:after:border-t-[2px] peer-focus:after:border-r-[2px] peer-focus:after:!border-[#61d17d] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#61d17d]"
                    >
                      Document number
                    </label>
                  </div>
                  {/* Document issue date */}
                  <div className="relative w-full  text-black-base max-w-full">
                    <input
                      {...register("documentNumber")}
                      type={`text`}
                      className="w-full h-full pl-[14px] rounded overflow-hidden text-black-base pr-[30px] pt-[8px] pb-[18px] font-sans text-[14px] font-normal transition-all bg-transparent border  peer   text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] focus:border-[2px] focus:border-[#61d17d] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder
                    />
                    <label
                      className="before:content[' '] after:content[' '] !rounded overflow-hidden  text-black-base pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[14px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-2  before:box-border before:block before:h-1.5 before:w-2.5   before:transition-all 
                   after:mt-[6.5px] after:ml-2 after:box-border after:block after:h-1 after:w-2.5 after:flex-grow  after:border-t after:border-r  z-40 after:transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:leading-[4.7] peer-placeholder-shown:text-[#000000] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent  
                  peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-black-base  peer-focus:before:border-t-[2px] peer-focus:before:border-l-[2px] peer-focus:before:!border-[#61d17d] peer-focus:after:border-t-[2px] peer-focus:after:border-r-[2px] peer-focus:after:!border-[#61d17d] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#61d17d]"
                    >
                      Document issue date
                    </label>
                  </div>

                  {/* Document issue date */}
                  <div className="relative w-full  text-black-base max-w-full">
                    <input
                      {...register("country")}
                      type={`text`}
                      className="w-full h-full pl-[14px] rounded overflow-hidden text-black-base pr-[30px] pt-[8px] pb-[18px] font-sans text-[14px] font-normal transition-all bg-transparent border  peer   text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] focus:border-[2px] focus:border-[#61d17d] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder
                    />
                    <label
                      className="before:content[' '] after:content[' '] !rounded overflow-hidden  text-black-base pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[14px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-2  before:box-border before:block before:h-1.5 before:w-2.5   before:transition-all 
                   after:mt-[6.5px] after:ml-2 after:box-border after:block after:h-1 after:w-2.5 after:flex-grow  after:border-t after:border-r  z-40 after:transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:leading-[4.7] peer-placeholder-shown:text-[#000000] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent  
                  peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-black-base  peer-focus:before:border-t-[2px] peer-focus:before:border-l-[2px] peer-focus:before:!border-[#61d17d] peer-focus:after:border-t-[2px] peer-focus:after:border-r-[2px] peer-focus:after:!border-[#61d17d] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#61d17d]"
                    >
                      Bangladesh
                    </label>
                  </div>
                  {/* Permanent registered address  */}
                  <div className="relative w-full  text-black-base max-w-full">
                    <input
                      {...register("address")}
                      type={`text`}
                      className="w-full h-full pl-[14px] rounded overflow-hidden text-black-base pr-[30px] pt-[8px] pb-[18px] font-sans text-[14px] font-normal transition-all bg-transparent border  peer   text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-[#000000] placeholder-shown:border-t-[#000000] focus:border-[2px] focus:border-[#61d17d] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder
                    />
                    <label
                      className="before:content[' '] after:content[' '] !rounded overflow-hidden  text-black-base pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-[14px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-2  before:box-border before:block before:h-1.5 before:w-2.5   before:transition-all 
                   after:mt-[6.5px] after:ml-2 after:box-border after:block after:h-1 after:w-2.5 after:flex-grow  after:border-t after:border-r  z-40 after:transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:leading-[4.7] peer-placeholder-shown:text-[#000000] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent  
                  peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-black-base  peer-focus:before:border-t-[2px] peer-focus:before:border-l-[2px] peer-focus:before:!border-[#61d17d] peer-focus:after:border-t-[2px] peer-focus:after:border-r-[2px] peer-focus:after:!border-[#61d17d] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#61d17d]"
                    >
                      Permanent registered address
                    </label>
                  </div>
                </div>
                <div className="mt-3">
                  <button className="w-full rounded bg-button-base text-white text-center py-3  uppercase">
                    save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AccountForm;
