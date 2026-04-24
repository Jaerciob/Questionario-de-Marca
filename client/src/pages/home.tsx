import { useState } from "react";
import { Helmet } from "react-helmet-async";
import WelcomeSection from "@/components/welcome-section";
import FirmInfoForm from "@/components/firm-info-form";
import QuizSection from "@/components/quiz-section";
import ResultsSection from "@/components/results-section";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import type { InsertFirmInfo } from "@shared/schema";

type AppState = "welcome" | "firm-info" | "quiz" | "results";

export default function Home() {
  const [currentState, setCurrentState] = useState<AppState>("welcome");
  const [firmInfo, setFirmInfo] = useState<InsertFirmInfo | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});

  const handleFirmInfoSubmit = (info: InsertFirmInfo) => {
    setFirmInfo(info);
    setCurrentState("quiz");
  };

  const handleQuizComplete = (answers: Record<string, string>) => {
    setQuizAnswers(answers);
    setCurrentState("results");
  };

  const handleRestart = () => {
    setCurrentState("welcome");
    setFirmInfo(null);
    setQuizAnswers({});
  };

  return (
    <>
      <Helmet>
        <title>Diagnóstico de Branding para Escritórios de Advocacia</title>
        <meta 
          name="description" 
          content="Ferramenta completa para avaliar e otimizar a estratégia de marca do seu escritório de advocacia. Diagnóstico em 15 minutos com relatório personalizado." 
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Helmet>
      
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6 flex justify-end">
            <Link href="/admin">
              <Button variant="outline" className="border-slate-700 text-white bg-transparent">
                Área administrativa
              </Button>
            </Link>
          </div>
          {currentState === "welcome" && (
            <WelcomeSection onStart={() => setCurrentState("firm-info")} />
          )}
          
          {currentState === "firm-info" && (
            <FirmInfoForm onSubmit={handleFirmInfoSubmit} />
          )}
          
          {currentState === "quiz" && (
            <QuizSection onComplete={handleQuizComplete} />
          )}
          
          {currentState === "results" && firmInfo && (
            <ResultsSection 
              firmInfo={firmInfo}
              answers={quizAnswers}
              onRestart={handleRestart}
            />
          )}
        </div>
      </div>
    </>
  );
}
