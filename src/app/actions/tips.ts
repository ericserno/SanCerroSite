"use server";

import { processTipSubmission } from "@/lib/process-tip";
import type { TipFormState } from "@/lib/tips";

/** Kept for compatibility; the contact form uses /api/tips. */
export async function submitTip(
  _prev: TipFormState,
  formData: FormData
): Promise<TipFormState> {
  return processTipSubmission(Object.fromEntries(formData.entries()));
}
