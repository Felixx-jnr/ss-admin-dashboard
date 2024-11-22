import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Define the custom plugin
const sliceThickness = {
  id: "sliceThickness",
  beforeDraw(chart) {
    console.log(chart.chartArea.width);
    const sliceThicknessPixel = [];
    sliceThicknessPixel.forEach((thickness, index) => {
      chart.getDatasetMeta(0).data[index].outerRadius =
        (chart.chartArea.width / thickness) * 100;
    });
    const sliceThicknessPixelTwo = [];
    sliceThicknessPixelTwo.forEach((thickness, index) => {
      chart.getDatasetMeta(0).data[index].innerRadius =
        (chart.chartArea.width / thickness) * 100;
    });
  },
};

ChartJS.register(sliceThickness); // Register the custom plugin here

const DoughnutChart = () => {
  const data = {
    labels: ["Unsatisfied", "Very Unsatisfied", "Very Satisfied"],
    datasets: [
      {
        data: [4, 5, 6], // Data values for each slice
        backgroundColor: ["#ddd", "pink", "blue"], // Slice colors
        borderWidth: 0, // No border between slices
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="">
      <div className=" w-[205px] h-[210px] px-7 py-8 border-red-600 border mt-5 ml-6">
        <Doughnut
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default DoughnutChart;
