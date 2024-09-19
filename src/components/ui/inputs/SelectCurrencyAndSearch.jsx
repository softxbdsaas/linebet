"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { currencyData } from "../../../../public/database/currencyDB";
const SelectCurrencyAndSearch = ({selectCurrency, setSelectCurrency}) => {
  const currencyAllData = currencyData;
  const [activeCurrency, setActiveCurrency] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
 
  
  //  search country
  const filteredCurrency = currencyAllData?.filter((option) =>
    option?.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  useEffect(() => {
    if (currencyAllData?.length && !selectCurrency) {
      const activeCurrency = currencyAllData?.[0];
      setSelectCurrency(activeCurrency);
    }
  }, [currencyAllData, selectCurrency,setSelectCurrency]);

  return (
    <div className="w-full relative">
      <div>
        <div
          onClick={() => setActiveCurrency(!activeCurrency)}
          className={` ${
            activeCurrency
              ? "border-2  border-active-base "
              : "border border-black-base"
          }   flex justify-between cursor-pointer  rounded py-[3px]`}
        >
          {/* active   search country input filed   */}
          {activeCurrency ? (
            <div className="px-2 mt-[6px]">
              <input
                type="text"
                onChange={(e) => setSearchQuery(e.target.value)}
                className="outline-none text-black-base border-none"
                autoFocus={true}
              />
            </div>
          ) : (
            <div className="flex text-black-base items-center gap-2 py-2 px-3">
              <p className=" capitalize text-[14px] font-normal">
                {selectCurrency?.name} {"  "} {`(${selectCurrency?.currency} )`}
              </p>
            </div>
          )}

          <div className=" text-black-base py-2 px-3">
            <IoIosArrowUp
              className={`${
                activeCurrency ? "" : "rotate-180"
              }   text-colo duration-500`}
              size={20}
            />
          </div>

          {/* select title  */}
          <p className="text-[10px] md:text-[12px] font-normal text-black-base absolute -top-2 left-2 bg-white  px-2  z-20">
            {" "}
            Select Currency
          </p>
        </div>
        {/* active country menu  */}
        {activeCurrency ? (
          <div className="max-h-[300px] absolute w-full z-50 top-12 overflow-x-auto bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded selectBarScroll py-3">
            <ul>
              {filteredCurrency?.map((item, index) => (
                <li
                  key={index}
                  onClick={() => (
                    setSelectCurrency(item), setActiveCurrency(!activeCurrency)
                  )}
                  className={`  border-b border-[#d8e8d4] hover:bg-light-muted cursor-pointer duration-300`}
                >
                  <div className="flex text-black-base items-center gap-2 py-2 px-3">
                    <p className=" capitalize text-[14px] font-normal">
                      {item?.name} {"  "} {`(${item?.currency} )`}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SelectCurrencyAndSearch;
