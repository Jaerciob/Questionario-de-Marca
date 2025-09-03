import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { trackEvent } from "@/lib/analytics";
import SeoRadarChart from "@/components/seo-radar-chart";
import type { SeoQuizAnswers, SeoResults } from "@shared/schema";

interface SeoResultsSectionProps {
  answers: SeoQuizAnswers;
  results: SeoResults;
  onRestart: () => void;
  onBack: () => void;
}

export default function SeoResultsSection({ answers, results, onRestart, onBack }: SeoResultsSectionProps) {
  const handlePrint = () => {
    trackEvent('print_seo_report', 'engagement', 'seo_results');
    window.print();
  };

  const handleRestart = () => {
    trackEvent('restart_seo_diagnosis', 'engagement', 'seo_results');
    onRestart();
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Results Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
              <i className="fas fa-chart-line text-green-600 text-xl"></i>
            </div>
            <div>
              <CardTitle className="text-2xl">Resultado do Diagnóstico SEO</CardTitle>
              <p className="text-gray-600 dark:text-gray-400">Seu plano personalizado baseado nas respostas</p>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Maturity Level */}
            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
              <CardContent className="p-6 text-center">
                <i className="fas fa-user-graduate text-3xl mb-3"></i>
                <h3 className="text-xl font-bold mb-2">Nível de Maturidade</h3>
                <p className="text-2xl font-bold">{results.maturityLevel}</p>
              </CardContent>
            </Card>

            {/* Strategic Focus */}
            <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
              <CardContent className="p-6 text-center">
                <i className="fas fa-bullseye text-3xl mb-3"></i>
                <h3 className="text-xl font-bold mb-2">Foco Estratégico</h3>
                <p className="text-2xl font-bold">{results.strategicFocus}</p>
              </CardContent>
            </Card>

            {/* Estimated Time */}
            <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
              <CardContent className="p-6 text-center">
                <i className="fas fa-clock text-3xl mb-3"></i>
                <h3 className="text-xl font-bold mb-2">Tempo Estimado</h3>
                <p className="text-2xl font-bold">{results.estimatedTime}</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* SEO Radar Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <i className="fas fa-chart-radar text-green-600"></i>
            Análise de Maturidade SEO
          </CardTitle>
        </CardHeader>
        <CardContent>
          <SeoRadarChart scores={results.radarData} />
        </CardContent>
      </Card>

      {/* Detailed Action Plan */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <i className="fas fa-tasks text-green-600"></i>
            Plano de Ação Personalizado
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {results.actionPlan.map((step, index) => {
              const priorityColor = step.priority === 'Alta' ? 'destructive' : 
                                   step.priority === 'Média' ? 'default' : 'secondary';
              const bgColor = index % 2 === 0 ? 'bg-green-50 dark:bg-green-900/10' : 'bg-blue-50 dark:bg-blue-900/10';
              const textColor = index % 2 === 0 ? 'text-green-800 dark:text-green-300' : 'text-blue-800 dark:text-blue-300';
              
              return (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-semibold">{step.title}</h4>
                        <Badge variant={priorityColor as any}>{step.priority}</Badge>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          <i className="fas fa-clock mr-1"></i>{step.time}
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        {step.description}
                      </p>
                      <div className={`${bgColor} p-3 rounded-lg`}>
                        <p className={`text-sm ${textColor}`}>
                          <strong>Exemplo prático:</strong> {step.example}
                        </p>
                      </div>
                      {step.links && step.links.length > 0 && (
                        <div className="mt-3">
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Links úteis:</p>
                          <div className="flex flex-wrap gap-2">
                            {step.links.map((link, linkIndex) => (
                              <a 
                                key={linkIndex}
                                href={link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                              >
                                <i className="fas fa-external-link-alt mr-1"></i>
                                {link.replace('https://', '').split('/')[0]}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={handlePrint} variant="outline" data-testid="button-print-seo">
          <i className="fas fa-print mr-2"></i>Imprimir Relatório
        </Button>
        <Button onClick={onBack} variant="outline" data-testid="button-back-seo">
          <i className="fas fa-arrow-left mr-2"></i>Voltar à Comparação
        </Button>
        <Button onClick={handleRestart} className="bg-green-600 hover:bg-green-700" data-testid="button-restart-seo">
          <i className="fas fa-redo mr-2"></i>Fazer Novo Diagnóstico
        </Button>
      </div>
    </div>
  );
}