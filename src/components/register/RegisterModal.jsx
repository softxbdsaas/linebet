"use client";
import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { IoFootballOutline } from "react-icons/io5";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { SlClose } from "react-icons/sl";
import MultipleRegisterTab from "./MultipleRegisterTab";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { registerToggle } from "@/redux/features/registerSlice";
const RegisterModal = () => {
  const [bonusSelect, setBonusSelect] = useState("betting");
  const { registerModal } = useSelector((state) => state.registerModal);
  const dispatch = useDispatch();
  return (
    <>
      {registerModal ? (
        <Modal>
          <div className="flex items-start gap-1">
            {/* bonus level  */}
            <div className="-full sm:w-[350px]">
              <div className="rounded bg-white w-full sm:w-[350px] overflow-hidden space-y-1">
                {/* betting bonus  */}
                <div
                  onClick={() => setBonusSelect("betting")}
                  className={` ${
                    bonusSelect == "betting"
                      ? "bg-primary-base text-white"
                      : "text-primary-muted"
                  } p-2 sm:p-4  flex items-center justify-start gap-3 `}
                >
                  <div>
                    <IoFootballOutline className="text-[40px] sm:text-[60px] " />
                  </div>
                  <div>
                    <h1 className="text-[12px] md:text-[16px] font-semibold">
                      Bonus for sport betting{" "}
                    </h1>
                    <p className="text-[12px] md:text-[14px]">
                      Welcome bonus on year 1 st deposit up 13218 BDT
                    </p>
                  </div>
                </div>
                {/* betting  casino  */}
                <div
                  onClick={() => setBonusSelect("casino")}
                  className={` ${
                    bonusSelect == "casino"
                      ? "bg-primary-base text-white"
                      : "text-primary-muted"
                  } p-2 sm:p-4 flex items-center justify-start gap-3 `}
                >
                  <div>
                    <MdOutlineAppSettingsAlt className="text-[40px] sm:text-[60px]" />
                  </div>
                  <div>
                    <h1 className="text-[12px] md:text-[16px] font-semibold">
                      Casino + Games
                    </h1>
                    <p className="text-[12px] md:text-[14px]">
                      Welcome package up to
                    </p>
                    <p className="text-[12px] md:text-[14px]">
                      1231231 BDT + 234 FS
                    </p>
                  </div>
                </div>
                {/* betting  reject  */}
                <div
                  onClick={() => setBonusSelect("reject")}
                  className={` ${
                    bonusSelect == "reject"
                      ? "bg-primary-base text-white"
                      : "text-primary-muted"
                  } p-2 sm:p-4 flex items-center justify-start gap-3 `}
                >
                  <div>
                    <SlClose className=" text-[40px] sm:text-[60px] " />
                  </div>
                  <div>
                    <h1 className="text-[12px] md:text-[16px] font-semibold">
                      Reject bonuses
                    </h1>
                    <p className="text-[12px] md:text-[14px]">
                      Make your selection later{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Registration form  */}
            <div className="w-full max-w-[700px] relative">
              {/* close modal icons */}

              <div
                onClick={() => dispatch(registerToggle())}
                className=" text-black-base  hover:text-red-400  cursor-pointer duration-300 absolute right-2 top-2"
              >
                <IoClose className="text-[20px]" />
              </div>
              {/* register  box  */}
              <div className=" bg-white p-2  sm:p-4 rounded">
                <div>
                  <h1 className="text-[16px] md:text-[20px] py-2 uppercase text-center font-semibold text-[#000]">
                    Registration{" "}
                  </h1>
                </div>
                <MultipleRegisterTab />
                <div className=" pt-4 pb-10 text-black-base text-center">
                  <p className="text-[10px] md:text-[14px]">
                    By clicking the "Register" button, you confirm that you have
                    read and agree to the company's{" "}
                    <Link className="text-button-base" href={"/"}>
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link className="text-button-base" href={"/"}>
                      Privacy Policy
                    </Link>{" "}
                    and that you are of legal age
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default RegisterModal;
