import {GoogleGenerativeAI} from "@google/generative-ai"
import dotenv from "dotenv";

dotenv.config()


const apiKey = String(process.env.GEMINI_API_KEY).trim();

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function responseGenerator(errorMessage){
    try{
        const prompt = `${errorMessage}: Identify the root cause of the error message, focusing on incorrect syntax, data type mismatches, or missing imports, and suggest a concise solution in one sentence.`

        const generatedResponse = await model.generateContent(prompt);

        return generatedResponse.response.text()
    }catch(err){
        console.log(err.message)
    }
}