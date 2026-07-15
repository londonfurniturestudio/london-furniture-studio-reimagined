import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;

type FormState = {
  name: string;
  email: string;
  telephone: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  telephone: "",
  message: "",
};

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — London Furniture Studio" },
      { name: "description", content: "Enquire about a bespoke joinery commission with London Furniture Studio in Hurst, Reading." },
      { property: "og:title", content: "Contact — London Furniture Studio" },
      { property: "og:description", content: "Enquire about a bespoke commission." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const validate = (): string | null => {
    if (!form.name.trim() || form.name.trim().length > 100) return "Please enter your name (max 100 characters).";
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(form.email.trim()) || form.email.trim().length > 255) return "Please enter a valid email address.";
    if (form.telephone.trim().length > 50) return "Telephone is too long.";
    if (!form.message.trim() || form.message.trim().length > 2000) return "Please tell us about your project (max 2000 characters).";
    return null;
  };

  return (
    <SiteLayout>
      <section className="pt-32 pb-14 md:pt-40">
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-10">
          <div className="hairline hairline-before hairline-after mx-auto"><span className="eyebrow text-brass">Enquiries</span></div>
          <h1 className="mt-6 font-display text-[2.5rem] leading-[1.05] text-forest md:text-[4rem]">Contact</h1>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">We welcome enquiries from private clients, architects, interior designers and developers.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-28 md:px-10 md:pb-36">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="eyebrow text-brass">Studio</p>
            <p className="mt-4 font-display text-2xl leading-tight text-forest">Unit 28, Phoenix Park<br />Nelson&apos;s Lane, Hurst<br />Reading RG10 0RR<br />United Kingdom</p>

            <div className="mt-10 space-y-4">
              <div>
                <p className="eyebrow text-brass">Email</p>
                <a href="mailto:info@londonfurniturestudio.com" className="mt-2 block font-display text-xl text-forest transition hover:text-brass">info@londonfurniturestudio.com</a>
              </div>
              <div>
                <p className="eyebrow text-brass">Telephone</p>
                <a href="tel:+442080505843" className="mt-2 block font-display text-xl text-forest transition hover:text-brass">020 8050 5843</a>
              </div>
              <div>
                <p className="eyebrow text-brass">Instagram</p>
                <a href="https://www.instagram.com/londonfurniturestudio/" target="_blank" rel="noreferrer" className="mt-2 block font-display text-xl text-forest transition hover:text-brass">@londonfurniturestudio</a>
              </div>
            </div>
          </div>

          <form
            className="flex flex-col gap-5"
            onSubmit={async (e) => {
              e.preventDefault();
              const validationError = validate();
              if (validationError) {
                setStatus(validationError);
                return;
              }
              if (!WEB3FORMS_ACCESS_KEY) {
                setStatus("The contact form is not fully configured yet. Please email info@londonfurniturestudio.com directly.");
                return;
              }
              setSubmitting(true);
              setStatus("");
              try {
                const res = await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  headers: { "Content-Type": "application/json", Accept: "application/json" },
                  body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: `New enquiry from ${form.name.trim()}`,
                    from_name: "London Furniture Studio Website",
                    name: form.name.trim(),
                    email: form.email.trim(),
                    telephone: form.telephone.trim(),
                    message: form.message.trim(),
                    replyto: form.email.trim(),
                  }),
                });
                const data = await res.json();
                if (data.success) {
                  setStatus("Thank you — your enquiry has been sent. We'll be in touch shortly.");
                  setForm(initialFormState);
                } else {
                  setStatus("We couldn't send your enquiry. Please email info@londonfurniturestudio.com directly.");
                }
              } catch {
                setStatus("Something went wrong while sending your enquiry. Please try again.");
              } finally {
                setSubmitting(false);
              }
            }}
          >
            <label className="flex flex-col gap-2">
              <span className="eyebrow text-forest">Name</span>
              <input required maxLength={100} value={form.name} onChange={(e) => updateField("name", e.target.value)} className="border-b border-forest/30 bg-transparent py-2 outline-none focus:border-brass" />
            </label>
            <label className="flex flex-col gap-2">
              <span className="eyebrow text-forest">Email</span>
              <input required type="email" maxLength={255} value={form.email} onChange={(e) => updateField("email", e.target.value)} className="border-b border-forest/30 bg-transparent py-2 outline-none focus:border-brass" />
            </label>
            <label className="flex flex-col gap-2">
              <span className="eyebrow text-forest">Telephone</span>
              <input maxLength={50} value={form.telephone} onChange={(e) => updateField("telephone", e.target.value)} className="border-b border-forest/30 bg-transparent py-2 outline-none focus:border-brass" />
            </label>
            <label className="flex flex-col gap-2">
              <span className="eyebrow text-forest">Tell us about your project</span>
              <textarea required rows={5} maxLength={2000} value={form.message} onChange={(e) => updateField("message", e.target.value)} className="resize-none border-b border-forest/30 bg-transparent py-2 outline-none focus:border-brass" />
            </label>
            {status ? <p className="text-sm text-muted-foreground">{status}</p> : null}
            <div className="pt-4">
              <button type="submit" disabled={submitting} className="btn-brand btn-brand-hover disabled:opacity-60">
                {submitting ? "Sending..." : "Send Enquiry"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
