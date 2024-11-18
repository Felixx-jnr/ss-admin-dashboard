import React from "react";

const CustomerList = () => {
  return (
    <div className=" m-4 w-72 h-[445px] bg-white shadow-[0px_8px_16px_0px_rgba(143,149,178,.14)] rounded-[6px] p-5">
      <h3 className=" font-inter font-bold text-lg text-[#081735] mb-5">
        Customers List
      </h3>

      <div className=" flex items-center gap-4">
        <div className="w-10 h-10 rounded-[50%]">
          <img
            src="/Ellipse 3.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h4 className=" font-inter font-bold text-sm text-[#1E293B]">
            Ana Black
          </h4>
          <p className=" font-inter font-normal text-sm text-[#64748b]">
            ana@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
