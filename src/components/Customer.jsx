import React from "react";
import CircularProgressChart from "./DoughnutChart";
import DoughnutChart from "./DoughnutChart";

const Customer = () => {
  const labels = ["Unsatisfied", "Very Unsatisfied", "Very Satisfied"];
  const data = [20, 50, 90];
  const colors = ["#ff9999", "#ff6666", "#66b3ff"];
  return (
    <div className="bg-white ">
      <div className="flex items-center justify-between border-b">
        <h3 className=" ml-[30px] font-inter font-bold text-lg text-[#081735 mt-6 mb-4">
          Customer
        </h3>
        <img
          src="/Frame 70.svg"
          alt=""
          className="mr-[30px]"
        />
      </div>
      {/* <CircularProgressChart
        value1={40} // Progress for outer ring
        value2={5} // Progress for inner ring
        total={10} // Total for percentage calculation
        colors={["#7B61FF", "#43DC80"]} // Custom ring colors
      /> */}
      <DoughnutChart
        labels={labels}
        data={data}
        colors={colors}
      />
    </div>
  );
};

export default Customer;
