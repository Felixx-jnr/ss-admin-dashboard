import React from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "tailwindcss/tailwind.css";

Chart.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    datasets: [
      {
        data: [86, 14],
        backgroundColor: ["#6C5DD3", "#F8F9FB"],
        borderWidth: 0,
        borderRadius: 13, // Rounded edges
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

  // Define the plugin for this chart instance
  const centerTextPlugin = {
    id: "centerText",
    beforeDraw(chart) {
      const { width, height, ctx } = chart;
      ctx.save();
      ctx.font = " bold 13px inter";
      ctx.fillStyle = "#6C5DD3";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("86%", width / 2, height / 2);
      ctx.restore();
    },
  };

  return (
    <div className="">
      <Doughnut
        data={data}
        options={options}
        plugins={[centerTextPlugin]}
      />
    </div>
  );
};

export default DoughnutChart;
