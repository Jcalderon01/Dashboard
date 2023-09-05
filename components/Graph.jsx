import { useEffect } from "react";
import { Chart } from "chart.js";

export const Graph = ({ valores }) => {
  useEffect(() => {
    const ctx1 = document.getElementById("myChart1").getContext("2d");

    const grafica = new Chart(ctx1, {
      type: "pie",
      data: {
        labels: ["masa grasa", "osea", "residual", "muscular"],
        datasets: [
          {
            label: "Numero",
            data: [...valores],
            borderWidth: 1,
            backgroundColor: ["red", "blue", "yellow", "green"],
          },
        ],
      },
      options: {
        plugins: {},
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    grafica.update();
  }, [valores]);

  return (
    <div>
      <canvas id="myChart1" width="50" height="50"></canvas>
    </div>
  );
};
