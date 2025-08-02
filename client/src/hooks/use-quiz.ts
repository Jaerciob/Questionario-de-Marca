import { useState, useCallback } from "react";
import { quizData } from "@/data/quiz-data";

interface UseQuizReturn {
  currentQuestion: number;
  answers: Record<string, string>;
  selectedOption: string | null;
  progress: number;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  currentQuestionData: typeof quizData[0];
  selectOption: (value: string) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  resetQuiz: () => void;
  canProceed: boolean;
}

export function useQuiz(): UseQuizReturn {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const progress = ((currentQuestion + 1) / quizData.length) * 100;
  const isFirstQuestion = currentQuestion === 0;
  const isLastQuestion = currentQuestion === quizData.length - 1;
  const currentQuestionData = quizData[currentQuestion];
  const canProceed = selectedOption !== null;

  const selectOption = useCallback((value: string) => {
    setSelectedOption(value);
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.toString()]: value
    }));
  }, [currentQuestion]);

  const nextQuestion = useCallback(() => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      // Load previous answer for next question if it exists
      const nextQuestionAnswer = answers[(currentQuestion + 1).toString()];
      setSelectedOption(nextQuestionAnswer || null);
    }
  }, [currentQuestion, answers]);

  const previousQuestion = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      // Load previous answer for previous question
      const prevQuestionAnswer = answers[(currentQuestion - 1).toString()];
      setSelectedOption(prevQuestionAnswer || null);
    }
  }, [currentQuestion, answers]);

  const resetQuiz = useCallback(() => {
    setCurrentQuestion(0);
    setAnswers({});
    setSelectedOption(null);
  }, []);

  // Update selected option when question changes
  const updateSelectedOption = useCallback(() => {
    const currentAnswer = answers[currentQuestion.toString()];
    setSelectedOption(currentAnswer || null);
  }, [currentQuestion, answers]);

  // Call this when currentQuestion changes
  useState(() => {
    updateSelectedOption();
  });

  return {
    currentQuestion,
    answers,
    selectedOption,
    progress,
    isFirstQuestion,
    isLastQuestion,
    currentQuestionData,
    selectOption,
    nextQuestion,
    previousQuestion,
    resetQuiz,
    canProceed
  };
}
