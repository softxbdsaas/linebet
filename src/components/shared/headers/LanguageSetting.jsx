import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const LanguageSetting = () => {
  return (
    <div>
       <div className="pr-1 pl-2 cursor-pointer flex items-center rounded">
           <p>En</p>
          <MdOutlineKeyboardArrowDown className="text-[20px] text-white" />
        </div>
    </div>
  )
}

export default LanguageSetting
