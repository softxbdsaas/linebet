"use client";
import { MySwal } from "@/components/ui/toast/SweetAlert";
import { useCreateDepositMutation } from "@/redux/api/paymentApi";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { FaRegCopy } from "react-icons/fa6";
import { useGetUserInfoQuery } from "@/redux/api/authApi";

const MakeDepositModal = ({ activeModal, setActiveModal }) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm();
  const [createDeposit, { isLoading }] = useCreateDepositMutation();
  const { data: userInfoData } = useGetUserInfoQuery();

  const onSubmit = async (data) => {
    try {
      if (
        !userInfoData?.data?.user?.email &&
        !userInfoData?.data?.user?.phone_number
      ) {
        MySwal.fire(
          "Error!",
          "You need to have either an email or a phone number on your account to make a deposit request.",
          "error"
        );
        window.location.replace("/office/account");
        return;
      }

      const newData = {
        ...data,
        agent_id: activeModal?.agent_id,
        number: activeModal?.number,
        payment_method: activeModal?.name,
      };
      const res = await createDeposit(newData).unwrap();
      if (res?.status === true) {
        MySwal.fire("Submitted!", "Deposit Request successfully", "success");
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

  const handleCopyNumber = () => {
    if (activeModal?.number) {
      navigator.clipboard.writeText(activeModal.number);
      MySwal.fire("Copied!", "Copy Success", "success");
    }
  };

  return (
    <div className="max-w-[400px] md:min-w-[400px] relative mx-auto bg-white text-black-base p-2 md:p-4 rounded">
      <IoClose
        onClick={() => setActiveModal({})}
        className="text-[18px] absolute right-2 top-2 hover:text-danger-base cursor-pointer"
      />
      <div>
        <h1 className="text-bold text-sm sm:text-base md:text-lg xl:text-xl text-center">
          Deposit Request
        </h1>

        <div>
          <div className="bg-white mx-auto h-[80px] w-[120px]">
            <Image
              className="w-full h-[80px] object-contain"
              width={120}
              height={120}
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/public/images/${activeModal?.photo}`}
              alt="image"
            />
          </div>

          <div>
            <div className="mb-2 bg-light-muted px-2 rounded py-1">
              <p>
                Before making a request, please transfer funds within 10 minutes
                using the payment details specified below.
              </p>
            </div>
            <p className="text-sm md:text-base">
              Payment method:
              <span className="ml-2 capitalize">{activeModal?.name}</span>
            </p>
            <div className="text-sm md:text-base flex items-center gap-1">
              Deposit Number:
              <p className="flex items-center gap-3">
                <span className="ml-2">{activeModal?.number}</span>
                <FaRegCopy
                  className="text-base cursor-pointer text-light-base"
                  onClick={handleCopyNumber}
                />
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <h1 className="w-[150px]">Amount</h1>
                <div className="relative w-full text-black-base max-w-full">
                  <input
                    {...register("amount", {
                      required: "Amount is required",
                      pattern: {
                        value: /^[0-9]*$/,
                        message: "Only numbers are allowed",
                      },
                    })}
                    type="text"
                    inputMode="numeric"
                    className="w-full outline-none border focus:border-light-base border-black-base px-2 placeholder:text-sm py-1 rounded"
                    placeholder="300"
                  />
                  {errors.amount && (
                    <p className="text-red-500 text-[12px]">
                      {errors.amount.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <h1 className="w-[150px]">Mobile</h1>
                <div className="relative w-full text-black-base max-w-full">
                  <input
                    {...register("sent_mobile", {
                      required: "Mobile number is required",
                      pattern: {
                        value: /^[0-9]*$/,
                        message: "Only numbers are allowed",
                      },
                    })}
                    type="text"
                    inputMode="numeric"
                    className="w-full outline-none border focus:border-light-base border-black-base px-2 placeholder:text-sm py-1 rounded"
                    placeholder="01723XXXXXX"
                  />
                  {errors.sent_mobile && (
                    <p className="text-red-500 text-[12px]">
                      {errors.sent_mobile.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <h1 className="w-[150px]">Transaction ID</h1>
                <div className="relative w-full text-black-base max-w-full">
                  <input
                    {...register("txn_id", {
                      required: "Transaction ID is required",
                    })}
                    type="text"
                    className="w-full outline-none border focus:border-light-base border-black-base px-2 placeholder:text-sm py-1 rounded"
                    placeholder="234234234562"
                  />
                  {errors.txn_id && (
                    <p className="text-red-500 text-[12px]">
                      {errors.txn_id.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white bg-primary-base uppercase rounded hover:bg-light-base focus:outline-none focus:bg-green-600"
                >
                  {isLoading ? "Loading..." : "Confirm"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeDepositModal;
W