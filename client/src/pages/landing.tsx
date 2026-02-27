import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { trackEvent } from "@/lib/analytics";

export default function Landing() {
  const handleBrandingClick = () => {
    trackEvent('select_branding_diagnosis', 'engagement', 'landing_page');
  };

  const handleSeoSeaClick = () => {
    trackEvent('select_seo_sea_diagnosis', 'engagement', 'landing_page');
  };

  return (
    <>
      <Helmet>
        <title>Diagnósticos Especializados para Escritórios de Advocacia</title>
        <meta 
          name="description" 
          content="Ferramentas completas de diagnóstico para escritórios de advocacia: análise de branding jurídico e estratégias de marketing digital (SEO/SEA). Relatórios personalizados em minutos." 
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Helmet>
      
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="glass-morphism p-8 md:p-12 max-w-5xl mx-auto">
              <div className="mb-8">
                <i className="fas fa-balance-scale text-6xl md:text-8xl text-blue-300 mb-6"></i>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                  Diagnósticos Especializados
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                  para Escritórios de Advocacia
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Oferecemos duas ferramentas completas e especializadas para avaliar e otimizar a presença do seu escritório de advocacia no mercado jurídico brasileiro. Cada diagnóstico é personalizado para as necessidades específicas da advocacia.
                </p>
              </div>

              {/* Tool Features Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm border border-white border-opacity-20">
                  <i className="fas fa-clock text-4xl text-blue-300 mb-4"></i>
                  <h3 className="font-bold text-lg mb-2 text-white">Rápido e Eficiente</h3>
                  <p className="text-gray-300">10-15 minutos</p>
                  <p className="text-sm text-gray-400 mt-1">Por diagnóstico completo</p>
                </div>
                <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm border border-white border-opacity-20">
                  <i className="fas fa-gavel text-4xl text-orange-400 mb-4"></i>
                  <h3 className="font-bold text-lg mb-2 text-white">Especializado</h3>
                  <p className="text-gray-300">100% Jurídico</p>
                  <p className="text-sm text-gray-400 mt-1">Desenvolvido para advogados</p>
                </div>
                <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm border border-white border-opacity-20">
                  <i className="fas fa-chart-line text-4xl text-green-400 mb-4"></i>
                  <h3 className="font-bold text-lg mb-2 text-white">Relatórios Detalhados</h3>
                  <p className="text-gray-300">Com recomendações</p>
                  <p className="text-sm text-gray-400 mt-1">Planos de ação personalizados</p>
                </div>
              </div>
            </div>
          </div>

          {/* Diagnostic Options */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Branding Diagnosis */}
            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <i className="fas fa-palette text-5xl mb-4"></i>
                  <h3 className="text-2xl font-bold mb-3">Diagnóstico de Branding Jurídico</h3>
                  <p className="text-blue-100 mb-6">
                    Análise completa da identidade, posicionamento e estratégia de marca do seu escritório no mercado jurídico
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-lg mb-3">O que você receberá:</h4>
                  <div className="grid grid-cols-1 gap-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-check-circle text-green-300"></i>
                      <span>Análise de identidade da marca</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-check-circle text-green-300"></i>
                      <span>Avaliação de posicionamento no mercado</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-check-circle text-green-300"></i>
                      <span>Estratégias de comunicação jurídica</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-check-circle text-green-300"></i>
                      <span>Identificação de arquétipo profissional</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-check-circle text-green-300"></i>
                      <span>Paleta de cores personalizada</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-check-circle text-green-300"></i>
                      <span>Plano de ação com prioridades</span>
                    </div>
                  </div>
                </div>

                <Link href="/branding">
                  <Button 
                    onClick={handleBrandingClick}
                    className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 text-lg shadow-lg"
                    data-testid="button-start-branding-diagnosis"
                  >
                    <i className="fas fa-play mr-3"></i>
                    Iniciar Diagnóstico de Branding
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* SEO/SEA Diagnosis */}
            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-green-600 to-blue-700 text-white">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <i className="fas fa-rocket text-5xl mb-4"></i>
                  <h3 className="text-2xl font-bold mb-3">Diagnóstico SEO & SEA</h3>
                  <p className="text-green-100 mb-6">
                    Avaliação completa das estratégias de marketing digital: SEO orgânico e campanhas pagas (SEA) para escritórios
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-lg mb-3">O que você receberá:</h4>
                  <div className="grid grid-cols-1 gap-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-check-circle text-green-300"></i>
                      <span>Análise de maturidade SEO jurídico</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-check-circle text-green-300"></i>
                      <span>Estratégia de campanhas pagas (SEA)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-check-circle text-green-300"></i>
                      <span>Comparativo SEO vs SEA para advocacia</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-check-circle text-green-300"></i>
                      <span>Plataformas recomendadas por área jurídica</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-check-circle text-green-300"></i>
                      <span>Orçamento otimizado por especialidade</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-check-circle text-green-300"></i>
                      <span>Cronograma de implementação</span>
                    </div>
                  </div>
                </div>

                <Link href="/seo-sea">
                  <Button 
                    onClick={handleSeoSeaClick}
                    className="w-full bg-white text-green-600 hover:bg-gray-100 font-semibold py-4 text-lg shadow-lg"
                    data-testid="button-start-seo-sea-diagnosis"
                  >
                    <i className="fas fa-search mr-3"></i>
                    Iniciar Diagnóstico SEO & SEA
                  </Button>
                </Link>
                <div className="mt-4">
                  <Button 
                    onClick={() => {
                      trackEvent('click_marketingjur_cta_landing', 'engagement', 'landing_page');
                      window.open('https://www.marketingjur.com.br', '_blank');
                    }}
                    variant="outline"
                    className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-3 transition-all"
                  >
                    Desenvolva sua estratégia de Marketing de Resultados
                    <i className="fas fa-external-link-alt ml-2"></i>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-16 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold text-white mb-4">
                <i className="fas fa-lightbulb text-yellow-300 mr-3"></i>
                Por que fazer os diagnósticos?
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                O mercado jurídico está cada vez mais competitivo. Escritórios que investem em branding sólido e estratégias de marketing digital adequadas têm 3x mais chances de captar e reter clientes. Nossos diagnósticos foram desenvolvidos especificamente para a realidade da advocacia brasileira, considerando aspectos éticos e regulamentares da profissão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}