import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { seoQuestions, calculateSeoResults } from "@/data/seo-sea-data";
import { trackEvent } from "@/lib/analytics";
import type { SeoQuizAnswers, SeoResults } from "@shared/schema";

interface SeoQuizSectionProps {
  onComplete: (answers: SeoQuizAnswers, results: SeoResults) => void;
  onBack: () => void;
}

export default function SeoQuizSection({ onComplete, onBack }: SeoQuizSectionProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<SeoQuizAnswers>({});
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  const progress = ((currentQuestion + 1) / seoQuestions.length) * 100;

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleNext = () => {
    if (selectedAnswer) {
      const newAnswers = { ...answers, [seoQuestions[currentQuestion].id]: selectedAnswer };
      setAnswers(newAnswers);
      setSelectedAnswer("");

      if (currentQuestion < seoQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Calculate results and complete quiz
        const results = calculateSeoResults(newAnswers);
        trackEvent('complete_seo_quiz', 'engagement', 'seo_quiz');
        onComplete(newAnswers, results);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      const previousAnswer = answers[seoQuestions[currentQuestion - 1].id] || "";
      setSelectedAnswer(previousAnswer);
    }
  };


  const currentQuestionData = seoQuestions[currentQuestion];

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
              <i className="fas fa-seedling text-green-600 text-xl"></i>
            </div>
            <div>
              <CardTitle className="text-2xl">Diagnóstico SEO Strategy</CardTitle>
              <p className="text-gray-600 dark:text-gray-400">Descubra sua estratégia de SEO personalizada</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>Progresso do Diagnóstico</span>
              <span>{currentQuestion + 1}/{seoQuestions.length}</span>
            </div>
            <Progress value={progress} className="h-2" />
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
                    <Label 
                      htmlFor={option.value} 
                      className="flex-1 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-green-50 dark:hover:bg-green-900/20 transition-all text-gray-900 dark:text-gray-100"
                    >
                      {option.text}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
          
          <div className="flex justify-between mt-8">
            <Button 
              onClick={currentQuestion === 0 ? onBack : handlePrevious}
              variant="outline"
              data-testid="button-previous-seo"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              {currentQuestion === 0 ? "Voltar" : "Anterior"}
            </Button>
            
            <Button 
              onClick={handleNext}
              disabled={!selectedAnswer}
              className="bg-green-600 hover:bg-green-700"
              data-testid="button-next-seo"
            >
              {currentQuestion === seoQuestions.length - 1 ? "Finalizar" : "Próxima"}
              <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}