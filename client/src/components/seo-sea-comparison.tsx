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
          Escolha Sua Estratégia Digital
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Descubra qual estratégia de marketing digital é ideal para o seu negócio: 
          crescimento orgânico com SEO ou resultados imediatos com SEA
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
              <strong>O que é:</strong> Estratégia para melhorar o posicionamento natural do seu site nos resultados de busca do Google, sem pagar por anúncios.
            </p>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">✅ Vantagens:</h4>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                <li>• Tráfego gratuito e sustentável</li>
                <li>• Maior credibilidade e confiança</li>
                <li>• Resultados duradouros</li>
                <li>• ROI crescente ao longo do tempo</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">⚠️ Desafios:</h4>
              <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                <li>• Resultados a médio/longo prazo (3-6 meses)</li>
                <li>• Requer conhecimento técnico</li>
                <li>• Produção constante de conteúdo</li>
                <li>• Competição alta em alguns nichos</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">🎯 Ideal para:</h4>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                <li>• Negócios que pensam no longo prazo</li>
                <li>• Empresas com orçamento limitado</li>
                <li>• Nichos com boa demanda de busca</li>
                <li>• Quem pode investir em conteúdo</li>
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
              <strong>O que é:</strong> Estratégia de anúncios pagos no Google Ads, Facebook Ads e outras plataformas para gerar tráfego e vendas imediatas.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">✅ Vantagens:</h4>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                <li>• Resultados imediatos</li>
                <li>• Controle total do investimento</li>
                <li>• Segmentação precisa do público</li>
                <li>• Métricas detalhadas em tempo real</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">⚠️ Desafios:</h4>
              <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                <li>• Requer investimento contínuo</li>
                <li>• Competição pode encarecer cliques</li>
                <li>• Necessita otimização constante</li>
                <li>• Resultados param quando para o investimento</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">🎯 Ideal para:</h4>
              <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                <li>• Negócios que precisam de resultados rápidos</li>
                <li>• Lançamento de produtos/serviços</li>
                <li>• Empresas com orçamento para investir</li>
                <li>• Nichos com alta concorrência orgânica</li>
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
          <p className="mb-6">Faça os dois diagnósticos e compare os resultados para tomar a melhor decisão para o seu negócio!</p>
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
        </CardContent>
      </Card>
    </div>
  );
}