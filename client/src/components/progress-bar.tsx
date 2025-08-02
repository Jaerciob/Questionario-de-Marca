interface ProgressBarProps {
  current: number;
  total: number;
  percentage: number;
}

export default function ProgressBar({ current, total, percentage }: ProgressBarProps) {
  return (
    <div className="mb-8">
      <div className="glass-morphism p-6 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-300 font-semibold">Progresso do Diagnóstico</span>
          <span className="text-gray-400 font-medium">Questão {current} de {total}</span>
        </div>
        <div className="w-full bg-gray-700 bg-opacity-50 rounded-full h-4">
          <div 
            className="progress-bar h-4 rounded-full" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="text-right mt-3">
          <span className="text-sm text-gray-400 font-medium">
            {Math.round(percentage)}% concluído
          </span>
        </div>
      </div>
    </div>
  );
}
