import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  // Data for the doughnut chart
  const data = {
    labels: ["Unsatisfied", "Very Unsatisfied", "Very Satisfied"],
    datasets: [
      {
        data: [4, 7, 8], // Values for each slice
        backgroundColor: ["#FFB7F5", "#FF4500", "#00BFFF"], // Slice colors
        borderWidth: 0, // No border between slices
      },
    ],
  };

  // Chart options with plugin to draw circle and text in the center
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Disable the legend
      },
    },
    // Custom plugin to render a circle and text in the center of the doughnut
    plugins: [
      {
        id: "centerCircleText",
        beforeDraw: (chart) => {
          const ctx = chart.ctx;
          const { width, height } = chart.chartArea;
          const centerX = width / 2;
          const centerY = height / 2;
          const radius = Math.min(width, height) / 2 - 20; // Slightly smaller radius than the doughnut's radius

          // Draw circle in the center
          ctx.save();
          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
          ctx.fillStyle = "#ffffff"; // Circle color
          ctx.fill();
          ctx.restore();

          // Draw text in the center of the circle
          const fontSize = 20;
          ctx.save();
          ctx.font = `${fontSize}px Arial`;
          ctx.fillStyle = "#000"; // Text color
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText("Center Text", centerX, centerY);
          ctx.restore();
        },
      },
    ],
  };

  return (
    <Doughnut
      data={data}
      options={options}
    />
  );
};

export default PieChart;
