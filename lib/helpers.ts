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
 export const iconNames: LucideIconNames[] = Object.keys(LucideIcons) as LucideIconNames[];