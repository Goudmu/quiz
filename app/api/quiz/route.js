import { NextResponse } from 'next/server';
import mathQuestionPrompt from '../prompts/mathQuestionPrompt';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type') || 1;

  const mathQuestionPromptUpdate = `${mathQuestionPrompt}
  Now, generate a new question like number ${type} from the examples above in English.
  Respond only with a JSON object in this exact format, no code fences, no explanation:

  {
    "question": "Your question here",
    "options": ["option 1", "option 2", "option 3", "option 4", "option 5"],
    "correctAnswer": "the correct option"
  }`;

  // const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
  //   method: "POST",
  //   headers: {
  //     "Authorization": "Bearer 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",
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({
  //     model: "deepseek/deepseek-v3-base:free",
  //     messages: [
  //       { role: "user", content: "hi" }
  //     ],
  //     temperature: 0.9
  //   })
  // });

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer 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",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "model": "deepseek/deepseek-v3-base:free",
      "messages": [
        {
          "role": "user",
          "content": mathQuestionPromptUpdate
        }
      ]
    })
  });

  const data = await response.json();
  const message = data.choices[0].message.content;
  console.log(message);

  let questionData;
  try {
    questionData = JSON.parse(message);
  } catch (e) {
    return NextResponse.json({ error: 'Failed to parse question.' }, { status: 500 });
  }

  return NextResponse.json(questionData);
}
