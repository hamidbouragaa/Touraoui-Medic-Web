"use server";

import { InquirySchema } from "./schemas";
import { z } from "zod";

export async function submitInquiry(
  data: z.infer<typeof InquirySchema>
) {
  // This server action is no longer used by the form.
  // The form now opens a WhatsApp chat directly.
  console.log("This function is deprecated. Form data:", data);
  return { success: true, message: "This function is deprecated." };
}
