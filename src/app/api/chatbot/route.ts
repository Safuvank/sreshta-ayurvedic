// import { NextRequest, NextResponse } from "next/server";
// import { findChatbotAnswer } from "@/src/lib/chatbot";

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();

//     const { message } = body;

//     if (!message) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Message is required."
//         },
//         {
//           status: 400
//         }
//       );
//     }

//     const answer = findChatbotAnswer(message);

//     return NextResponse.json({
//       success: true,
//       reply: answer
//     });
//   } catch (error) {
//     return NextResponse.json(
//       {
//         success: false,
//         message: "Something went wrong."
//       },
//       {
//         status: 500
//       }
//     );
//   }
// }




import { NextRequest, NextResponse } from "next/server";
import { findChatbotAnswer } from "@/src/lib/chatbot";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message } = body;

    if (!message) {
      return NextResponse.json({ success: false, message: "Message is required." }, { status: 400 });
    }

    // Now it returns an object containing both answer and relatedQuestions
    const result = findChatbotAnswer(message);

    return NextResponse.json({
      success: true,
      reply: result.answer,
      relatedQuestions: result.relatedQuestions // <-- Send to frontend
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Something went wrong." }, { status: 500 });
  }
}