"use client";
import BackBtn from "@/components/BackBtn";
import AddCustomSkill from "@/components/skills/AddCustomSkill";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { skillCategories } from "@/lib/tech-skills";
import { Search, X } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSkills = (skill: string) => {
    // Prevent multiple selections while loading
    if (isLoading) {
      toast.error("Please wait until the current operation is complete.");
      return;
    }
    // Toggle skill selection
    setSelectedSkills((prev) => {
      if (prev.includes(skill)) {
        return prev.filter((s) => s !== skill);
      }
      return [...prev, skill];
    });
  };

  const handleDeleteSkill = (skill: string) => {
    const NewSelectedSkills = selectedSkills.filter((s) => s !== skill);
    setIsLoading(true);
    setTimeout(() => {
      setSelectedSkills(NewSelectedSkills);
      setIsLoading(false);
    }, 500);
  };

  const handleClearAll = () => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedSkills([]);
      setIsLoading(false);
    }, 500);
  };

  const handleSave = () => {};

  return (
    <div className="pt-16 mx-4 ">
      <BackBtn />
      <Card className="mt-4 max-w-6xl mx-auto mb-12">
        <CardHeader>
          <CardTitle className="text-xl">Select Your Tech Skills</CardTitle>
          <CardDescription>
            {`Choose the technologies and tools you're proficient with. You can select multiple skills from different
            categories.`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <label htmlFor="search">
              <Search
                size={20}
                className="text-gray-400 absolute top-1/2 -translate-1/2 left-4"
              />
            </label>
            <Input // Seach Input
              id="search"
              type="search"
              placeholder="Search skills..."
              className="pl-8"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <section className="my-4">
            {/* Display Skills Selected */}
            {selectedSkills.length > 0 && (
              <>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold text-sm">
                    Selected Skills ({selectedSkills.length})
                  </h2>
                  <Button
                    disabled={isLoading}
                    onClick={handleClearAll}
                    variant={"outline"}
                  >
                    Clear All
                  </Button>
                </div>
                <div className="flex items-start flex-wrap gap-2 ">
                  {selectedSkills.map((skill) => (
                    <div
                      key={skill}
                      className="text-xs bg-gray-100 hover:bg-red-300 transition-colors py-1 px-3 rounded-2xl select-none relative flex gap-1 items-center"
                    >
                      <span>{skill}</span>
                      <button
                        disabled={isLoading}
                        onClick={() => handleDeleteSkill(skill)}
                        className="cursor-pointer"
                      >
                        <X size={15} />
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </section>
          <div className="flex flex-col md:flex-row justify-end items-center gap-4">
            <AddCustomSkill />
            <Button
              disabled={isLoading}
              type="button"
              className="font-semibold w-full md:w-40"
              onClick={handleSave}
            >
              {isLoading ? <Spinner /> : "Save Skills"}
            </Button>
          </div>
          <section className="mt-8 grid gap-8">
            <div className="border-y border-dashed py-8">
              <h2 className="font-bold text">Frontend</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
                {search
                  ? skillCategories.Frontend.filter((skill) =>
                      skill.toLowerCase().includes(search.toLowerCase())
                    ).map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <Checkbox
                          checked={selectedSkills.includes(skill)}
                          onCheckedChange={() => handleSkills(skill)}
                          id={skill}
                        />
                        <label
                          htmlFor={skill}
                          className="font-medium text-sm select-none cursor-pointer"
                        >
                          {skill}
                        </label>
                      </div>
                    ))
                  : skillCategories.Frontend.map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <Checkbox
                          checked={selectedSkills.includes(skill)}
                          onCheckedChange={() => handleSkills(skill)}
                          id={skill}
                        />
                        <label
                          htmlFor={skill}
                          className="font-medium text-sm select-none cursor-pointer"
                        >
                          {skill}
                        </label>
                      </div>
                    ))}
              </div>
            </div>
            <div className="border-dashed pb-8 border-b ">
              <h2 className="font-bold text">Backend</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
                {search
                  ? skillCategories.Backend.filter((skill) =>
                      skill.toLowerCase().includes(search.toLowerCase())
                    ).map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <Checkbox
                          checked={selectedSkills.includes(skill)}
                          onCheckedChange={() => handleSkills(skill)}
                          id={skill}
                        />
                        <label
                          htmlFor={skill}
                          className="font-medium text-sm select-none cursor-pointer"
                        >
                          {skill}
                        </label>
                      </div>
                    ))
                  : skillCategories.Backend.map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <Checkbox
                          checked={selectedSkills.includes(skill)}
                          onCheckedChange={() => handleSkills(skill)}
                          id={skill}
                        />
                        <label
                          htmlFor={skill}
                          className="font-medium text-sm select-none cursor-pointer"
                        >
                          {skill}
                        </label>
                      </div>
                    ))}
              </div>
            </div>
            <div className="border-dashed pb-8 border-b ">
              <h2 className="font-bold text">Mobile</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
                {search
                  ? skillCategories.Mobile.filter((skill) =>
                      skill.toLowerCase().includes(search.toLowerCase())
                    ).map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <Checkbox
                          checked={selectedSkills.includes(skill)}
                          onCheckedChange={() => handleSkills(skill)}
                          id={skill}
                        />
                        <label
                          htmlFor={skill}
                          className="font-medium text-sm select-none cursor-pointer"
                        >
                          {skill}
                        </label>
                      </div>
                    ))
                  : skillCategories.Mobile.map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <Checkbox
                          checked={selectedSkills.includes(skill)}
                          onCheckedChange={() => handleSkills(skill)}
                          id={skill}
                        />
                        <label
                          htmlFor={skill}
                          className="font-medium text-sm select-none cursor-pointer"
                        >
                          {skill}
                        </label>
                      </div>
                    ))}
              </div>
            </div>
            <div className="border-dashed pb-8 border-b ">
              <h2 className="font-bold text">Database</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
              {search
                  ? skillCategories.Database.filter((skill) =>
                      skill.toLowerCase().includes(search.toLowerCase())
                    ).map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <Checkbox
                          checked={selectedSkills.includes(skill)}
                          onCheckedChange={() => handleSkills(skill)}
                          id={skill}
                        />
                        <label
                          htmlFor={skill}
                          className="font-medium text-sm select-none cursor-pointer"
                        >
                          {skill}
                        </label>
                      </div>
                    ))
                  : skillCategories.Database.map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <Checkbox
                          checked={selectedSkills.includes(skill)}
                          onCheckedChange={() => handleSkills(skill)}
                          id={skill}
                        />
                        <label
                          htmlFor={skill}
                          className="font-medium text-sm select-none cursor-pointer"
                        >
                          {skill}
                        </label>
                      </div>
                    ))}
              </div>
            </div>
            <div className="border-dashed pb-8 border-b ">
              <h2 className="font-bold text">Cloud & DevOps</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
              {search
                  ? skillCategories["Cloud & DevOps"].filter((skill) =>
                      skill.toLowerCase().includes(search.toLowerCase())
                    ).map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <Checkbox
                          checked={selectedSkills.includes(skill)}
                          onCheckedChange={() => handleSkills(skill)}
                          id={skill}
                        />
                        <label
                          htmlFor={skill}
                          className="font-medium text-sm select-none cursor-pointer"
                        >
                          {skill}
                        </label>
                      </div>
                    ))
                  : skillCategories["Cloud & DevOps"].map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <Checkbox
                          checked={selectedSkills.includes(skill)}
                          onCheckedChange={() => handleSkills(skill)}
                          id={skill}
                        />
                        <label
                          htmlFor={skill}
                          className="font-medium text-sm select-none cursor-pointer"
                        >
                          {skill}
                        </label>
                      </div>
                    ))}
              </div>
            </div>
            <div className="border-dashed pb-8 border-b ">
              <h2 className="font-bold text">Tools & Others</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
              {search
                  ? skillCategories["Tools & Others"].filter((skill) =>
                      skill.toLowerCase().includes(search.toLowerCase())
                    ).map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <Checkbox
                          checked={selectedSkills.includes(skill)}
                          onCheckedChange={() => handleSkills(skill)}
                          id={skill}
                        />
                        <label
                          htmlFor={skill}
                          className="font-medium text-sm select-none cursor-pointer"
                        >
                          {skill}
                        </label>
                      </div>
                    ))
                  : skillCategories["Tools & Others"].map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <Checkbox
                          checked={selectedSkills.includes(skill)}
                          onCheckedChange={() => handleSkills(skill)}
                          id={skill}
                        />
                        <label
                          htmlFor={skill}
                          className="font-medium text-sm select-none cursor-pointer"
                        >
                          {skill}
                        </label>
                      </div>
                    ))}
              </div>
            </div>
            <div className="border-dashed pb-8 border-b ">
              <h2 className="font-bold text">Soft Skills</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
              {search
                  ? skillCategories["Soft Skills"].filter((skill) =>
                      skill.toLowerCase().includes(search.toLowerCase())
                    ).map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <Checkbox
                          checked={selectedSkills.includes(skill)}
                          onCheckedChange={() => handleSkills(skill)}
                          id={skill}
                        />
                        <label
                          htmlFor={skill}
                          className="font-medium text-sm select-none cursor-pointer"
                        >
                          {skill}
                        </label>
                      </div>
                    ))
                  : skillCategories["Soft Skills"].map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <Checkbox
                          checked={selectedSkills.includes(skill)}
                          onCheckedChange={() => handleSkills(skill)}
                          id={skill}
                        />
                        <label
                          htmlFor={skill}
                          className="font-medium text-sm select-none cursor-pointer"
                        >
                          {skill}
                        </label>
                      </div>
                    ))}
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-end items-center gap-4">
              <AddCustomSkill />
              <Button
                disabled={isLoading}
                type="button"
                className="font-semibold w-full md:w-40"
                onClick={handleSave}
              >
                {isLoading ? <Spinner /> : "Save Skills"}
              </Button>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
