import React from "react";
import { IoClose } from "react-icons/io5";

const CommonModal = ({ children, active, setActive }) => {
  return (
    <div
      className={`fixed h-screen w-full top-0 left-0 z-[600] bg-slate-800/50 flex justify-center items-center ${
        active ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-opacity duration-300`}
    >
      <div
        className={`modal-content shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white  rounded-xl text-black-base max-h-[90vh] overflow-y-auto flex justify-center items-center max-w-[95vw] md:max-w-[90vw] relative transform ${
          active
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-10 opacity-0  scale-75"
        } transition-all duration-300`}
      >
        <div className="p-4">
          <div
            onClick={() => setActive(!active)}
            className="absolute group right-[6px] top-[6px] cursor-pointer p-1 rounded-full bg-light-muted"
          >
            <IoClose className="text-xl group-hover:text-danger-base duration-200" />
          </div>
          <div className="pt-2 md:pt-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default CommonModal;
