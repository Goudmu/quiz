import { NextResponse } from 'next/server';
import mathQuestionPrompt from '../prompts/mathQuestionPrompt';
import { getShuffledIndexes } from '@/lib/utils';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type') || getShuffledIndexes()[0];

  const mathQuestionPromptupdate = `${mathQuestionPrompt}
    Now, generate a new question like number ${type} from the examples above.
  Respond only with a JSON object in this exact format, no code fences, no explanation:

  {
    "question": "Your question here",
    "options": ["option 1", "option 2", "option 3", "option 4", "option 5"],
    "correctAnswer": "the correct option"
  }`;
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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',
    },
    body: JSON.stringify({
      model: 'meta-llama/llama-4-scout-17b-16e-instruct',
      messages: [
        { role: 'user', content: mathQuestionPromptupdate }
      ],
      temperature: 0.9,
    }),
  });

  const data = await response.json();
  const message = data.choices[0].message.content;

  let questionData;
  try {
    questionData = JSON.parse(message);
  } catch (e) {
    return NextResponse.json({ error: 'Failed to parse question.' }, { status: 500 });
  }

  return NextResponse.json(questionData);
}
