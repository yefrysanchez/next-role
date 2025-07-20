import React from "react";
import { Label } from "../ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const BugReport = () => {
  const priority = [
    {
      title: "Low - Minor issue",
      level: "low",
    },
    {
      title: "Medium - Affects functionality",
      level: "medium",
    },
    {
      title: "High - Blocks important features",
      level: "high",
    },
    {
      title: "Critical - System unusable",
      level: "critical",
    },
  ];

  return (
    <div className="grid gap-4">
      <div>
        <Label className="font-semibold mb-3 tracking-tight">
          Priority Level
        </Label>
        <Select name="priority">
          <SelectTrigger className="w-full shadow-none">
            <SelectValue placeholder="Select priority level" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Priority Level</SelectLabel>

              {priority.map((p, i) => (
                <SelectItem key={i} value={p.level}>
                  {p.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className="font-semibold  mb-3 tracking-tight">Bug Summary</Label>
        <Input
          type="text"
          required
          placeholder="Brief description of the issue"
          className="placeholder:text-xs"
          name="bug-title"
        />
      </div>
      <div>
        <Label className="font-semibold  mb-3 tracking-tight">Bug Description</Label>
        <Textarea
        name="bug-desc"
          required
          placeholder="Please describe the bug in detail. What were you trying to do? What happened instead? Include steps to reproduce if possible."
          className="placeholder:text-xs min-h-32 placeholder:max-w-7/8 w-full"
        ></Textarea>
      </div>
    </div>
  );
};

export default BugReport;
