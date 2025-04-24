"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PopUpQuiz({ onSubmit }) {
  const [open, setOpen] = useState(true);
  const [questionCount, setQuestionCount] = useState(5);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (questionCount < 1) {
      setError("Please enter at least 1 question");
      return;
    }

    if (questionCount > 50) {
      setError("Maximum 50 questions allowed");
      return;
    }

    setError("");
    onSubmit(questionCount);
    setOpen(false);
  };

  const handleChange = (e) => {
    const value = Number.parseInt(e.target.value);
    if (isNaN(value)) {
      setQuestionCount(0);
    } else {
      setQuestionCount(value);
      setError("");
    }
  };

  return (
    <div className=" border-2 border-gray-300 rounded-lg p-2 lg:p-4 shadow-md bg-white w-full max-w-md mx-auto mt-10">
      <h2>Quiz Setup</h2>
      <h5>Enter the number of questions you want in your quiz.</h5>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="questionCount" className="text-right">
            Questions
          </Label>
          <div className="col-span-3">
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                type="button"
                onClick={() => setQuestionCount(Math.max(1, questionCount - 1))}
                className="rounded-r-none cursor-pointer"
              >
                -
              </Button>
              <Input
                id="questionCount"
                type="number"
                value={questionCount}
                onChange={handleChange}
                min={1}
                max={50}
                className="rounded-none text-center"
              />
              <Button
                variant="outline"
                size="icon"
                type="button"
                onClick={() =>
                  setQuestionCount(Math.min(50, questionCount + 1))
                }
                className="rounded-l-none cursor-pointer"
              >
                +
              </Button>
            </div>
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
          </div>
        </div>
      </div>
      <Button type="submit" onClick={handleSubmit} className="cursor-pointer">
        Start Quiz
      </Button>
    </div>
  );
}
