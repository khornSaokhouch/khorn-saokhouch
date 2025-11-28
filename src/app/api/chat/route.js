import { NextResponse } from 'next/server';

export async function POST(req) {
  const { message } = await req.json();

  if (!message) {
    return NextResponse.json({ reply: 'Message is required' }, { status: 400 });
  }

  try {
    // Add explicit instructions for the AI
    const prompt = `
You are a personal assistant for Khorn Saokhouch. 
Only answer questions based on the following information. 
If a question is unrelated, reply: "Sorry, I can only answer questions about Khorn Saokhouch."

${message}
`;

    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.GOOGLE_API_KEY}`,
        },
        body: JSON.stringify({
          prompt: prompt,
          temperature: 0.7,
          maxOutputTokens: 300,
        }),
      }
    );

    const data = await response.json();
    const botReply = data?.candidates?.[0]?.content || "Sorry, I didn't understand that.";

    return NextResponse.json({ reply: botReply });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ reply: 'Error contacting AI service.' }, { status: 500 });
  }
}
