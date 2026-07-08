import { NextRequest, NextResponse } from "next/server";
import { findChatbotAnswer } from "@/src/lib/chatbot";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { message } = body;

    if (!message) {
      return NextResponse.json(
        {
          success: false,
          message: "Message is required."
        },
        {
          status: 400
        }
      );
    }

    const answer = findChatbotAnswer(message);

    return NextResponse.json({
      success: true,
      reply: answer
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong."
      },
      {
        status: 500
      }
    );
  }
}