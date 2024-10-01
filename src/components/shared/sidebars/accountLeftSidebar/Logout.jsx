"use client";
import { MySwal } from "@/components/ui/toast/SweetAlert";
import { authKey } from "@/constants/authKey";
import { Sign_in_out } from "@/redux/features/authSlice";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React from "react";
import { HiLogout } from "react-icons/hi";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const Logout = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const logoutUser = async () => {
    // Trigger a SweetAlert confirmation before logging out
    const result = await MySwal.fire({
      title: "Are you sure?",
      text: "You will be logged out.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    });

    if (result.isConfirmed) {
      try {
        // Remove the cookie

        // Clear the user information from Redux
        Cookies.remove(authKey);
        dispatch(Sign_in_out());
        // Notify success using SweetAlert
        await Swal.fire({
          title: "Success",
          text: "Logout success",
          icon: "success",
          confirmButtonText: "Ok",
        });

        // Ensure everything is cleared before redirecting
        window.location.replace("/");
      } catch (error) {
        // Handle error if logout fails
        await Swal.fire({
          title: "Error",
          text: "Something went wrong during logout.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    }
  };

  return (
    <div
      onClick={logoutUser}
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
