import { CreateApiData } from "@/types/api/key";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export const classNameOptimization = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
export const createKey = async () => {
  const response = await fetch("/api/api-key/create");
  console.log("Response",response.json())
  const data = (await response.json()) as CreateApiData;
  if (data.error || !data.createdApiKey) {
    console.log(data.error)
    if (data.error instanceof Array) {
      throw new Error(data.error.join(""));
    }
    throw new Error(data.error ?? "Something went wrong");
  }
  return data.createdApiKey;
};
