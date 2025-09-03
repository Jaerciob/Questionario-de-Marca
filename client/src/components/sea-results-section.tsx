import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { trackEvent } from "@/lib/analytics";
import type { SeaQuizAnswers, SeaResults } from "@shared/schema";

interface SeaResultsSectionProps {
  answers: SeaQuizAnswers;
  results: SeaResults;
  onRestart: () => void;
  onBack: () => void;
}

export default function SeaResultsSection({ answers, results, onRestart, onBack }: SeaResultsSectionProps) {
  const handlePrint = () => {
    trackEvent('print_sea_report', 'engagement', 'sea_results');
    window.print();
  };

  const handleRestart = () => {
    trackEvent('restart_sea_diagnosis', 'engagement', 'sea_results');
    onRestart();
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Results Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
              <i className="fas fa-chart-bar text-blue-600 text-xl"></i>
            </div>
            <div>
              <CardTitle className="text-2xl">Resultado do Diagnóstico SEA</CardTitle>
              <p className="text-gray-600 dark:text-gray-400">Seu plano de anúncios pagos personalizado</p>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Experience Level */}
            <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
              <CardContent className="p-6 text-center">
                <i className="fas fa-user-tie text-3xl mb-3"></i>
                <h3 className="text-xl font-bold mb-2">Nível de Experiência</h3>
                <p className="text-2xl font-bold">{results.experienceLevel}</p>
              </CardContent>
            </Card>

            {/* Platform Focus */}
            <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
              <CardContent className="p-6 text-center">
                <i className="fas fa-target text-3xl mb-3"></i>
                <h3 className="text-xl font-bold mb-2">Plataforma Principal</h3>
                <p className="text-2xl font-bold">{results.platformFocus}</p>
              </CardContent>
            </Card>

            {/* Budget Range */}
            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
              <CardContent className="p-6 text-center">
                <i className="fas fa-dollar-sign text-3xl mb-3"></i>
                <h3 className="text-xl font-bold mb-2">Orçamento Mensal</h3>
                <p className="text-2xl font-bold">{results.budgetRange}</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* SEA Analysis Chart Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <i className="fas fa-chart-pie text-blue-600"></i>
            Análise de Readiness SEA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-chart-pie text-4xl text-gray-400 mb-2"></i>
                <p className="text-gray-500">Gráfico Radar</p>
                <p className="text-sm text-gray-400">(Em desenvolvimento)</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Plan Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <i className="fas fa-rocket text-blue-600"></i>
            Plano de Ação SEA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-semibold">Configuração de Contas e Pixels</h4>
                    <Badge variant="destructive">Alta</Badge>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      <i className="fas fa-clock mr-1"></i>1 semana
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Configurar contas nas plataformas e implementar tracking básico.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                    <p className="text-sm text-purple-800 dark:text-purple-300">
                      <strong>Exemplo prático:</strong> Criar conta Google Ads, instalar Google Tag Manager e Facebook Pixel
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center text-gray-500">
              <p>Plano de ação completo será implementado em breve...</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={handlePrint} variant="outline" data-testid="button-print-sea">
          <i className="fas fa-print mr-2"></i>Imprimir Relatório
        </Button>
        <Button onClick={onBack} variant="outline" data-testid="button-back-sea">
          <i className="fas fa-arrow-left mr-2"></i>Voltar à Comparação
        </Button>
        <Button onClick={handleRestart} className="bg-blue-600 hover:bg-blue-700" data-testid="button-restart-sea">
          <i className="fas fa-redo mr-2"></i>Fazer Novo Diagnóstico
        </Button>
      </div>
    </div>
  );
}