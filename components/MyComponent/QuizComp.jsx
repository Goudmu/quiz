"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { SoalSinonim } from "@/lib/Soal/Sinonim/SoalSinonim";
import { SoalAntonim } from "@/lib/Soal/Antonim/SoalAntonim";
import { SoalPancasila } from "@/lib/Soal/Pancasila/soalPancasila";
import { SoalVerbBahasaInggris } from "@/lib/Soal/verbBahasaInggris/VerbBahasaInggris";
import { SoalVerbBahasaInggris2 } from "@/lib/Soal/verbBahasaInggris/VerbBahasaInggris2";
import { SoalEnglishVocabularyinUseChapter1Part1 } from "@/lib/Soal/EnglishVocabularyinUse/soal1";
import { SoalNounBahasaInggris } from "@/lib/Soal/nounBahasaInggris/NounBahasaInggris";

export default function QuizComp({ jumlahSoal = 3, tipeSoal }) {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (quizData.length === 0) {
      setLoading(true);
      resetQuiz();
    } else {
      setLoading(false);
    }
  }, [quizData]);

  const handleAnswerSelect = (value) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = value;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    let newScore = 0;
    quizData.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
    setIsSubmitted(true);
  };

  const resetQuiz = async () => {
    setLoading(true);
    if (tipeSoal === "sinonim") {
      setQuizData(SoalSinonim(jumlahSoal).slice(0, jumlahSoal));
    } else if (tipeSoal === "antonim") {
      setQuizData(SoalAntonim(jumlahSoal).slice(0, jumlahSoal));
    } else if (tipeSoal === "pancasila") {
      setQuizData(SoalPancasila(jumlahSoal).slice(0, jumlahSoal));
    } else if (tipeSoal === "bahasainggrisverb") {
      setQuizData(SoalVerbBahasaInggris(jumlahSoal).slice(0, jumlahSoal));
    } else if (tipeSoal === "bahasainggrisverb2") {
      setQuizData(SoalVerbBahasaInggris2(jumlahSoal).slice(0, jumlahSoal));
    } else if (tipeSoal === "EnglishVocabularyinuse1.1") {
      setQuizData(
        SoalEnglishVocabularyinUseChapter1Part1(jumlahSoal).slice(0, jumlahSoal)
      );
    } else if (tipeSoal === "bahasainggris/noun") {
      setQuizData(SoalNounBahasaInggris(jumlahSoal).slice(0, jumlahSoal));
    }
    setScore(0);
    setCurrentQuestion(0);
    setIsSubmitted(false);
    setSelectedAnswers([]);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="text-center p-8">
        <p className="text-lg">Loading questions...</p>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Quiz Results</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold mb-2">
              Your score: {score} out of {quizData.length}
            </h2>
          </div>

          <div className="space-y-4 mt-8">
            <h3 className="font-medium text-lg">Question Summary:</h3>
            {quizData.map((question, index) => (
              <div key={index} className="p-4 rounded-lg border">
                <p className="font-medium">{question.question}</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-sm">Your answer:</span>
                  <span
                    className={`font-medium ${
                      selectedAnswers[index] === question.correctAnswer
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {selectedAnswers[index] || "No answer"}
                  </span>
                </div>
                {selectedAnswers[index] !== question.correctAnswer && (
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-sm">Correct answer:</span>
                    <span className="font-medium text-green-600">
                      {question.correctAnswer}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={resetQuiz} className="w-full cursor-pointer">
            Try Again
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>
          Question {currentQuestion + 1} of {quizData.length}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="text-xl font-medium">
            {quizData[currentQuestion].question}
          </div>
          <RadioGroup
            value={selectedAnswers[currentQuestion] ?? ""}
            onValueChange={handleAnswerSelect}
            className="space-y-3"
          >
            {quizData[currentQuestion].options.map((option, index) => (
              <div
                key={index}
                className={`flex items-center space-x-2 rounded-lg border p-4 transition-colors hover:bg-muted cursor-pointer ${
                  selectedAnswers[currentQuestion] === option
                    ? "bg-muted border-primary"
                    : ""
                }`}
                onClick={() => handleAnswerSelect(option)}
              >
                <RadioGroupItem
                  value={option}
                  id={`option-${index}`}
                  className="sr-only"
                />
                <Label
                  htmlFor={`option-${index}`}
                  className="flex flex-1 cursor-pointer items-center justify-between font-normal"
                >
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all"
              style={{
                width: `${((currentQuestion + 1) / quizData.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between flex-col gap-4 md:flex-row md:items-center">
        <div className="flex gap-2">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            variant="outline"
            className={"cursor-pointer w-28"}
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> Previous
          </Button>

          {currentQuestion < quizData.length - 1 ? (
            <Button
              onClick={handleNext}
              disabled={!selectedAnswers[currentQuestion]}
              className={"cursor-pointer w-28"}
            >
              Next <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={selectedAnswers.some((answer) => answer === "")}
              className={"cursor-pointer w-28"}
            >
              Submit Quiz
            </Button>
          )}
        </div>
        <div className="text-sm text-muted-foreground ">
          {selectedAnswers.filter(Boolean).length} of {quizData.length} answered
        </div>
      </CardFooter>
    </Card>
  );
}
