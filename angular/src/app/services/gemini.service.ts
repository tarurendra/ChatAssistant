import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private genAI: GoogleGenerativeAI | null = null;
  private chat: any = null;

  constructor() {
    if (environment.geminiApiKey) {
      this.genAI = new GoogleGenerativeAI(environment.geminiApiKey);
    }
  }

  private getChatSession() {
    if (this.chat) {
      return this.chat;
    }
    if (!this.genAI) {
      throw new Error("Gemini AI SDK not initialized. Make sure API key is configured.");
    }
    this.chat = this.genAI.getGenerativeModel({ 
      model: 'gemini-pro',
      systemInstruction: "You are a helpful assistant specializing in building codes and construction. Your name is Claude."
    }).startChat();
    return this.chat;
  }

  async sendMessage(message: string): Promise<string> {
    console.log("Sending message to AI:", message);

    // If the API key is not available, return a mock response.
    if (!this.genAI) {
      console.warn("API key not found. Using mock response.");
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(`This is a mock response to your message: "${message}". In a real app, I would provide a helpful answer about building codes.`);
        }, 1000);
      });
    }

    try {
      const chatSession = this.getChatSession();
      const result = await chatSession.sendMessage(message);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      // Reset chat session on error
      this.chat = null;
      return "I'm sorry, I encountered an error. Please try again.";
    }
  }
}