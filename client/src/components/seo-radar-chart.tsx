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

interface SeoRadarChartProps {
  scores: {
    content: number;
    technical: number;
    authority: number;
    local: number;
    conversion: number;
    maturity: number;
  };
}

export default function SeoRadarChart({ scores }: SeoRadarChartProps) {
  const data = {
    labels: [
      'Conteúdo Jurídico',
      'SEO Técnico',
      'Autoridade Digital',
      'SEO Local',
      'Conversão',
      'Maturidade Geral'
    ],
    datasets: [
      {
        label: 'Pontuação SEO',
        data: [
          scores.content,
          scores.technical,
          scores.authority,
          scores.local,
          scores.conversion,
          scores.maturity
        ],
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(34, 197, 94, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(34, 197, 94, 1)',
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
            return `${context.label}: ${Math.min(4, Math.max(0, context.parsed.r))}/4`;
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
          callback: function(value: any) {
            return Math.min(4, Math.max(0, value));
          }
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