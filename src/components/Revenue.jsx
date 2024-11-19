import React from "react";
import BarChart from "./BarChart";

const Revenue = () => {
  return (
    <div className="bg-white flex flex-col rounded-md ">
      <div className="flex items-center justify-between border-b ">
        <h3 className=" ml-[30px] font-inter font-bold text-lg text-[#081735] mt-6 mb-4">
          Revenue
        </h3>
        <img
          src="/Frame 70.svg"
          alt=""
          className="mr-[30px]"
        />
      </div>

      <h3 className="font-inter font-bold text-[32px] text-[#081735] ml-7 pt-6 pb-8">
        $112,340
      </h3>

      <div className="  ">
        <BarChart />
      </div>
    </div>
  );
};

export default Revenue;
