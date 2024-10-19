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
import { useDispatch } from "react-redux";
import { userInfo } from "@/redux/features/authSlice";
import ChangePasswordModal from "./ChangePassword";
import { MdEdit } from "react-icons/md";

const AccountForm = () => {
  const [activePassword, setActivePassword] = useState(false);
  const { data: userInfoData } = useGetUserInfoQuery();
  const [activeModal, setActiveModal] = useState(false);

  const dispatch = useDispatch();
  const [frontend, setFrontend] = useState(
    userInfoData?.data?.nid_frontend_image
      ? userInfoData?.data?.nid_frontend_image
      : "https://archive.org/download/placeholder-image/placeholder-image.jpg"
  );
  const [indBackend, setIndBackend] = useState(
    userInfoData?.data?.nid_backend_image
      ? userInfoData?.data?.nid_backend_image
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
        phone_number: data.phone_number,
        email: data?.email,
        address: data?.address,
        nid_frontend_image: frontend,
        nid_backend_image: indBackend,
        date_of_birth: data?.date_of_birth,
        identity_number: data?.identity_number,
        name: data?.firstName + " " + data?.lastName,
        country: data?.country,
      };

      const res = await updateProfile(newData).unwrap();
      if (res?.status == true) {
        dispatch(userInfo(res?.data));
        Swal.fire({
          title: "Success",
          text: res?.message,
          icon: "success",
          confirmButtonText: "Okay",
        });
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
    if (userInfoData) {
      setValue("userName", userInfoData?.data?.user_name);
      setValue("phone_number", userInfoData?.data?.phone_number);
      setValue("email", userInfoData?.data?.email);
      setValue("firstName", userInfoData?.data?.name?.split(" ")[0]);
      setValue("lastName", userInfoData?.data?.name?.split(" ")[1]);
      if (userInfoData?.data?.created_at) {
        const formattedDate = new Date(userInfoData.data.created_at)
          .toISOString()
          .split("T")[0];
        setValue("created_at", formattedDate);
      }
      setValue("identity_number", userInfoData?.data?.identity_number);
      setValue("address", userInfoData?.data?.address);
      setValue("country", userInfoData?.data?.country);
      if (userInfoData?.data?.date_of_birth) {
        const formattedDate = new Date(userInfoData?.data?.date_of_birth)
          .toISOString()
          .split("T")[0];
        setValue("date_of_birth", formattedDate);
      }
      if (userInfoData?.data?.nid_frontend_image) {
        setFrontend(userInfoData?.data?.nid_frontend_image);
      }
      if (userInfoData?.data?.nid_backend_image) {
        setIndBackend(userInfoData?.data?.nid_backend_image);
      }
    }
  }, [userInfoData, setValue]);

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
                          readOnly={true}
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
                        className="global-input"
                        value={23423423}
                        placeholder
                      />
                      <label className="global-label">Password</label>
                      <span
                        onClick={() => setActiveModal(!activeModal)}
                        className=" absolute right-2 cursor-pointer top-4"
                      >
                        <MdEdit className="text-[18px] font-normal" />
                      </span>
                    </div>
                    {/* Registration date  */}
                    <div className="relative w-full  text-black-base max-w-full">
                      <input
                        type="date"
                        readOnly={true}
                        {...register("created_at")}
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
                          {...register("phone_number", {
                            required: "Please enter a phone number",
                          })}
                          type={`text`}
                          readOnly={userInfoData?.data?.phone_number}
                          className="peer global-input"
                          placeholder
                        />
                        <label className="global-label">Phone</label>
                        <span className=" absolute right-2 cursor-pointer top-4">
                          <IoLockClosed className="text-[18px] font-normal" />
                        </span>
                      </div>
                      {errors.phone_number && (
                        <p className="text-red-600 text-[12px]">
                          {errors.phone_number.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <div className="relative w-full  text-black-base max-w-full">
                        <input
                          {...register("email", {
                            required: "Please enter a valid email address",
                            pattern:
                              /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                            message: "Please enter a valid email address",
                          })}
                          type={`email`}
                          readOnly={userInfoData?.data?.email}
                          className="peer global-input"
                        />
                        <label className="global-label">Email</label>
                        <span className=" absolute right-2 cursor-pointer top-4">
                          <IoLockClosed className="text-[18px] font-normal" />
                        </span>
                      </div>
                      {errors.email && (
                        <p className="text-red-600 text-[12px]">
                          {errors.email.message}
                        </p>
                      )}
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
                      {...register("firstName")}
                      type={`text`}
                      className="peer global-input"
                    />
                    <label className="global-label">First Name</label>
                  </div>

                  <div className="relative w-full  text-black-base max-w-full">
                    <input
                      {...register("lastName")}
                      type={`lastName`}
                      className="peer global-input"
                      placeholder
                    />
                    <label className="global-label">Last name</label>
                  </div>

                  {/* Place of birth  */}
                  <div className="relative w-full text-black-base max-w-full">
                    <input
                      {...register("date_of_birth")}
                      type="date"
                      className="peer global-input"
                      placeholder="YYYY-MM-DD"
                    />
                    <label className="global-label">Date of birth</label>
                  </div>

                  {/* Type of document  */}
                  {/* <div className="relative w-full  text-black-base max-w-full">
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
                  </div> */}
                  {/* Document number  */}
                  {/* <div className="relative w-full  text-black-base max-w-full">
                    <input
                      {...register("documentNumber")}
                      type={`text`}
                      className="peer global-input"
                      placeholder
                    />
                    <label className="global-label">Document number</label>
                  </div> */}

                  {/* Document issue date */}
                  <div className="relative w-full  text-black-base max-w-full">
                    <input
                      {...register("country")}
                      type={`text`}
                      className="peer global-input"
                      placeholder
                    />
                    <label className="global-label">Country Name</label>
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
                  <div className="relative w-full text-black-base max-w-full">
                    <input
                      {...register("identity_number", {
                        required: "NID Number is required",
                        pattern: {
                          value: /^[0-9]*$/,
                          message: "Only numbers are allowed",
                        },
                      })}
                      type="text"
                      className="peer global-input"
                      placeholder=""
                    />
                    <label className="global-label">NID Number</label>

                    {errors.identity_number && (
                      <p className="text-red-500 text-[12px]">
                        {errors.identity_number.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className=" py-3">
                  <label className="text-[14px] font-medium">
                    NID Frontend
                  </label>
                  <UploadNIDImage
                    profileImageUrl={frontend}
                    setProfileImageUrl={setFrontend}
                  />
                </div>
                <div className=" py-3">
                  <label className="text-[14px] font-medium">NID Backend</label>
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

          {/* animation input field  */}
        </form>

        <ChangePasswordModal
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
      </div>
    </>
  );
};

export default AccountForm;
