"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const COOKIE_KEY = "cookie_consent_accepted";
const CookiesConsent = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "true");
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>We use cookies</DialogTitle>
          <DialogDescription>
            {`This website uses cookies to enhance the user experience. By clicking "Accept", you consent to the use of cookies.`}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={handleAccept}>Accept</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CookiesConsent;
