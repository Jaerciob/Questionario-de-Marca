import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { seoQuestions, seaQuestions, calculateSeoResults, calculateSeaResults } from "@/data/seo-sea-data";
import { trackEvent } from "@/lib/analytics";
import type { SeoResults, SeaResults } from "@shared/schema";

interface IntegratedQuizProps {
  onComplete: (seoResults: SeoResults, seaResults: SeaResults) => void;
  onBack: () => void;
}

type QuizPhase = "seo" | "sea";

export default function IntegratedQuiz({ onComplete, onBack }: IntegratedQuizProps) {
  const [phase, setPhase] = useState<QuizPhase>("seo");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [seoAnswers, setSeoAnswers] = useState<Record<number, string>>({});
  const [seaAnswers, setSeaAnswers] = useState<Record<number, string>>({});
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  const currentQuestions = phase === "seo" ? seoQuestions : seaQuestions;
  const currentAnswers = phase === "seo" ? seoAnswers : seaAnswers;
  const totalQuestions = seoQuestions.length + seaQuestions.length;
  const answeredQuestions = Object.keys(seoAnswers).length + Object.keys(seaAnswers).length;
  const progress = ((answeredQuestions + 1) / totalQuestions) * 100;

  const currentQuestionData = currentQuestions[currentQuestion];
  const phaseProgress = ((currentQuestion + 1) / currentQuestions.length) * 100;

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    if (phase === "seo") {
      const newAnswers = { ...seoAnswers, [currentQuestionData.id]: selectedAnswer };
      setSeoAnswers(newAnswers);

      if (currentQuestion < seoQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer("");
      } else {
        // Move to SEA phase
        setPhase("sea");
        setCurrentQuestion(0);
        setSelectedAnswer("");
        trackEvent('complete_seo_phase', 'engagement', 'quiz');
      }
    } else {
      const newAnswers = { ...seaAnswers, [currentQuestionData.id]: selectedAnswer };
      setSeaAnswers(newAnswers);

      if (currentQuestion < seaQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer("");
      } else {
        // Complete quiz and calculate results
        const seoResults = calculateSeoResults(seoAnswers as any);
        const seaResults = calculateSeaResults(seaAnswers as any);
        trackEvent('complete_integrated_quiz', 'engagement', 'quiz');
        onComplete(seoResults, seaResults);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      const previousAnswer = currentAnswers[currentQuestionData.id] || "";
      setSelectedAnswer(previousAnswer);
    } else if (phase === "sea") {
      setPhase("seo");
      setCurrentQuestion(seoQuestions.length - 1);
      const previousAnswer = seoAnswers[seoQuestions[seoQuestions.length - 1].id] || "";
      setSelectedAnswer(previousAnswer);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-3 rounded-lg ${phase === "seo" ? "bg-green-100 dark:bg-green-900" : "bg-blue-100 dark:bg-blue-900"}`}>
              <i className={`fas ${phase === "seo" ? "fa-leaf" : "fa-rocket"} ${phase === "seo" ? "text-green-600" : "text-blue-600"} text-xl`}></i>
            </div>
            <div>
              <CardTitle className="text-2xl">
                {phase === "seo" ? "Diagnóstico SEO" : "Diagnóstico SEA"}
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-400">
                {phase === "seo" ? "Descubra sua estratégia de SEO" : "Descubra sua estratégia de anúncios pagos"}
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                <span>Progresso Total</span>
                <span>{answeredQuestions + 1}/{totalQuestions}</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <div>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                <span>{phase === "seo" ? "Fase SEO" : "Fase SEA"}</span>
                <span>{currentQuestion + 1}/{currentQuestions.length}</span>
              </div>
              <Progress value={phaseProgress} className="h-2" />
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">{currentQuestionData.question}</h3>
            
            <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
              <div className="space-y-3">
                {currentQuestionData.options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="cursor-pointer flex-1">
                      {option.text}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>

            <div className="flex gap-3 justify-between pt-6 border-t">
              <Button 
                onClick={handlePrevious} 
                variant="outline"
                disabled={currentQuestion === 0 && phase === "seo"}
              >
                <i className="fas fa-arrow-left mr-2"></i>Anterior
              </Button>
              
              <Button 
                onClick={onBack} 
                variant="ghost"
              >
                Cancelar
              </Button>

              <Button 
                onClick={handleNext}
                disabled={!selectedAnswer}
                className="bg-purple-600 hover:bg-purple-700"
              >
                {currentQuestion === currentQuestions.length - 1 && phase === "sea" 
                  ? "Ver Resultados" 
                  : "Próximo"}
                <i className="fas fa-arrow-right ml-2"></i>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
