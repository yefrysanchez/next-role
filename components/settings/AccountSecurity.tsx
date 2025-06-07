import React from "react";
import PasswordInput from "./PasswordInput";
import { Button } from "../ui/button";


const AccountSecurity = () => {
  return (
    <section className="grid gap-6 pt-4">
   
      <div>
        <h2 className="font-bold text-2xl tracking-tighter">
          Account Security
        </h2>
        <p className="font-medium text-muted-foreground">
          Manage your password and security settings
        </p>
      </div>
      <form className="grid gap-4">
        <label htmlFor="cur-pass" className="flex flex-col gap-2">
          <span className="font-semibold text-sm">Current Password</span>
          <PasswordInput placeholder="Enter current password" />
        </label>
        <label htmlFor="new-pass" className="flex flex-col gap-2">
          <span className="font-semibold text-sm">New Password</span>
          <PasswordInput placeholder="Enter new password" />
        </label>
        <label htmlFor="confirm-pass" className="flex flex-col gap-2">
          <span className="font-semibold text-sm">Confirm New Password</span>
          <PasswordInput placeholder="Confirm new password" />
        </label>
        <Button className="w-fit mx-auto" type="button">
          Save Changes
        </Button>
      </form>
    </section>
  );
};

export default AccountSecurity;
