import React, { useState } from "react";
import BarChart from "./BarChart";

const buttons = [
  {
    title: "View",
    icon: "/carbon_view-filled.svg",
  },
  {
    title: "Export",
    icon: "/bx_bx-export.svg",
  },
  {
    title: "Remove",
    icon: "/feather_trash-2.svg",
  },
];

const Revenue = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white flex flex-col rounded-md ">
      <div className="flex items-center justify-between border-b ">
        <h3 className=" ml-[30px] font-inter font-bold text-lg text-[#081735] mt-6 pb-4">
          Revenue
        </h3>
        <div
          onClick={() => toggleOpen()}
          className="relative cursor-pointer "
        >
          <img
            src="/Frame 70.svg"
            alt=""
            className="mx-[30px] py-1"
          />
          {isOpen && (
            <div
              onClick={() => toggleOpen()}
              className=" z-10 absolute top-4 right-6 bg-white border border-[#E6E8F0] rounded-lg shadow-md "
            >
              <ul className="w-[150px]">
                {buttons.map((button, index) => (
                  <li key={index}>
                    <div className="flex items-center">
                      <div className="py-[9px] pl-4 pr-3">
                        <img
                          src={button.icon}
                          alt=""
                        />
                      </div>
                      <span
                        className={` font-inter font-normal text-sm text-[#8F95B2] ${
                          index == 2 ? "text-[#FF754C]" : ""
                        }`}
                      >
                        {button.title}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <h3 className="font-inter font-bold text-[32px] text-[#081735] ml-7 mb-[35px] mt-6">
        $112,340
      </h3>

      <div className="  ">
        <BarChart />
      </div>
    </div>
  );
};

export default Revenue;
