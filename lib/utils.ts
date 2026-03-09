import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export type StartupTypeCard = {
  id: number;
  title: string;
  description: string;
  views: number;
  author: {
    id: number;
    name: string;
    avatar: string;
  };
  _createdAt: string;
  category: string;
  image: string;
};
