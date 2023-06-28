import { CreateApiData } from "@/types/api/key";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export const classNameOptimization = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
export const createKey = async () => {
  const response = await fetch("/api/api-key/create");
  if (response.ok) {
    const data = (await response.json()) as CreateApiData;
    return data.createdApiKey;
  } else {
    throw new Error("Something went wrong");
  }
};
