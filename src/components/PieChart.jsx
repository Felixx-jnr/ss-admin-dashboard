import React from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "tailwindcss/tailwind.css";
import SubscriptionChart from "./SubscriptionChart";
import CenterCirle from "./CenterCirle";

Chart.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  // Define data and gradient
  const data = {
    datasets: [
      {
        data: [73.29, 124.68, 124.68],
        backgroundColor: ["#996DEB", "#A8DA80", "#6C5DD31A"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      tooltip: {
        enabled: false, // Disable tooltips
      },
      legend: {
        display: false, // Disable legend
      },
    },
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <div
      style={{ boxShadow: "0px 8.54px 22.78px 0px rgba(108, 93, 211, 0.1)" }}
      className=" pl-[27.66px] pr-[30.76px] pt-[30.48px] pb-[29.35px] rounded-full relative flex items-center justify-center h-full w-full bg-[#FAFBFF]  "
    >
      {/* Doughnut Chart */}
      <Doughnut
        data={data}
        options={options}
      />

      {/* Center Component */}
      <div className="absolute flex flex-col items-center">
        <CenterCirle />
      </div>
    </div>
  );
};

export default PieChart;
