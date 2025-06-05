import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(fullName: string): string {
  if (!fullName) return "N/A";

  const names = fullName.trim().split(/\s+/);
  if (names.length === 0) return "";

  const firstInitial = names[0]?.charAt(0).toUpperCase() || "";
  const lastInitial =
    names.length > 1 ? names[names.length - 1].charAt(0).toUpperCase() : "";

  return firstInitial + lastInitial;
}
