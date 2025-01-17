import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PigmentAbsorptionChart = () => {
  // Longueurs d'onde typiques (en nm)
  const wavelengths = Array.from({ length: 101 }, (_, i) => 400 + i * 5);

  // Fonction pour simuler des spectres asymétriques
  const createAbsorptionCurve = (lambdaPeak, skew) => {
    return wavelengths.map((lambda) => {
      const x = (lambda - lambdaPeak) / 50; // Normalisation par rapport au pic
      const absorption =
        Math.exp(-Math.pow(x, 2)) * (1 + skew * x); // Asymétrie introduite par "skew"
      return Math.max(0, absorption); // Absorption toujours >= 0
    });
  };

  const data = {
    labels: wavelengths,
    datasets: [
      {
        label: "Pigment Bleu (Phtalocyanine)",
        data: createAbsorptionCurve(470, -0.5), // Pic vers 470 nm, légère asymétrie
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
      },
      {
        label: "Pigment Rouge (Cadmium)",
        data: createAbsorptionCurve(650, 0.3), // Pic vers 650 nm, asymétrie positive
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
      },
      {
        label: "Pigment Vert (Émeraude)",
        data: createAbsorptionCurve(530, -0.2), // Pic vers 530 nm, légère asymétrie
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Courbes d'absorption des pigments (Bleu, Rouge, Vert)",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Longueur d'onde (nm)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Absorption relative",
        },
        min: 0,
        max: 1.2, // Ajout d'un peu de marge au maximum
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default PigmentAbsorptionChart;
