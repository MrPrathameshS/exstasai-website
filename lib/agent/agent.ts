import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});


// ---------------- fallback phase ----------------

function fallbackPhase(
  history: { role: string; content: string }[]
) {
  const turns = history.length;

  if (turns < 2) return "discovery";
  if (turns < 6) return "collection";
  if (turns < 8) return "structuring";
  if (turns < 10) return "consultation";
  if (turns < 12) return "cta";

  return "report";
}


// ---------------- AI phase detection ----------------

async function detectPhaseAI(
  history: { role: string; content: string }[]
) {
  const prompt = `
Decide the next phase of this consulting conversation.

Phases:
discovery
collection
structuring
consultation
cta
report

Return only the phase name.
`;

  try {
    const response = await openai.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: prompt },
        ...history,
      ],
    });

    const text =
      response.choices[0].message.content
        ?.trim()
        .toLowerCase() || "";

    const allowed = [
      "discovery",
      "collection",
      "structuring",
      "consultation",
      "cta",
      "report",
    ];

    if (allowed.includes(text)) {
      return text;
    }

    return null;

  } catch {
    return null;
  }
}


// ---------------- phase prompt ----------------

function getPhasePrompt(phase: string) {

  if (phase === "structuring") {
    return `
You are ExstasAI consulting assistant.

Generate a structured summary.

Format:

Business:
Goal:
Requirements:
Data:
Timeline:
Notes:

Do not ask questions.
Summarize clearly.
`;
  }


  if (phase === "consultation") {
    return `
You are ExstasAI AI consultant.

Give short expert advice.

Explain possible solution,
models,
architecture,
tech stack.

Keep it concise.
`;
  }


  if (phase === "cta") {
    return `
You are ExstasAI consultant.

Recommend booking a consultation call.

Explain that detailed planning requires a call.

Be professional.
`;
  }


  if (phase === "report") {
    return `
You are ExstasAI consultant.

Generate final consultation report.

Format:

Consultation Report

Business:
Goal:
Requirements:
Suggested Solution:
Architecture:
Tech stack:
Next steps:

Do not ask questions.
Only generate report.
`;
  }


  return `
You are ExstasAI consulting assistant.

Current phase: ${phase}

Ask questions to understand requirements.

Ask one question at a time.
`;
}
// ---------------- phase limit ----------------

const phaseOrder = [
    "discovery",
    "collection",
    "structuring",
    "consultation",
    "cta",
    "report",
  ];
  
  function limitPhase(
    aiPhase: string | null,
    fallback: string
  ) {
    if (!aiPhase) return fallback;
  
    const aiIndex = phaseOrder.indexOf(aiPhase);
    const ruleIndex = phaseOrder.indexOf(fallback);
  
    return phaseOrder[Math.max(aiIndex, ruleIndex)];
  }


// ---------------- main agent ----------------

export async function runAgent(
  message: string,
  history: { role: string; content: string }[],
  phase: string
) {

  const newHistory = [
    ...history,
    { role: "user", content: message },
  ];


  // AI decides phase
  const aiPhase = await detectPhaseAI(newHistory);

  const rulePhase = fallbackPhase(newHistory);

  const nextPhase = limitPhase(
    aiPhase,
    rulePhase
  );


  const systemPrompt = getPhasePrompt(nextPhase);


  const messages = [
    { role: "system", content: systemPrompt },
    ...history,
    { role: "user", content: message },
  ];


  const response = await openai.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages,
  });


  return {
    reply:
      response.choices[0].message.content || "",
    phase: nextPhase,
  };
}