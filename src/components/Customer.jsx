import React from "react";
import CircularProgressChart from "./DoughnutChart";
import DoughnutChart from "./DoughnutChart";
import PieChart from "./DoughnutChart";
import SmallDoughnutChart from "./SmallDoughNut";

const Customer = () => {
  const labels = ["Unsatisfied", "Very Unsatisfied", "Very Satisfied"];
  const data = [20, 50, 90];
  const colors = ["#ff9999", "#ff6666", "#66b3ff"];
  return (
    <div className="bg-white rounded-md ">
      <div className="flex items-center justify-between border-b">
        <h3 className=" ml-[30px] font-inter font-bold text-lg text-[#081735] mt-6 mb-4">
          Customer
        </h3>
        <img
          src="/Frame 70.svg"
          alt=""
          className="mr-[30px]"
        />
      </div>

      <DoughnutChart
        labels={labels}
        data={data}
        colors={colors}
      />

      <SmallDoughnutChart />
    </div>
  );
};

export default Customer;
