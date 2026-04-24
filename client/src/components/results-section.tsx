import { useMemo } from "react";
import type { InsertFirmInfo, QuizResults } from "@shared/schema";
import { calculateScores, generateRecommendations, determineArchetype, generateColorPalette } from "@/utils/scoring";
import RadarChart from "@/components/radar-chart";
import { CanvasButton } from "./canvas-button";
import { trackEvent } from "@/lib/analytics";

interface ResultsSectionProps {
  firmInfo: InsertFirmInfo;
  answers: Record<string, string>;
  onRestart: () => void;
}

export default function ResultsSection({ firmInfo, answers, onRestart }: ResultsSectionProps) {
  const results: QuizResults = useMemo(() => {
    const scores = calculateScores(answers);
    const archetype = determineArchetype(scores, answers);
    const colorPalette = generateColorPalette(archetype);
    const recommendations = generateRecommendations(scores, firmInfo);
    const overallScore = Math.round((scores.identity + scores.positioning + scores.communication + scores.experience) / 4);

    return {
      scores,
      archetype,
      colorPalette,
      recommendations,
      overallScore
    };
  }, [answers, firmInfo]);

  const handlePrint = () => {
    trackEvent('print_report', 'engagement', 'results_page');
    window.print();
  };

  const handleRestart = () => {
    trackEvent('restart_diagnosis', 'engagement', 'results_page');
    onRestart();
  };

  return (
    <div className="glass-morphism p-8 max-w-6xl mx-auto mb-8">
      <div className="text-center mb-8">
        <i className="fas fa-trophy text-6xl text-orange-400 mb-4"></i>
        <h2 className="text-4xl font-bold mb-4 gradient-text">
          Seu Diagnóstico Está Pronto!
        </h2>
        <p className="text-xl text-gray-300">
          Análise completa do branding do {firmInfo.name}
        </p>
      </div>

      {/* Radar Chart */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">
          Pontuação por Categoria
        </h3>
        <div className="bg-white bg-opacity-10 rounded-2xl p-8 border border-white border-opacity-20 backdrop-blur-sm">
          <RadarChart scores={results.scores} />
        </div>
      </div>

      {/* Overall Scores */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center">
          <i className="fas fa-fingerprint text-3xl text-blue-300 mb-3"></i>
          <h4 className="font-bold text-white mb-2">Identidade</h4>
          <div className="text-3xl font-bold text-blue-300">{results.scores.identity}</div>
          <div className="text-sm text-gray-400">pontos</div>
        </div>
        <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center">
          <i className="fas fa-crosshairs text-3xl text-orange-400 mb-3"></i>
          <h4 className="font-bold text-white mb-2">Posicionamento</h4>
          <div className="text-3xl font-bold text-orange-400">{results.scores.positioning}</div>
          <div className="text-sm text-gray-400">pontos</div>
        </div>
        <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center">
          <i className="fas fa-comments text-3xl text-green-400 mb-3"></i>
          <h4 className="font-bold text-white mb-2">Comunicação</h4>
          <div className="text-3xl font-bold text-green-400">{results.scores.communication}</div>
          <div className="text-sm text-gray-400">pontos</div>
        </div>
        <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center">
          <i className="fas fa-star text-3xl text-yellow-400 mb-3"></i>
          <h4 className="font-bold text-white mb-2">Experiência</h4>
          <div className="text-3xl font-bold text-yellow-400">{results.scores.experience}</div>
          <div className="text-sm text-gray-400">pontos</div>
        </div>
      </div>

      {/* Brand Archetype */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          Seu Arquétipo de Marca
        </h3>
        <div className="archetype-card max-w-2xl mx-auto">
          <i className={`${results.archetype.icon} text-5xl text-blue-300 mb-4`}></i>
          <h4 className="text-2xl font-bold text-white mb-4">{results.archetype.name}</h4>
          <p className="text-gray-300 leading-relaxed mb-4">
            {results.archetype.description}
          </p>
          <div className="mb-4">
            <h5 className="font-semibold text-white mb-2">Características Principais:</h5>
            <div className="flex flex-wrap justify-center gap-2">
              {results.archetype.characteristics.map((char, index) => (
                <span 
                  key={index}
                  className="bg-blue-600 bg-opacity-50 text-white px-3 py-1 rounded-full text-sm"
                >
                  {char}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-2">Exemplos de Marcas:</h5>
            <p className="text-gray-300">{results.archetype.examples.join(", ")}</p>
          </div>
        </div>
      </div>

      {/* Color Palette Recommendation */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          Paleta de Cores Recomendada
        </h3>
        <div className="bg-white bg-opacity-10 rounded-xl p-8 text-center">
          <p className="text-gray-300 mb-6">{results.colorPalette.psychology}</p>
          <div className="flex justify-center flex-wrap mb-4">
            {results.colorPalette.primary.map((color, index) => (
              <div key={index} className="text-center mx-2 mb-4">
                <div 
                  className="color-sample"
                  style={{ backgroundColor: color }}
                  title={color}
                ></div>
                <div className="text-xs text-gray-300 mt-1">{color}</div>
              </div>
            ))}
          </div>
          <h4 className="text-gray-300 font-semibold mb-2">Cores Secundárias</h4>
          <div className="flex justify-center flex-wrap">
            {results.colorPalette.secondary.map((color, index) => (
              <div key={index} className="text-center mx-2 mb-4">
                <div 
                  className="color-sample w-8 h-8" 
                  style={{ backgroundColor: color }}
                  title={color}
                ></div>
                <div className="text-xs text-gray-300 mt-1">{color}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          Recomendações Personalizadas
        </h3>
        <div className="space-y-4">
          {results.recommendations.map((rec, index) => (
            <div key={index} className="recommendation-card">
              <div className="flex items-start">
                <i className="fas fa-lightbulb text-2xl text-blue-600 mr-4 mt-1"></i>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-2 text-slate-900">{rec.title}</h4>
                  <p className="text-gray-700 leading-relaxed mb-3">{rec.description}</p>
                  <div className="flex items-center gap-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      rec.priority === 'high' ? 'bg-red-100 text-red-800' :
                      rec.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      Prioridade: {rec.priority === 'high' ? 'Alta' : rec.priority === 'medium' ? 'Média' : 'Baixa'}
                    </span>
                    <span className="text-sm text-gray-600">
                      Categoria: {rec.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <CanvasButton variant="primary" size="lg" />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button onClick={handlePrint} className="btn-primary px-8 py-3">
            <i className="fas fa-print mr-2"></i>Imprimir Relatório
          </button>
          <button 
            onClick={handleRestart}
            className="px-8 py-3 bg-gray-600 bg-opacity-50 text-gray-300 rounded-full hover:bg-opacity-70 transition-all"
          >
            <i className="fas fa-redo mr-2"></i>Novo Diagnóstico
          </button>
        </div>
      </div>
    </div>
  );
}
