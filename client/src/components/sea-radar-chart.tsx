import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface SeaRadarChartProps {
  scores: {
    planning: number;
    targeting: number;
    creative: number;
    optimization: number;
    analytics: number;
    budget: number;
  };
}

export default function SeaRadarChart({ scores }: SeaRadarChartProps) {
  const data = {
    labels: [
      'Planejamento',
      'Segmentação',
      'Criativos',
      'Otimização',
      'Análise',
      'Gestão Orçamento'
    ],
    datasets: [
      {
        label: 'Pontuação SEA',
        data: [
          scores.planning,
          scores.targeting,
          scores.creative,
          scores.optimization,
          scores.analytics,
          scores.budget
        ],
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(59, 130, 246, 1)',
        pointRadius: 6,
        pointHoverRadius: 8,
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
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.parsed.r}/4`;
          }
        }
      }
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 4,
        min: 0,
        ticks: {
          stepSize: 1,
          display: false,
        },
        grid: {
          color: 'rgba(156, 163, 175, 0.3)',
        },
        angleLines: {
          color: 'rgba(156, 163, 175, 0.3)',
        },
        pointLabels: {
          font: {
            size: 12,
            weight: 'bold' as const,
          },
          color: 'rgb(55, 65, 81)',
        },
      },
    },
  };

  return (
    <div className="w-full h-96 flex justify-center">
      <div className="w-96 h-96">
        <Radar data={data} options={options} />
      </div>
    </div>
  );
}