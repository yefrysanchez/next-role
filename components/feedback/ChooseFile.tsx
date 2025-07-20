import { Upload } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const ChooseFile = () => {
  return (
    <div className="border-dashed px-4 py-8 border rounded-md flex flex-col items-center gap-2">
      <Upload size={50} className="text-gray-300" />
      <p className="text-gray-600 font-semibold">
        Upload screenshots, error logs, or related files
      </p>
      <p className="text-gray-500 text-sm">
        Drag and drop files here, or click to browse
      </p>
      <input
        type="file"
        className="hidden"
        id="file-upload"
        accept="image/*,.txt,.log,.pdf,.doc,.docx"
      />
      <Button variant="outline" asChild>
        <label htmlFor="file-upload" className="cursor-pointer">
          Choose File
        </label>
      </Button>
    </div>
  );
};

export default ChooseFile;
