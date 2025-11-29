import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SeoSeaComparison from "@/components/seo-sea-comparison";
import SeoQuizSection from "@/components/seo-quiz-section";
import SeaQuizSection from "@/components/sea-quiz-section";
import IntegratedResults from "@/components/integrated-results";
import type { SeoQuizAnswers, SeaQuizAnswers, SeoResults, SeaResults } from "@shared/schema";

type AppState = "comparison" | "seo-quiz" | "sea-quiz" | "integrated-results";

export default function SeoSea() {
  const [currentState, setCurrentState] = useState<AppState>("comparison");
  const [seoResults, setSeoResults] = useState<SeoResults | null>(null);
  const [seaResults, setSeaResults] = useState<SeaResults | null>(null);

  const handleSeoQuizComplete = (answers: SeoQuizAnswers, results: SeoResults) => {
    setSeoResults(results);
    setCurrentState("sea-quiz");
  };

  const handleSeaQuizComplete = (answers: SeaQuizAnswers, results: SeaResults) => {
    setSeaResults(results);
    setCurrentState("integrated-results");
  };

  const handleRestart = () => {
    setCurrentState("comparison");
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
            <SeoSeaComparison 
              onStartSeo={() => setCurrentState("seo-quiz")}
              onStartSea={() => setCurrentState("sea-quiz")}
            />
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
              onBack={() => setCurrentState("seo-quiz")}
            />
          )}
          
          {currentState === "integrated-results" && seoResults && seaResults && (
            <IntegratedResults 
              seoResults={seoResults}
              seaResults={seaResults}
              onRestart={handleRestart}
              onBack={() => setCurrentState("comparison")}
            />
          )}
        </div>
      </div>
    </>
  );
}