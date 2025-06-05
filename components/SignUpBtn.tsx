import { signUp } from "@/server/users";
import { Button } from "./ui/button";

const SignUpBtn = () => {
  return (
    <Button onClick={signUp} type="button" className="w-full">
      Create Account
    </Button>
  );
};

export default SignUpBtn;
