"use client";

import { useState } from "react";
import PopUpPassageQuiz from "./PopUpPassage";
import QuizCompPassage from "./QuizCompPassage";

export default function QuizSelectorPassage({ tipeSoal }) {
  const [questionCount, setQuestionCount] = useState(null);
  const [isStarted, setIsStarted] = useState(false);

  const handleQuestionCountSubmit = (count) => {
    setQuestionCount(count);
    setIsStarted(!isStarted);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-2 lg:p-24">
      {!isStarted && (
        <PopUpPassageQuiz
          onSubmit={handleQuestionCountSubmit}
          tipeSoal={tipeSoal}
          setIsStarted={setIsStarted}
        />
      )}
      {isStarted && (
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-3xl font-bold text-center mb-8">
            {tipeSoal} Tes
          </h1>
          <QuizCompPassage
            jumlahSoal={questionCount}
            tipeSoal={tipeSoal}
            setIsStarted={setIsStarted}
          />
        </div>
      )}
    </main>
  );
}
