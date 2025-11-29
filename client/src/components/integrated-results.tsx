import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { trackEvent } from "@/lib/analytics";
import SeoRadarChart from "@/components/seo-radar-chart";
import SeaRadarChart from "@/components/sea-radar-chart";
import type { SeoResults, SeaResults } from "@shared/schema";

interface IntegratedResultsProps {
  seoResults: SeoResults;
  seaResults: SeaResults;
  onRestart: () => void;
  onBack: () => void;
}

export default function IntegratedResults({ seoResults, seaResults, onRestart, onBack }: IntegratedResultsProps) {
  const handlePrint = () => {
    trackEvent('print_integrated_report', 'engagement', 'results');
    window.print();
  };

  const handleRestart = () => {
    trackEvent('restart_diagnosis', 'engagement', 'results');
    onRestart();
  };

  // Combine action plans - SEO first, then SEA
  const combinedPlan = [
    ...seoResults.actionPlan.map((step, idx) => ({
      ...step,
      channel: 'SEO' as const,
      order: idx
    })),
    ...seaResults.actionPlan.map((step, idx) => ({
      ...step,
      channel: 'SEA' as const,
      order: idx
    }))
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Main Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-lg">
              <i className="fas fa-chart-line text-white text-xl"></i>
            </div>
            <div>
              <CardTitle className="text-3xl">Diagnóstico de Marketing Digital Integrado</CardTitle>
              <p className="text-gray-600 dark:text-gray-400">Seu plano estratégico completo de SEO + SEA</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            {/* SEO Summary */}
            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <i className="fas fa-leaf text-green-600"></i> SEO - Crescimento Orgânico
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Nível de Maturidade</p>
                  <p className="text-xl font-bold text-green-600">{seoResults.maturityLevel}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Foco Estratégico</p>
                  <p className="text-lg font-semibold">{seoResults.strategicFocus}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Tempo Estimado</p>
                  <p className="text-lg font-semibold">{seoResults.estimatedTime}</p>
                </div>
              </div>
            </div>

            {/* SEA Summary */}
            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <i className="fas fa-rocket text-blue-600"></i> SEA - Anúncios Pagos
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Nível de Experiência</p>
                  <p className="text-xl font-bold text-blue-600">{seaResults.experienceLevel}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Plataforma Principal</p>
                  <p className="text-lg font-semibold">{seaResults.platformFocus}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Orçamento Mensal</p>
                  <p className="text-lg font-semibold">{seaResults.budgetRange}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Charts Section */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <i className="fas fa-chart-radar text-green-600"></i>
              Análise SEO
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SeoRadarChart scores={seoResults.radarData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <i className="fas fa-chart-pie text-blue-600"></i>
              Análise SEA
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SeaRadarChart scores={seaResults.radarData} />
          </CardContent>
        </Card>
      </div>

      {/* Unified Action Plan */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <i className="fas fa-tasks text-purple-600"></i>
            Plano de Ação Personalizado
          </CardTitle>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Estratégia integrada com ações SEO e SEA combinadas</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {combinedPlan.map((step, index) => {
              const priorityColor = step.priority === 'Alta' ? 'destructive' : 
                                   step.priority === 'Média' ? 'default' : 'secondary';
              const channelColor = step.channel === 'SEO' ? 'bg-green-100 dark:bg-green-900/30 border-green-200 dark:border-green-700' : 'bg-blue-100 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700';
              const channelBadgeColor = step.channel === 'SEO' ? 'bg-green-600' : 'bg-blue-600';
              
              return (
                <div key={`${step.channel}-${index}`} className={`border-2 ${channelColor} rounded-lg p-6`}>
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <div className="bg-purple-100 text-purple-600 rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className={`text-xs font-bold text-white px-2 py-1 rounded ${channelBadgeColor}`}>
                        {step.channel}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h4 className="text-lg font-semibold">{step.title}</h4>
                        <Badge variant={priorityColor as any}>{step.priority}</Badge>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          <i className="fas fa-clock mr-1"></i>{step.time}
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        {step.description}
                      </p>
                      <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                        <p className="text-sm">
                          <strong>Exemplo prático:</strong> {step.example}
                        </p>
                      </div>
                      {(step.tools && step.tools.length > 0) && (
                        <div className="mt-3">
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Ferramentas:</p>
                          <div className="flex flex-wrap gap-2">
                            {step.tools.map((tool, toolIndex) => (
                              <span 
                                key={toolIndex}
                                className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full"
                              >
                                <i className="fas fa-tools mr-1"></i>{tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
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
                                className="text-xs bg-gray-300 dark:bg-gray-600 px-2 py-1 rounded hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
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
        <Button onClick={handlePrint} variant="outline" data-testid="button-print">
          <i className="fas fa-print mr-2"></i>Imprimir Relatório
        </Button>
        <Button onClick={onBack} variant="outline" data-testid="button-back">
          <i className="fas fa-arrow-left mr-2"></i>Voltar
        </Button>
        <Button onClick={handleRestart} className="bg-purple-600 hover:bg-purple-700" data-testid="button-restart">
          <i className="fas fa-redo mr-2"></i>Fazer Novo Diagnóstico
        </Button>
      </div>
    </div>
  );
}
