import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import SeoSeaComparison from "@/components/seo-sea-comparison";
import SeoQuizSection from "@/components/seo-quiz-section";
import SeaQuizSection from "@/components/sea-quiz-section";
import SeoResultsSection from "@/components/seo-results-section";
import SeaResultsSection from "@/components/sea-results-section";
import type { SeoQuizAnswers, SeaQuizAnswers, SeoResults, SeaResults } from "@shared/schema";

type AppState = "comparison" | "seo-quiz" | "sea-quiz" | "seo-results" | "sea-results";

export default function SeoSea() {
  const [currentState, setCurrentState] = useState<AppState>("comparison");
  const [seoAnswers, setSeoAnswers] = useState<SeoQuizAnswers>({});
  const [seaAnswers, setSeaAnswers] = useState<SeaQuizAnswers>({});
  const [seoResults, setSeoResults] = useState<SeoResults | null>(null);
  const [seaResults, setSeaResults] = useState<SeaResults | null>(null);

  const handleSeoQuizComplete = (answers: SeoQuizAnswers, results: SeoResults) => {
    setSeoAnswers(answers);
    setSeoResults(results);
    setCurrentState("seo-results");
  };

  const handleSeaQuizComplete = (answers: SeaQuizAnswers, results: SeaResults) => {
    setSeaAnswers(answers);
    setSeaResults(results);
    setCurrentState("sea-results");
  };

  const handleRestart = () => {
    setCurrentState("comparison");
    setSeoAnswers({});
    setSeaAnswers({});
    setSeoResults(null);
    setSeaResults(null);
  };

  return (
    <>
      <Helmet>
        <title>Diagnóstico SEO e SEA - Estratégia Digital Personalizada</title>
        <meta 
          name="description" 
          content="Descubra qual estratégia de marketing digital é ideal para seu negócio: crescimento orgânico com SEO ou resultados imediatos com SEA. Diagnóstico completo em minutos." 
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-8">
          {currentState === "comparison" && (
            <div className="space-y-8">
              <SeoSeaComparison 
                onStartSeo={() => setCurrentState("seo-quiz")}
                onStartSea={() => setCurrentState("sea-quiz")}
              />
              <div className="flex justify-center pb-12">
                <Button 
                  onClick={() => {
                    trackEvent('click_marketingjur_cta_seo_sea_main', 'engagement', 'seo_sea_page');
                    window.open('https://www.marketingjur.com.br', '_blank');
                  }}
                  variant="outline"
                  className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 font-bold px-10 py-6 text-lg shadow-xl transition-all rounded-xl"
                >
                  Desenvolva sua estratégia de Marketing de Resultados
                  <i className="fas fa-external-link-alt ml-2"></i>
                </Button>
              </div>
            </div>
          )}
          
          {currentState === "seo-quiz" && (
            <SeoQuizSection 
              onComplete={handleSeoQuizComplete}
              onBack={() => setCurrentState("comparison")}
            />
          )}
          
          {currentState === "sea-quiz" && (
            <SeaQuizSection 
              onComplete={handleSeaQuizComplete}
              onBack={() => setCurrentState("comparison")}
            />
          )}
          
          {currentState === "seo-results" && seoResults && (
            <SeoResultsSection 
              answers={seoAnswers}
              results={seoResults}
              onRestart={handleRestart}
              onBack={() => setCurrentState("comparison")}
            />
          )}
          
          {currentState === "sea-results" && seaResults && (
            <SeaResultsSection 
              answers={seaAnswers}
              results={seaResults}
              onRestart={handleRestart}
              onBack={() => setCurrentState("comparison")}
            />
          )}
        </div>
      </div>
    </>
  );
}