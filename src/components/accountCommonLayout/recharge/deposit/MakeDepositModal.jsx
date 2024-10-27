"use client";
import { MySwal } from "@/components/ui/toast/SweetAlert";
import { useCreateDepositMutation } from "@/redux/api/paymentApi";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";

const MakeDepositModal = ({ activeModal, setActiveModal }) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm();
  const [createDeposit, { isLoading }] = useCreateDepositMutation();
  const onSubmit = async (data) => {
    try {
      const newData = {
        ...data,
        agent_id: activeModal?.agent_id,
        number: activeModal?.number,
        payment_method: activeModal?.name,
      };
      const res = await createDeposit(newData).unwrap();
      if (res?.status == true) {
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

  return (
    <div className=" max-w-[600px] md:min-w-[400px] relative  mx-auto bg-white text-black-base p-2 md:p-4 rounded ">
      <IoClose
        onClick={() => setActiveModal({})}
        className="text-[18px] absolute right-2 top-2 hover:text-danger-base cursor-pointer"
      />
      <div>
        <h1 className="text-bold text-sm  sm:text-base md:text-lg xl:text-xl text-center">
          {" "}
          Deposit Request
        </h1>

        <div>
          <div className=" bg-white mx-auto h-[80px] w-[120px]">
            <Image
              className="w-full h-[80px]  object-contain "
              width={120}
              height={120}
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/public/images/${activeModal?.photo}`}
              alt="image"
            ></Image>
          </div>

          <div>
            <p className="text-sm md:text-base">
              Payment method:
              <span className="ml-2 capitalize">
                {" "}
                {activeModal?.name}{" "}
              </span>{" "}
            </p>
            <p className="text-sm md:text-base">
              Deposit Number:
              <span className="ml-2"> {activeModal?.number} </span>{" "}
            </p>
          </div>
          <form action="" onSubmit={handleSubmit(onSubmit)} className="mt-5">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <h1 className="w-[150px]">Amount</h1>
                <div className="relative w-full text-black-base max-w-full">
                  <input
                    {...register("amount", {
                      required: "Amount is required",
                      pattern: {
                        value: /^[0-9]*$/, // Ensure only numbers are allowed
                        message: "Only numbers are allowed",
                      },
                    })}
                    type="text" // You can use "tel" if you want a numeric keypad on mobile
                    inputMode="numeric" // Ensures numeric keyboard on mobile devices
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
                <h1 className="w-[150px]"> Mobile </h1>
                <div className="relative w-full text-black-base max-w-full">
                  <input
                    {...register("sent_mobile", {
                      required: "mobile  number is required",
                      pattern: {
                        value: /^[0-9]*$/, // Ensure only numbers are allowed
                        message: "Only numbers are allowed",
                      },
                    })}
                    type="text" // You can use "tel" if you want a numeric keypad on mobile
                    inputMode="numeric" // Ensures numeric keyboard on mobile devices
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

              <div className=" flex items-start gap-3">
                <h1 className=" w-[150px]"> Transaction Id</h1>
                <div className="relative w-full  text-black-base max-w-full">
                  <input
                    {...register("txn_id", {
                      required: "transaction id is required",
                    })}
                    type="text"
                    className="w-full  outline-none border focus:border-light-base border-black-base px-2 placeholder:text-sm py-1 rounded"
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
