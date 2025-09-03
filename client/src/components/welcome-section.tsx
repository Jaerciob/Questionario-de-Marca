import { CanvasButton } from "./canvas-button";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import { Link } from "wouter";

interface WelcomeSectionProps {
  onStart: () => void;
}

export default function WelcomeSection({ onStart }: WelcomeSectionProps) {
  const handleStartDiagnosis = () => {
    trackEvent('start_diagnosis', 'engagement', 'welcome_button');
    onStart();
  };

  return (
    <div className="text-center mb-12">
      <div className="glass-morphism p-6 md:p-12 max-w-4xl mx-auto">
        <div className="mb-8">
          <i className="fas fa-balance-scale text-6xl md:text-8xl text-blue-300 mb-6"></i>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Diagnóstico de Branding
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            para Escritórios de Advocacia
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Uma ferramenta completa e especializada para avaliar, analisar e otimizar a estratégia de marca do seu escritório de advocacia no mercado jurídico brasileiro.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm border border-white border-opacity-20">
            <i className="fas fa-clock text-4xl text-blue-300 mb-4"></i>
            <h3 className="font-bold text-lg mb-2 text-white">Tempo Estimado</h3>
            <p className="text-gray-300">10-15 minutos</p>
            <p className="text-sm text-gray-400 mt-1">Análise completa e eficiente</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm border border-white border-opacity-20">
            <i className="fas fa-list-check text-4xl text-orange-400 mb-4"></i>
            <h3 className="font-bold text-lg mb-2 text-white">21 Questões</h3>
            <p className="text-gray-300">Estratégicas e objetivas</p>
            <p className="text-sm text-gray-400 mt-1">Incluindo avaliação de canais digitais</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm border border-white border-opacity-20">
            <i className="fas fa-chart-line text-4xl text-green-400 mb-4"></i>
            <h3 className="font-bold text-lg mb-2 text-white">Relatório Completo</h3>
            <p className="text-gray-300">Com recomendações personalizadas</p>
            <p className="text-sm text-gray-400 mt-1">Incluindo gráficos e insights</p>
          </div>
        </div>
        
        <div className="space-y-4 mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">O que você receberá:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-center space-x-3">
              <i className="fas fa-check-circle text-green-400 text-xl"></i>
              <span className="text-gray-300">Análise de identidade da marca</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-check-circle text-green-400 text-xl"></i>
              <span className="text-gray-300">Avaliação de posicionamento</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-check-circle text-green-400 text-xl"></i>
              <span className="text-gray-300">Estratégias de comunicação</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-check-circle text-green-400 text-xl"></i>
              <span className="text-gray-300">Experiência do cliente</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-check-circle text-green-400 text-xl"></i>
              <span className="text-gray-300">Identificação de arquétipo</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-check-circle text-green-400 text-xl"></i>
              <span className="text-gray-300">Paleta de cores personalizada</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={handleStartDiagnosis} className="btn-primary text-lg px-10 py-4 shadow-lg">
            <i className="fas fa-play mr-3"></i>Iniciar Diagnóstico de Branding
          </button>
          <CanvasButton variant="secondary" size="lg" />
        </div>
        
        {/* SEO/SEA Diagnosis Navigation */}
        <div className="mt-8 pt-8 border-t border-white border-opacity-20">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              <i className="fas fa-rocket mr-3 text-blue-300"></i>
              Diagnósticos de Marketing Digital
            </h3>
            <p className="text-gray-300 mb-6">
              Também oferecemos diagnósticos especializados em SEO e SEA para complementar sua estratégia de branding
            </p>
          </div>
          
          <Link href="/seo-sea">
            <Button 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg"
              data-testid="button-navigate-seo-sea"
              onClick={() => trackEvent('navigate_to_seo_sea', 'engagement', 'welcome_page')}
            >
              <i className="fas fa-search mr-3"></i>
              Diagnóstico SEO & SEA
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
