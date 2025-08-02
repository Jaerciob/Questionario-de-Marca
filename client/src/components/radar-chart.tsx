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
            backgroundColor: 'rgba(164, 197, 247, 0.3)',
            borderColor: '#A4C5F7',
            borderWidth: 4,
            pointBackgroundColor: '#0367A6',
            pointBorderColor: '#FFFFFF',
            pointBorderWidth: 3,
            pointRadius: 8,
            pointHoverRadius: 10
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              beginAtZero: true,
              max: 100,
              min: 0,
              ticks: {
                stepSize: 20,
                color: '#E5E7EB',
                backdropColor: 'transparent',
                font: {
                  size: 14,
                  weight: 'bold'
                },
                showLabelBackdrop: false
              },
              grid: {
                color: 'rgba(229, 231, 235, 0.4)',
                lineWidth: 2
              },
              angleLines: {
                color: 'rgba(229, 231, 235, 0.4)',
                lineWidth: 2
              },
              pointLabels: {
                color: '#FFFFFF',
                font: {
                  size: 16,
                  weight: 'bold'
                },
                padding: 20
              }
            }
          },
          plugins: {
            legend: {
              position: 'top',
              labels: {
                color: '#FFFFFF',
                font: {
                  size: 16,
                  weight: 'bold'
                },
                padding: 20,
                usePointStyle: true,
                pointStyle: 'rectRounded'
              }
            },
            tooltip: {
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              titleColor: '#FFFFFF',
              bodyColor: '#E5E7EB',
              borderColor: '#A4C5F7',
              borderWidth: 2,
              titleFont: {
                size: 14,
                weight: 'bold'
              },
              bodyFont: {
                size: 13
              },
              callbacks: {
                label: function(context) {
                  return `${context.dataset.label}: ${context.parsed.r} pontos`;
                }
              }
            }
          },
          interaction: {
            intersect: false
          },
          elements: {
            line: {
              tension: 0.1
            },
            point: {
              hoverBorderWidth: 4
            }
          }
        }
      });
    });
  }, [scores]);

  return (
    <div className="relative mx-auto" style={{ height: '600px', width: '100%', maxWidth: '700px' }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }}></canvas>
    </div>
  );
}
