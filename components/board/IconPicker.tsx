"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { iconCategories, IconItem } from "@/lib/icons";
import { Search } from "lucide-react";
import { toast } from "sonner";
import Spinner from "../Spinner";

const allIcons = Object.values(iconCategories).flat();

type IconPickerProps = {
    setIconOpen: (bool: boolean) => void
}

export default function IconPicker({setIconOpen}: IconPickerProps) {
  const [selectedIcon, setSelectedIcon] = useState<IconItem | null>(null);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  const getFilteredIcons = (icons: IconItem[]) => {
    return icons.filter((icon) =>
      icon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handleIconSelect = (icon: IconItem) => {
    setSelectedIcon(icon);
    setOpen(false);
    setSearchTerm("");
  };

  const handleIconSave = async () => {
    setIsLoading(true);

    if (!selectedIcon) {
      setIsLoading(false);
      toast.error("Please select an icon before saving.");
      return;
    }
    try {
      setTimeout(() => {
        setOpen(false);
        setIsLoading(false);
        toast.success("Icon saved successfullty!");
        setIconOpen(false)
      }, 2000);
    } catch (error) {
      console.error("Error saving icon:", error);
      toast.error("Failed to save icon. Please try again.");
    } finally {
      //   setIsLoading(false);
    }
  };

  const IconGrid = ({ icons }: { icons: IconItem[] }) => (
    <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 max-h-96 overflow-y-auto p-2">
      {icons.map((icon) => {
        const IconComponent = icon.icon;
        return (
          <button
            key={icon.name}
            onClick={() => handleIconSelect(icon)}
            className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-muted transition-colors group"
            title={icon.name}
          >
            <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-xs text-muted-foreground truncate w-full text-center">
              {icon.name}
            </span>
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="flex flex-col gap-4 p-4 ">
      {selectedIcon && (
        <div className="flex items-center gap-2 p-4 border w-fit mx-auto rounded-lg bg-muted/50">
          <span className="font-medium flex gap-2">
            Selected: <selectedIcon.icon className="w-6 h-6" />{" "}
            {selectedIcon.name}
          </span>
        </div>
      )}

      <div className="flex w-full justify-center gap-2 items-center ml-auto">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button disabled={isLoading} variant="outline">
              {selectedIcon ? <>Change Icon</> : "Choose Icon"}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
            <DialogHeader>
              <DialogTitle>Choose an Icon</DialogTitle>
              <DialogDescription>
                Select from {allIcons.length}+ available Lucide icons
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search icons..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid grid-cols-4 lg:grid-cols-8 w-full h-auto p-1">
                  <TabsTrigger value="all" className="text-xs">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="general" className="text-xs">
                    General
                  </TabsTrigger>
                  <TabsTrigger value="navigation" className="text-xs">
                    Nav
                  </TabsTrigger>
                  <TabsTrigger value="actions" className="text-xs">
                    Actions
                  </TabsTrigger>
                  <TabsTrigger value="media" className="text-xs">
                    Media
                  </TabsTrigger>
                  <TabsTrigger value="communication" className="text-xs">
                    Comm
                  </TabsTrigger>
                  <TabsTrigger value="files" className="text-xs">
                    Files
                  </TabsTrigger>
                  <TabsTrigger value="interface" className="text-xs">
                    UI
                  </TabsTrigger>
                </TabsList>

                <div className="mt-4">
                  <TabsContent value="all">
                    <IconGrid icons={getFilteredIcons(allIcons)} />
                  </TabsContent>

                  {Object.entries(iconCategories).map(([category, icons]) => (
                    <TabsContent key={category} value={category}>
                      <IconGrid icons={getFilteredIcons(icons)} />
                    </TabsContent>
                  ))}
                </div>
              </Tabs>

              {searchTerm &&
                getFilteredIcons(
                  activeTab === "all"
                    ? allIcons
                    : iconCategories[
                        activeTab as keyof typeof iconCategories
                      ] || []
                ).length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">{`No icons found matching "${searchTerm}"`}</div>
                )}
            </div>
          </DialogContent>
        </Dialog>
        <Button
          className="max-w-32 w-full"
          disabled={isLoading}
          onClick={handleIconSave}
        >
          {isLoading ? <Spinner /> : "Save"}
        </Button>
      </div>
    </div>
  );
}
