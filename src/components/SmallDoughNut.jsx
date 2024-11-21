import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

// Register necessary components
ChartJS.register(ArcElement, Tooltip);

// Custom plugin for inner text and minimal styling
const customInnerTextPlugin = {
  id: "customInnerText",
  beforeDraw(chart) {
    const { width } = chart;
    const { ctx } = chart;
    const innerText = "📈"; // Replace with icon or text as required

    ctx.save();
    const fontSize = Math.round((width / 10) * 1.5);
    ctx.font = `${fontSize}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#7D83FF"; // Inner icon/text color
    ctx.fillText(innerText, chart.width / 2, chart.height / 2);
    ctx.restore();
  },
};

const SmallDoughnutChart = () => {
  // Data for the chart
  const data = {
    labels: [],
    datasets: [
      {
        data: [80, 20], // Values for the chart
        backgroundColor: ["#D9E8FF", "rgba(0,0,0,0)"], // Colors for filled section and empty space
        hoverBackgroundColor: ["#D9E8FF", "rgba(0,0,0,0)"], // Hover effects
        borderWidth: 0, // Removes outer border
      },
    ],
  };

  // Configuration options
  const options = {
    responsive: true,
    cutout: "80%", // Creates the donut appearance
    plugins: {
      legend: {
        display: false, // Hides legend
      },
      tooltip: {
        enabled: false, // Hides tooltips
      },
    },
  };

  return (
    <div style={{ width: "100px", height: "100px" }}>
      <Doughnut
        data={data}
        options={options}
        plugins={[customInnerTextPlugin]}
      />
    </div>
  );
};

export default SmallDoughnutChart;
