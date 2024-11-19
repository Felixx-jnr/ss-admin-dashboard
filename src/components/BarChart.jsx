import React, { useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Custom plugin to draw circles
const customCirclesPlugin = {
  id: "customCircles",
  afterDatasetsDraw(chart) {
    const ctx = chart.ctx;
    const datasetMeta = chart.getDatasetMeta(0);

    // Circle styling and positions
    const circleDetails = {
      Mar: { borderColor: "#0000FF", innerColor: "#FFFFFF" }, // Blue outside, white inside
      Jun: { borderColor: "#FF69B4", innerColor: "#FFFFFF" }, // Pink outside, white inside
      Oct: { borderColor: "#FF0000", innerColor: "#FFFFFF" }, // Red outside, white inside
    };

    chart.data.labels.forEach((label, index) => {
      if (circleDetails[label]) {
        const bar = datasetMeta.data[index];

        if (bar) {
          const x = bar.x;
          const y = bar.y - 10; // 10px above the bar top

          // Outer circle
          ctx.beginPath();
          ctx.arc(x, y, 6, 0, 2 * Math.PI);
          ctx.fillStyle = circleDetails[label].borderColor;
          ctx.fill();

          // Inner circle
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, 2 * Math.PI);
          ctx.fillStyle = circleDetails[label].innerColor;
          ctx.fill();
        }
      }
    });
  },
};

const BarChart = () => {
  const chartRef = useRef(null);

  const getGradient = (ctx, chartArea, month) => {
    const gradient = ctx.createLinearGradient(
      0,
      chartArea.top,
      0,
      chartArea.bottom
    );

    if (month === "Mar") {
      gradient.addColorStop(0, "#33C600");
      gradient.addColorStop(1, "#CDF4FF");
    } else if (month === "Jun") {
      gradient.addColorStop(0, "#B8B7FF");
      gradient.addColorStop(1, "#6C5DD3");
    } else if (month === "Oct") {
      gradient.addColorStop(0, "#FF4CE2");
      gradient.addColorStop(1, "#FFB7F5");
    } else {
      gradient.addColorStop(0, "gray");
    }

    return gradient;
  };

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3, 7, 9, 4, 10, 6, 8],
        backgroundColor: (ctx) => {
          const chart = ctx.chart;
          const { ctx: canvasContext, chartArea } = chart;

          if (!chartArea) {
            return "rgba(0, 0, 0, 0.1)";
          }

          const month = ctx.chart.data.labels[ctx.dataIndex];

          return getGradient(canvasContext, chartArea, month);
        },
        borderRadius: {
          topLeft: 8,
          topRight: 8,
          bottomLeft: 8,
          bottomRight: 8,
        },
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#4B5563",
          font: {
            size: 12,
            family: "Inter, sans-serif",
          },
          padding: 8,
        },
        border: {
          color: "white",
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div className=" bg-white rounded-lg shadow-md">
      <Bar
        ref={chartRef}
        data={data}
        options={options}
        plugins={[customCirclesPlugin]}
      />
      <div className="flex justify-center mt-4 space-x-8">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-[#33C600] border-2 border-white rounded-full"></div>
          <span className="text-gray-700">Income</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-[#6C5DD3] border-2 border-white rounded-full"></div>
          <span className="text-gray-700">Spending</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-[#FF4CE2] border-2 border-white rounded-full"></div>
          <span className="text-gray-700">Expenses</span>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
