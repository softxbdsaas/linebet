"use client";
import { mobileMenuToggle } from "@/redux/features/mobileMenuSlice";
import Link from "next/link";
import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { FaChevronRight } from "react-icons/fa";
import { useDispatch } from "react-redux";

const MobileMenuCard = ({ item }) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <div className=" border-b border-light py-[2px]">
        <div>
          {/* If there is a subcategory then it will be rendered */}
          {item?.sub?.length > 0 ? (
            <>
              {" "}
              <div
                onClick={() => setActive(!active)}
                className=" flex items-center cursor-pointer justify-between gap-3 rounded-lg p-2 text-body-5 md:text-body-4 font-normal text-metal-900 hover:bg-metal-100"
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="h-5 w-5 flex-shrink-0 ">{item.Icon}</span>
                  <button className="flex-1 capitalize whitespace-nowrap text-[12px] font-medium">
                    {item?.name}
                  </button>
                </div>
                <div>
                  <FaChevronRight
                    className={`${
                      active ? "rotate-90 duration-500" : ""
                    } duration-500  text-[12px]  `}
                  />
                </div>
              </div>
              {/* collapse animation use  */}
              <Collapse isOpened={active}>
                {/* sub category  */}
                {active ? (
                  <>
                    {item?.sub?.map((item, index) => (
                      <div key={index} className=" py-1 ml-5">
                        <div className="flex items-center justify-center gap-2 rounded-lg p-2 text-body-5 md:text-body-4 font-normal text-metal-900 hover:bg-metal-100">
                          <div>
                            <p className="h-[6px] w-[6px] block bg-[#000] rounded-full"></p>
                          </div>
                          <Link
                            className="flex-1 text-[12px] font-medium   capitalize whitespace-nowrap"
                            href={item?.path}
                          >
                            {item?.name}
                          </Link>
                        </div>
                      </div>
                    ))}
                  </>
                ) : null}
              </Collapse>
            </>
          ) : (
            <div className=" flex items-center justify-center gap-2 rounded-lg p-2 ">
              <span className="h-5 w-5 flex-shrink-0 text-metal-500 transition duration-75">
                {item.Icon}
              </span>
              <Link
                onClick={() => dispatch(mobileMenuToggle())}
                className=" flex-1 capitalize whitespace-nowrap text-[12px] font-medium"
                href={item?.path}
              >
                {item?.name}
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileMenuCard;
