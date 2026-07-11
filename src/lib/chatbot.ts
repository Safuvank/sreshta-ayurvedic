



// import { chatbotFAQs } from "../data/chatbot";

// export function findChatbotAnswer(userMessage: string): string {
//   if (!userMessage) return getFallbackResponse();

//   // Clean the input: lowercase and remove special characters that might break regex
//   const cleanMessage = userMessage.toLowerCase().trim();

//   // Iterate through FAQs to find a match
//   for (const faq of chatbotFAQs) {
//     const isMatch = faq.keywords.some((keyword) => {
//       // Use word boundaries (\b) to ensure we match whole words only.
//       // E.g., keyword "hi" will match "hi there" but not "this"
//       const regex = new RegExp(`\\b${keyword.toLowerCase()}\\b`, "i");
//       return regex.test(cleanMessage);
//     });

//     if (isMatch) {
//       return faq.answer;
//     }
//   }

//   // Return fallback if no keywords matched
//   return getFallbackResponse();
// }

// function getFallbackResponse(): string {
//   return "I'm sorry, I didn't quite catch that. Could you please rephrase your question, or select one of the suggested options?\n\nAlternatively, you can reach us directly at +91 80758 70435.";
// }




import { chatbotFAQs, defaultSuggestedQuestions } from "@/src/data/chatbot";

export function findChatbotAnswer(userMessage: string): { answer: string, relatedQuestions: string[] } {
  if (!userMessage) return getFallbackResponse();

  const cleanMessage = userMessage.toLowerCase().trim();

  for (const faq of chatbotFAQs) {
    const isMatch = faq.keywords.some((keyword) => {
      const regex = new RegExp(`\\b${keyword.toLowerCase()}\\b`, "i");
      return regex.test(cleanMessage);
    });

    if (isMatch) {
      return {
        answer: faq.answer,
        // Send related questions if they exist, otherwise send default ones
        relatedQuestions: faq.relatedQuestions && faq.relatedQuestions.length > 0 
          ? faq.relatedQuestions 
          : defaultSuggestedQuestions
      };
    }
  }

  return getFallbackResponse();
}

function getFallbackResponse() {
  return {
    answer: "I'm sorry, I didn't quite catch that. Could you please rephrase your question, or select one of the suggested options?\n\nAlternatively, you can reach us directly at +91 80758 70435.",
    relatedQuestions: defaultSuggestedQuestions
  };
}