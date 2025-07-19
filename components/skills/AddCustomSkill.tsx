"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Spinner from "../Spinner";
import { skillCategories } from "@/lib/tech-skills";

// Define a type for skill categories
type SkillCategories = {
  [key: string]: string[]; // The key is a category (string), and the value is an array of skill names (string[])
};

const AddCustomSkill = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [categorySkills, setCategorySkills] = useState<SkillCategories>(skillCategories); // Explicit typing for state

  const categories = [
    "Frontend",
    "Backend",
    "Mobile",
    "Database",
    "Cloud & DevOps",
    "Tools & Others",
    "Soft Skills"
  ];

  const handleAddSkill = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const skill = formData.get("skill")?.toString();
    const category = formData.get("category")?.toString();

    if (!skill || !category) return;

    setIsLoading(true);

    // Create a new object to avoid mutating the original skillCategories
    const updatedCategories: SkillCategories = { ...categorySkills }; // Explicit type for updatedCategories

    // Ensure the selected category exists in the updatedCategories object
    if (updatedCategories[category]) {
      updatedCategories[category] = [...updatedCategories[category], skill];
    } else {
      updatedCategories[category] = [skill];
    }

    // Simulate a network request (API call, or async operation)
    setTimeout(() => {
      // Update state with new skill added to the correct category
      setCategorySkills(updatedCategories);
      setIsLoading(false);
      setOpen(false); // Close the dialog after adding the skill

      // Optionally clear form fields
      e.currentTarget.reset();
    }, 1000); // Simulating async operation like API call
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form className="w-full">
        <Button
          onClick={() => setOpen(true)}
          type="button"
          variant={"outline"}
          className="font-semibold w-full md:w-fit"
        >
          Add Custom Skill
        </Button>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="tracking-tight font-semibold">
              Add Custom Skill
            </DialogTitle>
            <DialogDescription className="text-xs">
              {`Add a skill that's not in our predefined list. Choose the most appropriate category for your skill.`}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleAddSkill} className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="skill" className="tracking-tight font-semibold">
                Skill Name
              </Label>
              <Input
                id="skill"
                name="skill"
                placeholder="e.g., GraphQL, Figma, Docker..."
                className="placeholder:text-xs"
              />
            </div>
            <div className="grid gap-3">
              <Label
                htmlFor="category"
                className="tracking-tight font-semibold"
              >
                Category
              </Label>
              <Select name="category">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    {categories.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  disabled={isLoading}
                  variant="outline"
                  className="tracking-tighter font-semibold"
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button
                disabled={isLoading}
                type="submit"
                className="w-24 tracking-tighter font-semibold"
              >
                {isLoading ? <Spinner /> : "Add Skill"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default AddCustomSkill;
