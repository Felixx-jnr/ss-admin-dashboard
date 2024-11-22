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
      Mar: { borderColor: "blue", innerColor: "#FFFFFF" }, // Blue outside, white inside
      Jun: { borderColor: "#6C5DD3", innerColor: "#FFFFFF" }, // Pink outside, white inside
      Oct: { borderColor: "#FF754C", innerColor: "#FFFFFF" }, // Red outside, white inside
    };

    chart.data.labels.forEach((label, index) => {
      if (circleDetails[label]) {
        const bar = datasetMeta.data[index];

        if (bar) {
          const x = bar.x;
          const y = bar.y - 16; // 10px above the bar top

          // Outer circle
          ctx.beginPath();
          ctx.arc(x, y, 6, 0, 2 * Math.PI);
          ctx.fillStyle = circleDetails[label].borderColor;
          ctx.fill();

          // Inner circle
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, 2 * Math.PI);
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
      chartArea.left,
      0,
      chartArea.right
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
      gradient.addColorStop(0, "#E6E8F0");
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
        data: [
          37.91, 92.82, 64.06, 44, 58.83, 105.24, 50.99, 92.82, 25.49, 73.21,
          41.18, 64.06,
        ],
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
    maintainAspectRatio: false,
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
          color: "#8F95B2",
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
    layout: {
      padding: {
        top: 10, // Adjust top padding
        left: 0,
        right: 0,
      },
    },
  };

  return (
    <div className=" ">
      <div className="pl-4 pr-10">
        <Bar
          ref={chartRef}
          data={data}
          options={options}
          plugins={[customCirclesPlugin]}
        />
      </div>
      <div className="md:mx-6 mx-2 flex gap-2 md:gap-4 my-6 max-xs:flex-wrap ">
        <div className="flex items-center gap-[7px] ">
          <div className="w-3 h-3 bg-[linear-gradient(283.95deg,_#0049C6_-12.57%,_#CDF4FF_126.88%)] rounded-[4px] "></div>
          <span className=" font-normal font-inter text-xs text-center text-[#8F95B2]">
            Pending(10%)
          </span>
        </div>
        <div className="flex items-center gap-[7px]">
          <div className="w-3 h-3  bg-[linear-gradient(135deg,_#FFB7F5_0%,_#6C5DD3_100%)] rounded-[4px] "></div>
          <span className=" font-normal font-inter text-xs text-center text-[#8F95B2]">
            Income
          </span>
        </div>
        <div className="flex items-center gap-[7px]">
          <div className="w-3 h-3 bg-[linear-gradient(333.01deg,_#FF754C_-23.54%,_#FFB7F5_173.81%)] rounded-[4px] "></div>
          <span className=" font-normal font-inter text-xs text-center text-[#8F95B2]">
            Expenses
          </span>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
