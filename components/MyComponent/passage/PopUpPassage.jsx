"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { optionsPassage } from "@/lib/Soal/passageBahasaInggris/soalPassage";

export default function PopUpPassageQuiz({ onSubmit, tipeSoal, setIsStarted }) {
  const [open, setOpen] = useState(true);
  const [questionCount, setQuestionCount] = useState(5);
  const [error, setError] = useState("");
  const [selectedOption, setSelectedOption] = useState({
    value: null,
    label: null,
  });

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

  const handleButtonClick = () => {
    onSubmit(selectedOption.value);
    setIsStarted(true);
  };

  if (tipeSoal !== "bahasainggris/passage") {
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
                  onClick={() =>
                    setQuestionCount(Math.max(1, questionCount - 1))
                  }
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
  } else if (tipeSoal === "bahasainggris/passage") {
    return (
      <div className=" border-2 border-gray-300 rounded-lg p-2 lg:p-4 shadow-md bg-white w-full max-w-md mx-auto mt-10">
        <h2>Quiz Setup</h2>
        <h5>Select The Passage You Want to Choose</h5>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end mt-2 lg:mt-4">
          <div className="space-y-2">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-full justify-between sm:w-[200px]"
                >
                  {selectedOption
                    ? optionsPassage.find(
                        (option) => option.value === selectedOption.value
                      )?.label
                    : "Select an option..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0 sm:w-[200px]">
                <Command>
                  <CommandInput placeholder="Search options..." />
                  <CommandList>
                    <CommandEmpty>No options found.</CommandEmpty>
                    <CommandGroup>
                      {optionsPassage.map((option) => (
                        <CommandItem
                          key={option.value}
                          value={option.value}
                          onSelect={(currentValue) => {
                            setSelectedOption(
                              currentValue === selectedOption.value
                                ? null
                                : option
                            );
                            setOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              selectedOption.value === option.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {option.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <Button
            onClick={handleButtonClick}
            disabled={!selectedOption}
            className="w-full sm:w-auto"
          >
            Choose
          </Button>
        </div>
      </div>
    );
  }
}
