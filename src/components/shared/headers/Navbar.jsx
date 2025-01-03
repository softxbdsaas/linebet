"use client";
import React, { useEffect } from "react";
import logo from "../../../../public/assets/mybet.png";
import Image from "next/image";
import NavFeatureItems from "./NavFeatureItems";
import NavbarRightSite from "./NavbarRightSite";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "@/redux/features/authSlice";
import { useGetUserInfoQuery } from "@/redux/api/authApi";
import Cookies from "js-cookie";
import { authKey } from "@/constants/authKey";
import OnClickRegisterModal from "@/components/register/OnClickRegisterModal";
const Navbar = () => {
  const { betterInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { data: userInfoData, error } = useGetUserInfoQuery();
  const accessToken = Cookies.get(authKey);
  useEffect(() => {
    const loginUser = async () => {
      if (userInfoData && !betterInfo?.userName && accessToken) {
        const newData = userInfoData?.data?.user;
        dispatch(userInfo(newData));
      }
    };
    loginUser();
  }, [userInfoData, dispatch, betterInfo, accessToken]);

  return (
    <div className="py-2 sticky top-0 w-full z-[200] px-1 md:px-2 bg-[#1A5684]">
      <div className="flex justify-between items-center gap-3">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-8">
            <Image
              className="w-[80px] md:w-[102px] lg:w-[150px] "
              src={logo}
              width={102}
              height={32}
              alt="logo"
              layout="responsive"
            />
          </Link>
          {/* NavFeatureItems */}
          <div className="hidden md:block">
            <NavFeatureItems />
          </div>
        </div>
        <div>
          <NavbarRightSite />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
