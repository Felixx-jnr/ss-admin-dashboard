import React from "react";
import PieChart from "./PieChart";
import SmallDoughnut from "./SmallDoughNut";
import SmallDoughnutTwo from "./SmallDoughNutTwo";

const Customer = () => {
  return (
    <div className="bg-white rounded-md mr-1">
      <div className="flex items-center justify-between border-b">
        <div className="ml-[30px] py-[11px]">
          <h3 className=" font-inter font-bold text-lg text-[#081735] mb-[1px] ">
            Customer
          </h3>
          <p className="font-inter font-normal text-xs text-[#8F95B2]">
            Customers that buy our products
          </p>
        </div>

        <img
          src="/Frame 70.svg"
          alt=""
          className="mr-[30px]"
        />
      </div>

      <div className="flex max-small:gap-6 max-small:flex-col items-center max-mid:justify-center gap-3 xl:gap-14">
        <div
          style={{
            boxShadow: "0px 8.54px 22.78px 0px rgba(108, 93, 211, 0.1)",
          }}
          className=" w-[205px] h-[210px] ml-2 xl:ml-6 mt-5 rounded-full"
        >
          <PieChart />
        </div>
        <div className=" ">
          <div>
            <div className="flex gap-2 xl:gap-6 mb-[27px]">
              <div className="w-[67px] h-[68.63px]">
                <SmallDoughnut />
              </div>
              <div className=" flex flex-col justify-center  ">
                <h3 className=" font-inter font-bold text-sm text-[#081735] ">
                  + 18%
                </h3>
                <p className="font-inter font-normal text-[10px] lg:text-xs text-[#8F95B2]">
                  Daily customers
                </p>
              </div>
            </div>
            <div className="flex gap-2 xl:gap-6">
              <div className="w-[67px] h-[68.63px]">
                <SmallDoughnutTwo />
              </div>
              <div className=" flex flex-col justify-center  ">
                <h3 className=" font-inter font-bold text-sm text-[#081735] ">
                  + 14%
                </h3>
                <p className="font-inter font-normal text-[10px] lg:text-xs text-[#8F95B2]">
                  Weekly new customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex gap-2 md:gap-4 mt-[37px] justify-center pb-6 ">
        <div className="flex items-center gap-[6px] ">
          <div
            style={{
              background:
                "linear-gradient(333.01deg, #667EFE -23.54%, #FFB7F5 173.81%)",
            }}
            className="w-3 h-3 rounded-full "
          ></div>
          <span className=" font-inter font-bold text-sm text-[#081735]">
            Current Customers
          </span>
        </div>

        <div className="flex items-center gap-[6px]">
          <div
            style={{
              background:
                "linear-gradient(283.95deg, #A3CB31 -12.57%, #CDF4FF 126.88%)",
            }}
            className="w-3 h-3 rounded-full "
          ></div>
          <span className=" font-inter font-semibold text-sm text-[#081735]">
            New customers
          </span>
        </div>
      </div>
    </div>
  );
};

export default Customer;
