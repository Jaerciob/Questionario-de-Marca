import { useState, useEffect } from "react";
import { quizData } from "@/data/quiz-data";
import ProgressBar from "@/components/progress-bar";

interface QuizSectionProps {
  onComplete: (answers: Record<string, string>) => void;
}

export default function QuizSection({ onComplete }: QuizSectionProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const question = quizData[currentQuestion];
  const progress = ((currentQuestion + 1) / quizData.length) * 100;

  useEffect(() => {
    // Reset selected option when question changes
    setSelectedOption(answers[currentQuestion.toString()] || null);
  }, [currentQuestion, answers]);

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value);
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.toString()]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      onComplete(answers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  return (
    <>
      <ProgressBar 
        current={currentQuestion + 1}
        total={quizData.length}
        percentage={progress}
      />

      <div className="glass-morphism p-8 max-w-4xl mx-auto mb-8">
        <div className="mb-6">
          <span className="inline-block text-sm font-bold text-white bg-blue-600 bg-opacity-80 px-4 py-2 rounded-full">
            {question.section}
          </span>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white leading-tight">
          {question.question}
        </h2>
        
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <div
              key={index}
              className={`option-item ${selectedOption === option.value ? 'option-selected' : ''}`}
              onClick={() => handleOptionSelect(option.value)}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full border-2 border-blue-600 mr-4 flex items-center justify-center font-bold">
                  {String.fromCharCode(65 + index)}
                </div>
                <span className="font-medium">{option.text}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handlePrevious}
            className={`px-6 py-3 bg-gray-600 bg-opacity-50 text-gray-300 rounded-lg hover:bg-opacity-70 transition-all ${
              currentQuestion === 0 ? 'hidden' : ''
            }`}
          >
            <i className="fas fa-arrow-left mr-2"></i>Anterior
          </button>
          
          <div className="ml-auto">
            <button
              onClick={handleNext}
              disabled={!selectedOption}
              className="btn-primary px-8 py-3"
            >
              {currentQuestion === quizData.length - 1 ? 'Finalizar' : 'Próxima'}
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
