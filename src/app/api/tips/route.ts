import { NextResponse } from "next/server";
import { processTipSubmission } from "@/lib/process-tip";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let input: Record<string, unknown> = {};

    if (contentType.includes("application/json")) {
      input = (await request.json()) as Record<string, unknown>;
    } else {
      const form = await request.formData();
      input = Object.fromEntries(form.entries());
    }

    const result = await processTipSubmission(input);
    return NextResponse.json(result, { status: result.ok ? 200 : 400 });
  } catch (err) {
    console.error("[tips] unexpected error", err);
    return NextResponse.json(
      {
        ok: false,
        message: "Something went wrong submitting that tip. Please try again.",
      },
      { status: 500 }
    );
  }
}
