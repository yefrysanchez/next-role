import slugify from "slugify";
import * as LucideIcons from "lucide-react"; // Import all icons as a namespace

export function getSlug(id: string, title: string): string {
  return `${id}-${slugify(title, { lower: true, strict: true })}`;
}

// Type for the valid icon names
type LucideIconNames = keyof typeof LucideIcons;

// Function that returns the corresponding Lucide icon component
export const getLucideIcon = (iconName: LucideIconNames) => {
  const IconComponent = LucideIcons[iconName];

  if (IconComponent) {
    return IconComponent;
  } else {
    console.error(`Icon "${iconName}" not found`);
    return null; // Return null if icon is not found
  }
};

// Create an array of icon names
export const iconNames: LucideIconNames[] = Object.keys(
  LucideIcons
) as LucideIconNames[];

export const getFormattedUrl = (url: string) => {
  if (!url) return "";
  return url.startsWith("http://") || url.startsWith("https://")
    ? url
    : `https://${url}`;

  // If job.url is "www.google.com", it becomes "https://www.google.com" and opens as an aboslute URL not a relative one.

  // If it's already a full URL, like "https://jobs.example.com", it’s used as-is.
};

// Salary Format

export function formatCurrency(amount: string): string {
  if (!amount) {
    return "";
  }
  const num = Number(amount);
  return `$${Math.floor(num)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

export function validatePassword(
  password: string,
  setError: (err: string | null) => void
): boolean {
  if (password.length < 8) {
    setError("Password must be at least 8 characters long.");
    return true;
  }
  if (!/[0-9]/.test(password)) {
    setError("Password must contain at least one number.");
    return true;
  }
  if (!/[A-Z]/.test(password)) {
    setError("Password must contain at least one uppercase letter.");
  }
  if (!/[a-z]/.test(password)) {
    setError("Password must contain at least one lowercase letter.");
    return true;
  }

  setError(null);

  return false;
}
