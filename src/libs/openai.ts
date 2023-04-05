import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
    apiKey:process.env.OPENAI_KEY
})

export const openai = new OpenAIApi(config)