import React from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "tailwindcss/tailwind.css";

Chart.register(ArcElement, Tooltip, Legend);

const SmallDoughNutTwo = () => {
  // Define data and gradient
  const data = {
    datasets: [
      {
        data: [61, 39], // Adding a second value to show the empty space
        backgroundColor: ["#B6DD80", "#9EC6001A"],
        borderWidth: 0,
        borderRadius: 13,
      },
    ],
  };

  const options = {
    cutout: "85%",
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

  // Add a plugin to fill the center
  const centerBackgroundPlugin = {
    id: "centerBackground",
    beforeDraw(chart) {
      const { ctx, width, height } = chart;
      const centerX = width / 2;
      const centerY = height / 2;
      const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;

      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, innerRadius, 0, Math.PI * 2);
      ctx.fillStyle = "#9EC6001A";
      ctx.fill();
      ctx.restore();
    },
  };

  return (
    <div className="relative flex items-center justify-center h-full w-full">
      {/* Doughnut Chart */}
      <Doughnut
        data={data}
        options={options}
        plugins={[centerBackgroundPlugin]}
      />
      <div className="absolute bg-white p-1 rounded-full flex flex-col items-center">
        <img
          src="/Arrow-green.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default SmallDoughNutTwo;
