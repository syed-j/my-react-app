import React, { useEffect, useRef } from "react";
import { Chart, LinearScale, PointElement, Tooltip, Legend } from "chart.js";

// Register necessary components
Chart.register(LinearScale, PointElement, Tooltip, Legend);

const BubbleChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Create chart with data
    const bubbleChart = new Chart(ctx, {
      type: "bubble", // Bubble chart type
      data: {
        datasets: [
          {
            label: "Group A",
            data: [
              { x: 15, y: 10, r: 8 },
              { x: 20, y: 30, r: 12 },
              { x: 25, y: 5, r: 15 },
            ],
            backgroundColor: "rgba(75, 192, 192, 0.5)", // Light teal color
          },
          {
            label: "Group B",
            data: [
              { x: 10, y: 20, r: 10 },
              { x: 30, y: 15, r: 20 },
              { x: 40, y: 25, r: 12 },
            ],
            backgroundColor: "rgba(255, 99, 132, 0.5)", // Light pink color
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: "linear", // Use "linear" scale
            min: 0,
            max: 50,
          },
          y: {
            type: "linear", // Use "linear" scale
            min: 0,
            max: 50,
          },
        },
      },
    });

    // Cleanup: Destroy chart on component unmount
    return () => {
      if (bubbleChart) {
        bubbleChart.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} width="400" height="400"></canvas>;
};

export default BubbleChart;
