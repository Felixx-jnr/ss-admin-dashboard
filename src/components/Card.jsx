import React from "react";

const Card = () => {
  return (
    <div className=" m-5 bg-[#FFFFFFBF] w-64 h-[182px] rounded-[6px] border border-white backdrop-blur-[27.2px] shadow-[0px_12px_16px_-4px_rgba(12,26,36,.04)] pl-6 pt-6  ">
      <div className="bg-red-400 p-3 rounded-[17px] inline-block">
        <img
          src="/dashboard.svg"
          alt=""
        />
      </div>

      <p className=" font-inter font-normal text-sm text-[#64748B] mt-4 mb-2">
        Total Menu
      </p>

      <h3 className="font-inter font-semibold text-3xl text-[#1E293B]">$345</h3>
    </div>
  );
};

export default Card;
