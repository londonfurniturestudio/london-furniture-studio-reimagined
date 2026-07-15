import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactEnquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be 100 characters or fewer"),
  email: z.string().trim().email("Enter a valid email address").max(255, "Email must be 255 characters or fewer"),
  telephone: z.string().trim().max(50, "Telephone must be 50 characters or fewer").optional().default(""),
  message: z.string().trim().min(1, "Please tell us about your project").max(2000, "Message must be 2000 characters or fewer"),
});

export const submitContactEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data) => contactEnquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");

    try {
      const result = await sendTemplateEmail("contact-enquiry", "info@londonfurniturestudio.com", {
        templateData: {
          name: data.name,
          email: data.email,
          telephone: data.telephone || "",
          message: data.message,
        },
        replyTo: data.email,
        idempotencyKey: `contact-${data.email}-${Date.now()}`,
      });

      if (result.sent) {
        return { ok: true as const, message: "Thank you — your enquiry has been sent. We'll be in touch shortly." };
      }
      return { ok: false as const, message: "We couldn't deliver your enquiry right now. Please email info@londonfurniturestudio.com directly." };
    } catch (error) {
      console.error("Contact enquiry send failed", error);
      return {
        ok: false as const,
        message: "Something went wrong sending your enquiry. Please try again, or email info@londonfurniturestudio.com directly.",
      };
    }
  });
