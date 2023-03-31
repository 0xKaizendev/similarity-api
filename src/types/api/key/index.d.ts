import { type ZodIssue } from "zod";

export interface CreateApiData {
  error: string | ZodIssue[] | null
  createdApiKey: Apikey | null
}
export interface RevokeApiData {
  error: string | ZodIssue[] | null
  success:boolean
}
