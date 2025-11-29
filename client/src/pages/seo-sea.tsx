import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SeoSeaComparison from "@/components/seo-sea-comparison";
import IntegratedQuiz from "@/components/integrated-quiz";
import IntegratedResults from "@/components/integrated-results";
import type { SeoResults, SeaResults } from "@shared/schema";

type AppState = "comparison" | "integrated-quiz" | "integrated-results";

export default function SeoSea() {
  const [currentState, setCurrentState] = useState<AppState>("comparison");
  const [seoResults, setSeoResults] = useState<SeoResults | null>(null);
  const [seaResults, setSeaResults] = useState<SeaResults | null>(null);

  const handleQuizComplete = (seoResults: SeoResults, seaResults: SeaResults) => {
    setSeoResults(seoResults);
    setSeaResults(seaResults);
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
              onStartSeo={() => setCurrentState("integrated-quiz")}
              onStartSea={() => setCurrentState("integrated-quiz")}
            />
          )}
          
          {currentState === "integrated-quiz" && (
            <IntegratedQuiz 
              onComplete={handleQuizComplete}
              onBack={() => setCurrentState("comparison")}
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