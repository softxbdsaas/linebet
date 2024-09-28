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
        <form action="" className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="text-black-base grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            <div>
              <div className="px-2 md:px-4 py-3  bg-white mt-3 rounded">
                <div className="mt-3">
                  <h1 className=" text-[14px]  md:text-[18px] pb-3 font-medium">
                    Account
                  </h1>
                  <div className=" space-y-6">
                    {/* Account  */}
                    <div>
                      <div className="relative w-full  text-black-base max-w-full">
                        <input
                          {...register("text")}
                          type={`text`}
                          className="peer global-input"
                          placeholder
                        />
                        <label className="global-label">Account number</label>
                        <span className=" absolute right-2 cursor-pointer top-4">
                          <IoLockClosed className="text-[18px] font-normal" />
                        </span>
                      </div>
                    </div>

                    <div className="relative w-full  text-black-base max-w-full">
                      <input
                        {...register("password")}
                        type={`text`}
                        className="peer global-input"
                        placeholder
                      />
                      <label className="global-label">Password</label>
                      <span className=" absolute right-2 cursor-pointer top-4">
                        <IoLockClosed className="text-[18px] font-normal" />
                      </span>
                    </div>
                    {/* Registration date  */}
                    <div className="relative w-full  text-black-base max-w-full">
                      <input
                        {...register("text")}
                        type={`text`}
                        className="peer global-input"
                        placeholder
                      />
                      <label className="global-label">Registration date</label>
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
                          className="peer global-input"
                          placeholder
                        />
                        <label className="global-label">Phone</label>
                        <span className=" absolute right-2 cursor-pointer top-4">
                          <IoLockClosed className="text-[18px] font-normal" />
                        </span>
                      </div>
                    </div>

                    <div className="relative w-full  text-black-base max-w-full">
                      <input
                        {...register("email")}
                        type={`email`}
                        className="peer global-input"
                      />
                      <label className="global-label">Email</label>
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
                <div className="grid  grid-cols-1 sm:grid-cols-2 gap-3  md:gap-4 items-start mt-3">
                  {/* Account  */}

                  <div className="relative w-full  text-black-base max-w-full">
                    <input
                      {...register("text")}
                      type={`text`}
                      className="peer global-input"
                    />
                    <label className="global-label">Surname</label>
                  </div>

                  <div className="relative w-full  text-black-base max-w-full">
                    <input
                      {...register("first-name")}
                      type={`first-name`}
                      className="peer global-input"
                      placeholder
                    />
                    <label className="global-label">First name</label>
                  </div>
                  {/* Registration date  */}
                  <div className="relative w-full  text-black-base max-w-full">
                    <input
                      {...register("date")}
                      type={`date`}
                      className="peer global-input"
                      placeholder
                    />
                    <label className="global-label">Registration date</label>
                  </div>
                  {/* Place of birth  */}
                  <div className="relative w-full  text-black-base max-w-full">
                    <input
                      {...register("placeOfBirth")}
                      type={`text`}
                      className="peer global-input"
                      placeholder
                    />
                    <label className="global-label">Place of birth</label>
                    <span className=" absolute right-2 cursor-pointer top-4">
                      <IoLockClosed className="text-[18px] font-normal" />
                    </span>
                  </div>
                  {/* Type of document  */}
                  <div className="relative w-full  text-black-base max-w-full">
                    <input
                      {...register("TypeOfDocument")}
                      type={`text`}
                      className="peer global-input"
                      placeholder
                    />
                    <label className="global-label">Type of document </label>
                    <span className=" absolute right-2 cursor-pointer top-4">
                      <IoLockClosed className="text-[18px] font-normal" />
                    </span>
                  </div>
                  {/* Document number  */}
                  <div className="relative w-full  text-black-base max-w-full">
                    <input
                      {...register("documentNumber")}
                      type={`text`}
                      className="peer global-input"
                      placeholder
                    />
                    <label className="global-label">Document number</label>
                  </div>
                  {/* Document issue date */}
                  <div className="relative w-full  text-black-base max-w-full">
                    <input
                      {...register("documentNumber")}
                      type={`text`}
                      className="peer global-input"
                      placeholder
                    />
                    <label className="global-label">Document issue date</label>
                  </div>

                  {/* Document issue date */}
                  <div className="relative w-full  text-black-base max-w-full">
                    <input
                      {...register("country")}
                      type={`text`}
                      className="peer global-input"
                      placeholder
                    />
                    <label className="global-label">Bangladesh</label>
                  </div>
                  {/* Permanent registered address  */}
                  <div className="relative w-full  text-black-base max-w-full">
                    <input
                      {...register("address")}
                      type={`text`}
                      className="peer global-input"
                      placeholder
                    />
                    <label className="global-label">
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
