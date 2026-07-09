import { chatbotFAQs } from "../data/chatbot";
import { Message } from "../app/types/chatbot";

const DEFAULT_REPLY =
  "Sorry, I couldn't understand your question. Please contact our reception or choose one of the suggested questions.";

export function findChatbotAnswer(message: string): string {
  const userMessage = message.toLowerCase().trim();

  for (const faq of chatbotFAQs) {
    const matched = faq.keywords.some((keyword) =>
      userMessage.includes(keyword.toLowerCase())
    );

    if (matched) {
      return faq.answer;
    }
  }

  return DEFAULT_REPLY;
}