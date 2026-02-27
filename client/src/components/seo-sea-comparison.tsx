import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { trackEvent } from "@/lib/analytics";

interface SeoSeaComparisonProps {
  onStartSeo: () => void;
  onStartSea: () => void;
}

export default function SeoSeaComparison({ onStartSeo, onStartSea }: SeoSeaComparisonProps) {
  const handleStartSeo = () => {
    trackEvent('start_seo_diagnosis', 'engagement', 'seo_sea_comparison');
    onStartSeo();
  };

  const handleStartSea = () => {
    trackEvent('start_sea_diagnosis', 'engagement', 'seo_sea_comparison');
    onStartSea();
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Estratégia Digital para Escritórios de Advocacia
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Descubra qual estratégia de marketing jurídico é ideal para o seu escritório: 
          crescimento orgânico com SEO ou captação imediata de clientes com SEA
        </p>
      </div>

      {/* SEO vs SEA Cards */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        {/* SEO Card */}
        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                <i className="fas fa-seedling text-green-600 text-2xl"></i>
              </div>
              <div>
                <CardTitle className="text-2xl">SEO - Search Engine Optimization</CardTitle>
                <CardDescription className="text-green-600 font-semibold">Crescimento Orgânico</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>O que é:</strong> Estratégia para posicionar o site do escritório nos primeiros resultados quando clientes buscam por advogados ou serviços jurídicos, sem pagar por anúncios.
            </p>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">✅ Vantagens:</h4>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                <li>• Clientes encontram o escritório naturalmente</li>
                <li>• Maior confiança e credibilidade profissional</li>
                <li>• Investimento de longo prazo duradouro</li>
                <li>• Custo por cliente diminui com o tempo</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">⚠️ Desafios:</h4>
              <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                <li>• Primeiros clientes chegam em 3-6 meses</li>
                <li>• Precisa de conhecimento em SEO jurídico</li>
                <li>• Necessita conteúdo educativo constante</li>
                <li>• Competição com outros escritórios</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">🎯 Ideal para:</h4>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                <li>• Escritórios com visão de crescimento sustentável</li>
                <li>• Advogados com orçamento inicial limitado</li>
                <li>• Áreas do direito com boa demanda online</li>
                <li>• Profissionais que gostam de escrever</li>
              </ul>
            </div>
            
            <Button 
              onClick={handleStartSeo}
              className="w-full mt-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              data-testid="button-start-seo"
            >
              <i className="fas fa-chart-line mr-2"></i>Avaliar Estratégia SEO
            </Button>
          </CardContent>
        </Card>

        {/* SEA Card */}
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                <i className="fas fa-rocket text-blue-600 text-2xl"></i>
              </div>
              <div>
                <CardTitle className="text-2xl">SEA - Search Engine Advertising</CardTitle>
                <CardDescription className="text-blue-600 font-semibold">Anúncios Pagos</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>O que é:</strong> Campanhas pagas no Google Ads, Facebook e LinkedIn para captar clientes em busca de serviços jurídicos imediatamente.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">✅ Vantagens:</h4>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                <li>• Primeiros clientes chegam em dias</li>
                <li>• Controle total do orçamento diário</li>
                <li>• Mira em pessoas com problemas jurídicos específicos</li>
                <li>• Acompanha consultas e contrações em tempo real</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">⚠️ Desafios:</h4>
              <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                <li>• Precisa investir mensalmente para manter clientes</li>
                <li>• Áreas concorridas (divorcio, trabalhista) custam mais</li>
                <li>• Requer acompanhamento e ajustes frequentes</li>
                <li>• Parou de investir, param de chegar clientes</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">🎯 Ideal para:</h4>
              <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                <li>• Escritórios que precisam de clientes rapidamente</li>
                <li>• Lançamento de novo escritório ou área jurídica</li>
                <li>• Advogados com orçamento para investimento</li>
                <li>• Áreas muito concorridas no Google</li>
              </ul>
            </div>
            
            <Button 
              onClick={handleStartSea}
              className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
              data-testid="button-start-sea"
            >
              <i className="fas fa-bullhorn mr-2"></i>Avaliar Estratégia SEA
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Comparison Table */}
      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Comparativo Rápido</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Aspecto</th>
                  <th className="text-center py-4 px-4 font-semibold text-green-600">SEO</th>
                  <th className="text-center py-4 px-4 font-semibold text-blue-600">SEA</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">Tempo para Resultados</td>
                  <td className="py-4 px-4 text-center">3-6 meses</td>
                  <td className="py-4 px-4 text-center">Imediato</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">Custo Inicial</td>
                  <td className="py-4 px-4 text-center">Baixo</td>
                  <td className="py-4 px-4 text-center">Médio/Alto</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">Sustentabilidade</td>
                  <td className="py-4 px-4 text-center">Alta</td>
                  <td className="py-4 px-4 text-center">Depende do investimento</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">Credibilidade</td>
                  <td className="py-4 px-4 text-center">Muito Alta</td>
                  <td className="py-4 px-4 text-center">Média</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">Controle de Resultados</td>
                  <td className="py-4 px-4 text-center">Limitado</td>
                  <td className="py-4 px-4 text-center">Total</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
        <CardContent className="text-center p-8">
          <h3 className="text-2xl font-bold mb-4">Não Sabe Qual Escolher?</h3>
          <p className="mb-6">Faça os dois diagnósticos e compare os resultados para tomar a melhor decisão para o seu escritório!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleStartSeo}
              variant="secondary" 
              className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100"
              data-testid="button-cta-seo"
            >
              Começar com SEO
            </Button>
            <Button 
              onClick={handleStartSea}
              variant="secondary" 
              className="px-8 py-3 bg-white text-purple-600 hover:bg-gray-100"
              data-testid="button-cta-sea"
            >
              Começar com SEA
            </Button>
          </div>
          <div className="mt-6">
            <Button 
              onClick={() => {
                trackEvent('click_marketingjur_cta', 'engagement', 'seo_sea_comparison');
                window.open('https://www.marketingjur.com.br', '_blank');
              }}
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold px-10 py-4 transition-all"
            >
              Desenvolva sua estratégia de Marketing de Resultados
              <i className="fas fa-external-link-alt ml-2"></i>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}