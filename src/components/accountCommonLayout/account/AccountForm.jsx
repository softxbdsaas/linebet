"use client";
import {
  useGetUserInfoQuery,
  useUpdateProfileMutation,
} from "@/redux/api/authApi";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoLockClosed } from "react-icons/io5";
import UploadNIDImage from "./UploadNIDImage";
import Swal from "sweetalert2";

const AccountForm = () => {
  const [activePassword, setActivePassword] = useState(false);
  const { data: userInfo } = useGetUserInfoQuery();
  console.log(userInfo);
  const [frontend, setFrontend] = useState(
    userInfo?.data?.profileURL
      ? userInfo?.data?.INDFrontendImage
      : "https://archive.org/download/placeholder-image/placeholder-image.jpg"
  );
  const [indBackend, setIndBackend] = useState(
    userInfo?.data?.profileURL
      ? userInfo?.data?.INDBackendImage
      : "https://archive.org/download/placeholder-image/placeholder-image.jpg"
  );
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const newData = {
        userName: data.userName,
        phoneNumber: data.phoneNumber,
        email: data?.email,
        address: data?.address,
        INDFrontendImage: frontend,
        INDBackendImage: indBackend,
        dateOfBirth: data?.dateOfBirth,
        identityNumber: data?.identityNumber,
        name: data?.firstName,
        country: data?.country,
      };

      const res = await updateProfile(newData).unwrap();
      if (res?.status == true) {
        Swal.fire({
          title: "Success",
          text: res?.message,
          icon: "success",
          confirmButtonText: "Okay",
        });
        setValue("userName", data.userName);
        setValue("phoneNumber", data.phoneNumber);
        setValue("email", data?.email);
        setValue("email", data?.email);
        setValue("firstName", data?.firstName);
        setValue("createAt", data?.createAt);
        setValue("address", data?.address);
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message || "Something went wrong!",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  useEffect(() => {
    if (userInfo) {
      setValue("userName", userInfo?.data?.userName);
      setValue("phoneNumber", userInfo?.data?.phoneNumber);
      setValue("email", userInfo?.data?.email);
      setValue("email", userInfo?.data?.email);
      setValue("firstName", userInfo?.data?.name);
      setValue("createAt", userInfo?.data?.createAt);
      setValue("identityNumber", userInfo?.data?.identityNumber);
      setValue("address", userInfo?.data?.address);
      setValue("dateOfBirth", userInfo?.data?.dateOfBirth);
      setFrontend(userInfo?.data?.INDFrontendImage);
      setIndBackend(userInfo?.data?.INDBackendImage);
    }
  }, [userInfo, setValue]);

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
                          {...register("userName")}
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
                        type={`password`}
                        className="peer global-input"
                        value={23423423}
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
                        {...register("createAt")}
                        type={`date`}
                        className="peer global-input"
                        placeholder
                      />
                      <label className="global-label">Registration date</label>
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
                          {...register("phoneNumber", {
                            required: "Please enter a phone number",
                          })}
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
                        {...register("email", {
                          required: "Please enter a valid email address",
                          pattern:
                            /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                          message: "Please enter a valid email address",
                        })}
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
                      {...register("firstName")}
                      type={`firstName`}
                      className="peer global-input"
                      placeholder
                    />
                    <label className="global-label">First name</label>
                  </div>

                  {/* Place of birth  */}
                  <div className="relative w-full  text-black-base max-w-full">
                    <input
                      {...register("dateOfBirth")}
                      type={`date`}
                      className="peer global-input"
                      placeholder
                    />
                    <label className="global-label">Place of birth</label>
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
                  <div className="relative w-full  text-black-base max-w-full">
                    <input
                      {...register("identityNumber")}
                      type={`text`}
                      className="peer global-input"
                      placeholder
                    />
                    <label className="global-label">NID Number</label>
                  </div>
                </div>

                <div className=" py-3">
                  <label className="text-[14px] font-medium">
                    IND Frontend
                  </label>
                  <UploadNIDImage
                    profileImageUrl={frontend}
                    setProfileImageUrl={setFrontend}
                  />
                </div>
                <div className=" py-3">
                  <label className="text-[14px] font-medium">IND Backend</label>
                  <UploadNIDImage
                    profileImageUrl={indBackend}
                    setProfileImageUrl={setIndBackend}
                  />
                </div>
                <div className="mt-3">
                  <button
                    disabled={isLoading}
                    className="w-full rounded bg-button-base text-white text-center py-3  uppercase"
                  >
                    {isLoading ? " Loading.." : "Save"}
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
