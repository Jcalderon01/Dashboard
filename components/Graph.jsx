import { useEffect } from "react";
import { Chart } from "chart.js";

export const Graph = ({ valores }) => {
  useEffect(() => {
    const ctx1 = document.getElementById("myChart1").getContext("2d");

    const grafica = new Chart(ctx1, {
      type: "pie",
      data: {
        labels: ["Grasa", "Osea", "Residual", "Muscular"],
        datasets: [
          {
            label: "Porcentajes",
            data: [...valores],
            borderWidth: 1,
            backgroundColor: ["#1B263B", "#3f6ea5", "#6b7894", "#415A77"],
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
