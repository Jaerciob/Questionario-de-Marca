import { useEffect, useRef } from "react";

interface RadarChartProps {
  scores: {
    identity: number;
    positioning: number;
    communication: number;
    experience: number;
  };
}

export default function RadarChart({ scores }: RadarChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Import Chart.js dynamically to avoid SSR issues
    import('chart.js/auto').then((Chart) => {
      new Chart.default(ctx, {
        type: 'radar',
        data: {
          labels: ['Identidade da Marca', 'Posicionamento', 'Comunicação', 'Experiência do Cliente'],
          datasets: [{
            label: 'Seu Escritório',
            data: [scores.identity, scores.positioning, scores.communication, scores.experience],
            backgroundColor: 'rgba(164, 197, 247, 0.2)',
            borderColor: '#A4C5F7',
            borderWidth: 3,
            pointBackgroundColor: '#0367A6',
            pointBorderColor: '#A4C5F7',
            pointBorderWidth: 3,
            pointRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            r: {
              beginAtZero: true,
              max: 100,
              ticks: {
                stepSize: 20,
                color: '#9CA3AF',
                backdropColor: 'transparent'
              },
              grid: {
                color: 'rgba(156, 163, 175, 0.3)'
              },
              angleLines: {
                color: 'rgba(156, 163, 175, 0.3)'
              },
              pointLabels: {
                color: '#F3F4F6',
                font: {
                  size: 14,
                  weight: 'bold'
                }
              }
            }
          },
          plugins: {
            legend: {
              labels: {
                color: '#F3F4F6',
                font: {
                  size: 14,
                  weight: 'bold'
                }
              }
            }
          }
        }
      });
    });
  }, [scores]);

  return (
    <div className="relative mx-auto" style={{ height: '450px', width: '450px' }}>
      <canvas ref={canvasRef} width="450" height="450"></canvas>
    </div>
  );
}
