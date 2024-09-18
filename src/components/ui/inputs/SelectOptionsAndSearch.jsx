import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const SelectOptionsAndSearch = () => {
  const [activeCountry, setActiveCountry] = useState(false);
  const [selectCountry, setSelectCountry] = useState();
  const [allCountry, setAllCountry] = useState([]);
  const CountryData = async (value) => {
    try {
      const response = await fetch(
        `https://dejavu.lifestyle/api/search-country`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: value }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setAllCountry(result?.countries);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  //  search country
  const handleChange = (event) => {
    const value = event.target.value;
    CountryData(value);
  };

  useEffect(() => {
    if (allCountry?.length && !selectCountry) {
      const activeCountry = allCountry?.[0];
      setSelectCountry(activeCountry);
    }
    if (!allCountry?.length) {
      const value = "";
      CountryData(value);
    }
  }, [allCountry, selectCountry]);

  return (
    <div className="w-full relative">
      <div>
        <div
          onClick={() => setActiveCountry(!activeCountry)}
          className={` ${
            activeCountry
              ? "border-2  border-active-base "
              : "border border-black-base"
          }   flex justify-between cursor-pointer  rounded py-[3px]`}
        >
          {/* active   search country input filed   */}
          {activeCountry ? (
            <div className="px-2 mt-[6px]">
              <input
                type="text"
                onChange={(e) => handleChange(e)}
                className="outline-none text-black-base border-none"
                autoFocus={true}
              />
            </div>
          ) : (
            <div className="flex text-black-base items-center gap-2 py-2 px-3">
              <div className="w-5 h-5">
                <Image
                  width={20}
                  height={20}
                  className="object-cover h-[20px] w-[20px] rounded-full"
                  src={`https://dejavu.lifestyle//flags/${selectCountry?.code.toLowerCase()}.svg`}
                  alt="image"
                />
              </div>
              <p className=" capitalize text-[14px] font-normal">
                {selectCountry?.countryname}
              </p>
            </div>
          )}

          <div className=" text-black-base py-2 px-3">
            <IoIosArrowUp
              className={`${
                activeCountry ? "" : "rotate-180"
              }   text-colo duration-500`}
              size={20}
            />
          </div>

          {/* select title  */}
          <p className="text-[10px] md:text-[12px] font-normal text-black-base absolute -top-2 left-2 bg-white  px-2  z-20">
            {" "}
            Select country{" "}
          </p>
        </div>
        {/* active country menu  */}
        {activeCountry ? (
          <div className="max-h-[300px] z-50 absolute w-full top-12 overflow-x-auto bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded selectBarScroll py-3">
            <ul>
              {allCountry?.map((item, index) => (
                <li
                  key={index}
                  onClick={() => (
                    setSelectCountry(item), setActiveCountry(!activeCountry)
                  )}
                  className={`  border-b border-[#d8e8d4] hover:bg-light-muted cursor-pointer duration-300`}
                >
                  <div className="flex text-black-base items-center gap-2 py-2 px-3">
                    <div className="w-5 h-5">
                      <Image
                        width={20}
                        height={20}
                        className="object-cover h-[20px] w-[20px] rounded-full"
                        src={`https://dejavu.lifestyle//flags/${item?.code.toLowerCase()}.svg`}
                        alt="image"
                      />
                    </div>
                    <p className=" capitalize text-[14px] font-normal">
                      {item?.countryname}
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

export default SelectOptionsAndSearch;
