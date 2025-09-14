import { GoogleGenAI, Chat } from "@google/genai";

// This is a mock implementation. In a real app, you would initialize this once.
// Ensure API_KEY is set in your environment variables.
const ai = process.env.API_KEY ? new GoogleGenAI({ apiKey: process.env.API_KEY }) : null;

let chat: Chat | null = null;

function getChatSession(): Chat {
    if (chat) {
        return chat;
    }
    if (!ai) {
        throw new Error("Gemini AI SDK not initialized. Make sure API_KEY is configured.");
    }
    chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: "You are a helpful assistant specializing in building codes and construction. Your name is Claude.",
        },
    });
    return chat;
}

export const sendMessageToAI = async (message: string): Promise<string> => {
    console.log("Sending message to AI:", message);

    // If the API key is not available, return a mock response.
    if (!ai) {
        console.warn("API_KEY not found. Using mock response.");
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(`This is a mock response to your message: "${message}". In a real app, I would provide a helpful answer about building codes.`);
            }, 1000);
        });
    }

    try {
        const chatSession = getChatSession();
        const response = await chatSession.sendMessage({ message });
        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        // Reset chat session on error
        chat = null;
        return "I'm sorry, I encountered an error. Please try again.";
    }
};
