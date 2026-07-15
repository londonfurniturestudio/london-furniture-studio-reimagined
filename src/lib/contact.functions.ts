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
    const senderDomain = process.env.LOVABLE_EMAIL_DOMAIN;

    if (!senderDomain) {
      return {
        ok: false as const,
        message:
          "Email sending is not active yet. Please set up the sender domain in Lovable Cloud, then I can route enquiries to info@londonfurniturestudio.com.",
      };
    }

    return {
      ok: false as const,
      message:
        "The form is now validated server-side and ready for email delivery, but the project still needs the email template/send helper wired after the sender domain is configured.",
      preview: {
        to: "info@londonfurniturestudio.com",
        subject: `New enquiry from ${data.name}`,
      },
    };
  });
