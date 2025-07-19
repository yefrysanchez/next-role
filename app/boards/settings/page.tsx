import BackBtn from "@/components/BackBtn";
import AccountSecurity from "@/components/settings/AccountSecurity";
import ChangePicture from "@/components/settings/ChangePicture";
import UserInfo from "@/components/settings/UserInfo";
import { Card } from "@/components/ui/card";

const Page = () => {
  return (
    <div className="px-4 pb-4 pt-16 grid gap-4 ">
      <BackBtn />
      <div className="max-w-6xl mx-auto w-full grid gap-4">
        <div className="py-4">
          <h1 className="font-bold text-3xl tracking-tighter">Settings</h1>
          <p className="font-medium text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </div>
        <Card className="p-4 pt-8">
          <ChangePicture />
          <div className="h-[2px] rounded-full w-full bg-gray-100"></div>
          <UserInfo />
        </Card>
        <Card className="p-4">
          <AccountSecurity />
        </Card>
      </div>
    </div>
  );
};

export default Page;
