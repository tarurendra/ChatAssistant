export interface Message {
  id: number;
  sender: 'ai' | 'user';
  text: string;
  timestamp?: string;
}
