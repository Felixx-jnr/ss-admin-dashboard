import React from "react";
import Map from "./Map";

const CustomerMap = () => {
  return (
    <div className="bg-white w-full h-full max-w-[806px] max-h-[445px] rounded-md pb-2 sm:pb-[26px]">
      <h3 className=" border-b pl-[30px] font-inter font-bold text-lg text-[#081735] pt-[28.79px] pb-[23.98px]">
        Customer Map
      </h3>
      <div className=" px-2 sm:px-5 mt-2 sm:mt-[24.23px] rounded-lg ">
        <Map />
      </div>
    </div>
  );
};

export default CustomerMap;
