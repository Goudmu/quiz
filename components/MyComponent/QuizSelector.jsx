"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PopUpQuiz from "./PopUp";
import QuizComp from "./QuizComp";

export default function QuizSelector({ tipeSoal }) {
  const [questionCount, setQuestionCount] = useState(null);
  const [showSelector, setShowSelector] = useState(true);
  const [isStarted, setIsStarted] = useState(false);

  const handleQuestionCountSubmit = (count) => {
    setQuestionCount(count);
    setShowSelector(false);
  };

  const handleStartQuiz = () => {
    setIsStarted(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-2 lg:p-24">
      {showSelector && tipeSoal != "bahasainggris/passage" && (
        <PopUpQuiz onSubmit={handleQuestionCountSubmit} />
      )}
      {questionCount !== null &&
        !isStarted &&
        !showSelector &&
        tipeSoal != "bahasainggris/passage" && (
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Quiz Ready!</CardTitle>
              <CardDescription>
                Your quiz has been set up with {questionCount} questions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                You can now start your quiz or modify the settings.
              </p>
              <div className="flex justify-between">
                <Button
                  className="cursor-pointer"
                  variant="outline"
                  onClick={() => setShowSelector(true)}
                >
                  Change Settings
                </Button>
                <Button
                  className="cursor-pointer"
                  onClick={() => handleStartQuiz()}
                >
                  Start Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      {(isStarted || tipeSoal == "bahasainggris/passage") && (
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-3xl font-bold text-center mb-8">
            {tipeSoal} Tes
          </h1>
          <QuizComp
            jumlahSoal={questionCount}
            tipeSoal={tipeSoal}
            setShowSelector={setShowSelector}
          />
        </div>
      )}
    </main>
  );
}
