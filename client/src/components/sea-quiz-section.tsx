import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { seaQuestions } from "@/data/seo-sea-data";
import { trackEvent } from "@/lib/analytics";
import type { SeaQuizAnswers, SeaResults } from "@shared/schema";

interface SeaQuizSectionProps {
  onComplete: (answers: SeaQuizAnswers, results: SeaResults) => void;
  onBack: () => void;
}

export default function SeaQuizSection({ onComplete, onBack }: SeaQuizSectionProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<SeaQuizAnswers>({});
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  const progress = ((currentQuestion + 1) / seaQuestions.length) * 100;

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleNext = () => {
    if (selectedAnswer) {
      const newAnswers = { ...answers, [seaQuestions[currentQuestion].id]: selectedAnswer };
      setAnswers(newAnswers);
      setSelectedAnswer("");

      if (currentQuestion < seaQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Calculate results and complete quiz
        const results = calculateSeaResults(newAnswers);
        trackEvent('complete_sea_quiz', 'engagement', 'sea_quiz');
        onComplete(newAnswers, results);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      const previousAnswer = answers[seaQuestions[currentQuestion - 1].id] || "";
      setSelectedAnswer(previousAnswer);
    }
  };

  const calculateSeaResults = (answers: SeaQuizAnswers): SeaResults => {
    const { calculateSeaResults: calcSea } = require('@/data/seo-sea-data');
    return calcSea(answers);
  };

  const currentQuestionData = seaQuestions[currentQuestion];

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
              <i className="fas fa-rocket text-blue-600 text-xl"></i>
            </div>
            <div>
              <CardTitle className="text-2xl">Diagnóstico SEA Strategy</CardTitle>
              <p className="text-gray-600 dark:text-gray-400">Descubra sua estratégia de anúncios pagos personalizada</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>Progresso do Diagnóstico</span>
              <span>{currentQuestion + 1}/{seaQuestions.length}</span>
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
                      className="flex-1 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all text-gray-900 dark:text-gray-100"
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
              data-testid="button-previous-sea"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              {currentQuestion === 0 ? "Voltar" : "Anterior"}
            </Button>
            
            <Button 
              onClick={handleNext}
              disabled={!selectedAnswer}
              className="bg-blue-600 hover:bg-blue-700"
              data-testid="button-next-sea"
            >
              {currentQuestion === seaQuestions.length - 1 ? "Finalizar" : "Próxima"}
              <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}