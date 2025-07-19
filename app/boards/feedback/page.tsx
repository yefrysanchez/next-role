"use client";

import BackBtn from "@/components/BackBtn";
import BugReport from "@/components/feedback/BugReport";
import ChooseFile from "@/components/feedback/ChooseFile";
import Improvement from "@/components/feedback/Improvement";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormEvent, useState } from "react";

const Page = () => {
  const [feedbackType, setFeedbackType] = useState("improvement");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(e.target as HTMLFormElement);
      if (feedbackType === "improvement") {
        const improvementTitle = formData.get("improvement-title")?.toString();
        const improvementDesc = formData.get("improvement-desc")?.toString();
        console.log(improvementTitle, improvementDesc);

      } else {
        const bugTitle = formData.get("bug-title")?.toString();
        const bugDesc = formData.get("bug-desc")?.toString();
        const priority = formData.get("priority")?.toString();
        console.log(bugTitle, bugDesc, priority);
      }
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } finally {
      setIsLoading(false);
    }
  };

  // Update handler to match RadioGroup's onValueChange signature
  const handleFeedbackType = (value: string) => {
    setFeedbackType(value); // Update state with the selected value
  };

  return (
    <div className="pt-16 px-4 pb-4">
      <BackBtn />
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-center font-semibold tracking-tight text-2xl lg:text-3xl">
          We Value Your Feedback
        </h1>
        <p className="text-center text-muted-foreground text-sm font-medium mb-8">
          Help us improve by sharing your suggestions or reporting issues
        </p>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl tracking-tight">
              Submit Feedback
            </CardTitle>
            <p className="text-muted-foreground text-sm font-medium leading-4">
              {
                "Choose the type of feedback you'd like to provide and include any relevant details or files."
              }
            </p>
          </CardHeader>
          <CardContent className="grid gap-8">
            <p className="font-semibold tracking-tight">
              What would you like to do?
            </p>
            <RadioGroup
              onValueChange={handleFeedbackType}
              defaultValue="improvement"
              className="flex flex-col sm:flex-row w-full mb-4"
            >
              <div className="flex items-center gap-3 border p-4 rounded-md w-full">
                <RadioGroupItem
                  disabled={isLoading}
                  value="improvement"
                  id="improvement"
                />
                <Label
                  htmlFor="improvement"
                  className="flex flex-col items-start tracking-tight cursor-pointer"
                >
                  <span className="font-semibold">Suggest Improvement</span>
                  <span className="text-muted-foreground">
                    Share ideas to make us better
                  </span>
                </Label>
              </div>
              <div className="flex items-center gap-3 border p-4 rounded-md w-full">
                <RadioGroupItem disabled={isLoading} value="bug" id="bug" />
                <Label
                  htmlFor="bug"
                  className="flex flex-col items-start tracking-tight cursor-pointer"
                >
                  <span className="font-semibold">Report Bug</span>
                  <span className="text-muted-foreground">
                    Let us know about issues
                  </span>
                </Label>
              </div>
            </RadioGroup>
            <form onSubmit={handleSubmit} className="grid gap-4">
              {feedbackType === "improvement" && <Improvement />}
              {feedbackType === "bug" && <BugReport />}
              <div className="grid gap-4">
                <Label className="font-semibold tracking-tight">
                  Screenshots or Files (Optional)
                </Label>
                <ChooseFile />
                <p className="text-xs text-muted-foreground">
                  Supported formats: Images, text files, PDFs, documents (Max
                  10MB)
                </p>
              </div>
              <Button
                disabled={isLoading}
                type="submit"
                className="w-full font-semibold tracking-tight cursor-pointer"
              >
                {isLoading ? (
                  <Spinner />
                ) : (
                  <>
                    {feedbackType === "improvement"
                      ? "Submit Suggestion"
                      : "Report Bug"}
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Page;
