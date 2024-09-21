"use client";
import { MySwal } from "@/components/ui/toast/SweetAlert";
import { userInfo } from "@/redux/features/authSlice";
import React from "react";
import { HiLogout } from "react-icons/hi";
import { useDispatch } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();

  const logout = () => {
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
        // Perform logout action

        dispatch(userInfo()); // Reset user info in Redux
        MySwal.fire(
          "Logged Out",
          "You have been successfully logged out.",
          "success"
        );
        window.location.reload("/");
      }
    });
  };

  return (
    <div
      onClick={logout}
      className="shadow py-2 flex items-center bg-light-base mx-2 rounded-[10px] mt-20 justify-center gap-1 cursor-pointer"
    >
      <HiLogout className="text-[16px]" />
      <p className="text-white font-medium">Log out</p>
    </div>
  );
};

export default Logout;
