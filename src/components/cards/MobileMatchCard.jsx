import Image from 'next/image'
import React from 'react'
import { FaRegStar } from 'react-icons/fa'
import { MdSportsCricket } from 'react-icons/md'
import { HiDotsVertical } from "react-icons/hi";

const MobileMatchCard = () => {
  return (
    <div>
         <div className="border-b rounded border-light-muted w-full p-4 max-w-xs cursor-pointer bg-white hover:bg-[#d8e8d498] ">
      {/* Match Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <MdSportsCricket className="text-gray-500" />
          <h2 className="text-[12px]  text-gray-700">
            India vs Bangladesh
          </h2>
        </div>
        <HiDotsVertical className="text-black-base  cursor-pointer hover:bg-[#d8e8d498]hover:text-primary-base duration-300" />
      </div>

      {/* Team Scores */}
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center space-x-2">
          <Image
            width={15}
            height={15}
            src="https://flagcdn.com/w20/in.png" // Replace with India flag URL
            alt="India"
            className="w-4 h-4 rounded-full"
          />
          <span className="text-gray-700 text-[12px]">India</span>
        </div>
        <span className="text-gray-700 text-[12px]">88/3</span>
      </div>

      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center space-x-2">
          <Image
            width={15}
            height={15}
            src="https://flagcdn.com/w20/bd.png" // Replace with Bangladesh flag URL
            alt="Bangladesh"
            className="w-4 h-4 rounded-full"
          />
          <span className="text-gray-700 text-[12px]">Bangladesh</span>
        </div>
        <span className="text-gray-700 text-[12px]">0/0</span>
      </div>

      {/* Match Info */}
      <div className=" text-gray-500 text-[12px] mt-2">
        Event in progress / 1st test / Test Match
      </div>
    </div>
    </div>
  )
}

export default MobileMatchCard
