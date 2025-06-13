import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChangePicture = () => {
  return (
    <>
      <div>
        <h2 className="font-bold text-2xl tracking-tighter">
          Profile Information
        </h2>
        <p className="font-medium text-muted-foreground">
          Update your personal information and profile picture
        </p>
      </div>
      <form className="flex items-center gap-4">
        <div className="h-20 w-20 bg-gray-200 rounded-full"></div>
        <div className="grid gap-2">
          <Label htmlFor="picture">
            <Camera className="text-gray-500" size={18} />{" "}
            <span>Change Picture</span>
          </Label>
          <Input
            accept="image/png,image/jpeg,image/webp,image/jpg"
            id="picture"
            type="file"
          />
          <p className="text-xs font-semibold text-muted-foreground">
            JPG, JPEG, WEBP or PNG. Max size 2MB.
          </p>
          <Button type="button" className="max-w-[100px] w-full">
            Save
          </Button>
        </div>
      </form>
    </>
  );
};

export default ChangePicture;
