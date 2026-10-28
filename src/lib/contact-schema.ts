import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.email("Please enter a valid email").max(200),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(5000),
  // Honeypot: real visitors never see or fill this field.
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
