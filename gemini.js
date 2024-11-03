import {GoogleGenerativeAI} from "@google/generative-ai"
import dotenv from "dotenv";

dotenv.config()

const apiKey = String(process.env.GEMINI_API_KEY).trim();

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function responseGenerator(errorMessage){
    try{
        const prompt = `
            You are an expert at simplifying and explaining technical concepts. I am providing you with an error message that may be confusing or unclear. Your task is to analyze the error, identify its cause, and provide a simplified, user-friendly explanation along with potential solutions for fixing it.
            
            ### Error Message:
            ${errorMessage}
            
            ### Requirements:
            - Explain the cause of the error in plain language.
            - Provide step-by-step instructions to resolve it.
            - Include any additional context that may help the user understand why this error occurred.
            - Offer best practices to avoid similar errors in the future, if applicable.
            
            Return the response in a structured format:
            
            **Explanation:**
            [Detailed, easy-to-understand explanation]`

        const generatedResponse = await model.generateContent(prompt);

        return generatedResponse.response.text()
    }catch(err){
        console.log(err.message)
    }
}