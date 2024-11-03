"use client";
import { MySwal } from "@/components/ui/toast/SweetAlert";
import { useGetBetterBalanceQuery } from "@/redux/api/authApi";
import { useGetWelcomeBonusHistoryQuery } from "@/redux/api/bonusApi";
import {
  useCreateWithdrawMutation,
  useGetAllPendingWithdrawRequestBySingleBetterQuery,
  useGetLockWithdrawQuery,
} from "@/redux/api/withdrawalsApi";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";

const MakeWithdrawals = ({ activeModal, setActiveModal }) => {
  const { data: withdrawLockBalance } = useGetLockWithdrawQuery();
  const { data: betterBalance } = useGetBetterBalanceQuery();
  const { data: welcomeBonusHistory } = useGetWelcomeBonusHistoryQuery();
  const { data: pendingWithdrawRequest } =
    useGetAllPendingWithdrawRequestBySingleBetterQuery();

  const availableBalance = betterBalance?.data
    ? betterBalance?.data?.balance -
      withdrawLockBalance?.data?.amount -
      pendingWithdrawRequest?.data
    : 0;

  const {
    formState: { errors },
    handleSubmit,
    register,
    setError, // To trigger custom errors
  } = useForm();
  const [createWithdraw, { isLoading }] = useCreateWithdrawMutation();

  const onSubmit = async (data) => {
    const withdrawAmount = parseFloat(data.amount);
    if (withdrawAmount > availableBalance) {
      setError("amount", {
        type: "manual",
        message: `Insufficient balance  max withdraw ${availableBalance}`,
      });
      return;
    }

    try {
      const newData = {
        ...data,
        status: 0,
        agent_by: activeModal?.agent_id,
        number: activeModal?.number,
        payment_method: activeModal?.name,
      };
      console.log(newData);

      const res = await createWithdraw(newData).unwrap();
      console.log(res);
      if (res?.status == true) {
        MySwal.fire("Submitted!", "withdraw Request successfully", "success");
        setActiveModal({});
      } else {
        MySwal.fire("Error!", res?.message, "error");
      }
    } catch (error) {
      MySwal.fire(
        "Error!",
        "Something went wrong during form submission.",
        "error"
      );
    }
  };

  console.log(availableBalance);

  return (
    <div className="max-w-[400px] md:min-w-[400px] relative sm:mx-auto bg-white text-black-base p-2 md:p-4 rounded mx-2">
      <IoClose
        onClick={() => setActiveModal({})}
        className="text-[18px] absolute right-2 top-2 hover:text-danger-base cursor-pointer"
      />
      <div>
        <h1 className="text-bold text-sm sm:text-base md:text-lg xl:text-xl text-center">
          Withdraw Request
        </h1>

        <div className="bg-white mx-auto h-[80px] w-[120px]">
          <Image
            className="w-full h-[80px] object-contain"
            width={120}
            height={120}
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/public/images/${activeModal?.photo}`}
            alt="image"
          />
        </div>
        <div className="mb-2 bg-light-muted px-2 rounded py-1">
          <p>
            Before making a request, please transfer funds within 10 minutes
            using the payment details specified below.
          </p>
        </div>
        <p className="text-xs sm:text-sm md:text-base">
          Received Payment Method:
          <span className="ml-2 capitalize">{activeModal?.name}</span>
        </p>
        <p className="text-xs sm:text-sm md:text-base">
          Withdraw Range: (
          <span className="text-danger-base">
            {withdrawLockBalance?.data?.min}
          </span>{" "}
          -{" "}
          <span className="text-danger-base">
            {withdrawLockBalance?.data?.max}
          </span>{" "}
          ) TK
        </p>
        <p className="text-xs sm:text-sm md:text-base">
          Available Balance:
          <span className="text-active-base"> {availableBalance}</span> TK
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h1 className="w-[100px]  sm:w-[150px] text-sm md:text-base">
                Amount
              </h1>
              <div className="relative w-full text-black-base max-w-full">
                <input
                  {...register("amount", {
                    required: "Amount is required",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Only numbers are allowed",
                    },
                  })}
                  type="number"
                  inputMode="numeric"
                  className="w-full outline-none text-sm border focus:border-light-base border-black-base px-2 placeholder:text-sm py-2 rounded"
                  placeholder={` ${withdrawLockBalance?.data?.min} - ${withdrawLockBalance?.data?.max}`}
                />
                {errors.amount && (
                  <p className="text-red-500 text-[12px]">
                    {errors.amount.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <h1 className="w-[100px]  sm:w-[150px] text-sm md:text-base">
                Received Number
              </h1>
              <div className="relative w-full text-black-base max-w-full">
                <input
                  {...register("number", {
                    required: "Number is required",
                  })}
                  type="text"
                  className="w-full outline-none text-sm   border focus:border-light-base border-black-base px-2 placeholder:text-sm py-2 rounded"
                  placeholder="01611XXXXX"
                />
                {errors.number && (
                  <p className="text-red-500 text-[12px]">
                    {errors.number.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={isLoading || availableBalance <= 0}
                className="w-full px-4 py-2 text-sm md:text-base text-white bg-primary-base uppercase rounded hover:bg-light-base focus:outline-none focus:bg-green-600"
              >
                {isLoading ? "Loading..." : "Confirm"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakeWithdrawals;
