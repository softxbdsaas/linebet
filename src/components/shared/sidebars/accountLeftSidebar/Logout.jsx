"use client";
import { MySwal } from "@/components/ui/toast/SweetAlert";
import { authKey } from "@/constants/authKey";
import { userInfo } from "@/redux/features/authSlice";
import { removeCookie } from "@/utils/cookies-info";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React from "react";
import { HiLogout } from "react-icons/hi";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const Logout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const logout = async () => {
    // Trigger a SweetAlert confirmation before logging out
    MySwal.fire({
      title: "Are you sure?",
      text: "You will be logged out.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeCookie("access-token");
        dispatch(userInfo());
        window.location.replace("/");
        Swal.fire({
          title: "success",
          text: "Logout success",
          icon: "success",
          confirmButtonText: "ok",
        });
      }
    });
  };

  return (
    <div
      onClick={logout}
      className="shadow py-2 flex items-center bg-light-base mx-2 rounded-[10px] mt-20 justify-center gap-1 cursor-pointer"
    >
      <HiLogout className="text-[16px]" />
      <p className="text-white text-[14px] md:text-[18px] font-medium">
        Log out
      </p>
    </div>
  );
};

export default Logout;
