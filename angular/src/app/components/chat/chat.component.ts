import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GeminiService } from '../../services/gemini.service';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  currentMessage: string = '';
  isLoading: boolean = false;

  constructor(private geminiService: GeminiService) {}

  ngOnInit() {
    this.messages.push({
      text: 'Hello! I\'m Claude, your building codes and construction assistant. How can I help you today?',
      isUser: false,
      timestamp: new Date()
    });
  }

  async sendMessage() {
    if (!this.currentMessage.trim() || this.isLoading) {
      return;
    }

    const userMessage: Message = {
      text: this.currentMessage,
      isUser: true,
      timestamp: new Date()
    };

    this.messages.push(userMessage);
    const messageToSend = this.currentMessage;
    this.currentMessage = '';
    this.isLoading = true;

    try {
      const response = await this.geminiService.sendMessage(messageToSend);
      
      const botMessage: Message = {
        text: response,
        isUser: false,
        timestamp: new Date()
      };

      this.messages.push(botMessage);
    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorMessage: Message = {
        text: 'I\'m sorry, I encountered an error. Please try again.',
        isUser: false,
        timestamp: new Date()
      };

      this.messages.push(errorMessage);
    } finally {
      this.isLoading = false;
    }
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
}