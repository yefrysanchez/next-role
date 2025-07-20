import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const Improvement = () => {
  return (
    <>
      <div className="mb-8">
        <Label className="font-semibold mb-3 tracking-tight">
          Improvement Title
        </Label>
        <Input
          name="improvement-title"
          type="text"
          required
          placeholder="Brief title for your suggestion..."
          className="placeholder:text-xs"
        />
      </div>
      <div>
        <Label className="font-semibold mb-3 tracking-tight">
          Detailed Suggestion
        </Label>
        <Textarea
          name="improvement-desc"
          required
          placeholder="Describe your improvement idea in detail. What would you like to see changed or added?"
          className="placeholder:text-xs min-h-32"
        ></Textarea>
      </div>
    </>
  );
};

export default Improvement;
