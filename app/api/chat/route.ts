import { NextResponse } from "next/server";
import { runAgent } from "@/lib/agent/agent";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const message = body.message;
    const history = body.history || [];
    const phase = body.phase || "discovery";

    const result = await runAgent(
      message,
      history,
      phase
    );

    return NextResponse.json(result);

  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json({
      reply: "Server error",
      phase: "discovery",
    });
  }
}