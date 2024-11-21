import React from "react";

const TopBar = () => {
  return (
    <div className=" h-24 bg-white flex items-center justify-between sm:justify-around lg:justify-between xl:px-12 px-4  ">
      <div className=" mr-4 max-lg:ml-14">
        <h3 className=" font-inter font-bold sm:text-2xl text-xl text-[#111827] mb-1">
          Hi, Taylor!
        </h3>
        <p className=" font-inter font-normal text-xs lg:text-sm text-[#718096] lg:w-[189px] w-[161px] max-sm:hidden">
          Let's check your store today
        </p>
      </div>

      <div className="flex items-center">
        <div className=" max-sm:hidden flex items-center h-12 basis-[282px] rounded-[12px] border border-[#D9D9D9] bg-[#FAFAFA] p-1 ">
          <label
            htmlFor="search"
            className="mr-3 ml-[18px] max-md:hidden"
          >
            <img
              src="/Search.svg"
              alt=""
            />
          </label>
          <input
            name="search"
            id="search"
            type="text"
            className="w-full h-full outline-0 bg-[#FAFAFA] p-1 font-sans font-normal text-lg text-[#A0AEC0]"
            placeholder="Search..."
          />
        </div>

        {/* ICONS */}
        <div className="flex ml-2 xl:ml-7 xl:mr-10">
          <div className="w-6 h-6 mx-2 lg:mx-3 rounded-[50%] relative">
            <img
              src="/mail.svg"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className=" absolute right-0 top-[1px] w-[9px] h-[9px] bg-white rounded-full  ">
              <div className=" text-[6px] absolute right-0 top-0  w-2 h-2 bg-[#FD6A6A] rounded-full  "></div>
            </div>
          </div>

          <div className="w-6 h-6 mx-2 lg:mx-3 rounded-[50%] relative">
            <img
              src="/bell.svg"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className=" absolute right-[2px] top-[2px] w-[9px] h-[9px] bg-white rounded-full  ">
              <div className=" text-[6px] absolute right-0 top-0  w-2 h-2 bg-[#FD6A6A] rounded-full  "></div>
            </div>
          </div>
        </div>

        {/* AVATAR AND NAME */}
        <div className="flex items-center gap-4 pl-2 xl:pl-6 border-l border-[#EEEFF2] ">
          <div className="">
            <img
              src="/Avatar (2).png"
              alt=""
              className=" h-[48px] w-[48px] sm:w-[60px] md:w-[73px] "
            />
          </div>
          <h3 className=" max-md:hidden w-full font-sans font-bold text-base text-[#111827] ">
            Tynisha Obey
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
