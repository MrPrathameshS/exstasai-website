"use client";

import { useEffect, useState } from "react";

type Msg = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [phase, setPhase] = useState("discovery");

  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        content: `Welcome to ExstasAI Consulting.

This assistant will help us understand your requirements before scheduling a consultation.

We will go through a short discovery process:
• Understand your business
• Clarify your technical needs
• Define project scope
• Provide a brief feasibility consultation
• Recommend next steps

Please start by describing your business and the problem you want to solve.`,
      },
    ]);
  }, []);

  async function sendMessage() {
    if (!input) return;

    const userMsg: Msg = {
      role: "user",
      content: input,
    };

    const newHistory = [...messages, userMsg];

    setMessages(newHistory);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({
        message: input,
        history: newHistory,
        phase: phase,
      }),
    });

    const data = await res.json();

    const assistantMsg: Msg = {
      role: "assistant",
      content: data.reply,
    };

    setMessages([...newHistory, assistantMsg]);

    if (data.phase) {
      setPhase(data.phase);
    }
  }

  return (
    <div className="h-screen flex flex-col">

      <div className="border-b p-4 font-semibold">
        ExstasAI Consultation
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">

        {messages.map((m, i) => (
          <div
            key={i}
            className={
              m.role === "user"
                ? "bg-blue-100 p-3 rounded max-w-xl ml-auto"
                : "bg-gray-100 p-3 rounded max-w-xl whitespace-pre-line"
            }
          >
            {m.content}
          </div>
        ))}

      </div>

      <div className="border-t p-4 flex gap-2">

        <input
          className="flex-1 border rounded p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />

        <button
          onClick={sendMessage}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Send
        </button>

      </div>

    </div>
  );
}