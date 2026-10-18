"use server";

// Form submissions are validated here, but no delivery provider is wired up yet, so they are
// never reported as sent: visitors get an error asking them to make contact directly instead.
// Set FORMS_DRY_RUN=true (dev and tests only) to simulate a successful delivery.
// TODO(forms): plug in a delivery provider (e.g. Resend) in `deliver` once Tim has chosen one.

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Record<string, string>;
  /** Echoed back on validation errors so the form can refill the fields React resets. */
  values?: Record<string, string>;
};

const MAX_AGREEMENT_BYTES = 10 * 1024 * 1024;
const AGREEMENT_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

const NOT_DELIVERED: FormState = {
  status: "error",
  message:
    "Sorry, online submissions aren't available yet. Please contact us directly and we'll help you right away.",
};

/** Returns whether the submission was delivered. Never logs the payload: it holds personal information. */
async function deliver(kind: string, payload: Record<string, unknown>): Promise<boolean> {
  const dryRun = process.env.FORMS_DRY_RUN === "true";
  console.info(
    `[forms] ${kind} submission with fields [${Object.keys(payload).join(", ")}] ${
      dryRun ? "accepted (dry run)" : "not delivered: no provider configured"
    }`,
  );
  return dryRun;
}

export async function submitContact(_prev: FormState, formData: FormData): Promise<FormState> {
  const name = text(formData, "name");
  const email = text(formData, "email");
  const phone = text(formData, "phone");
  const message = text(formData, "message");
  const agreement = formData.get("agreement");

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Please enter your name.";
  if (!emailPattern.test(email)) errors.email = "Please enter a valid email address.";
  if (!message && !(agreement instanceof File && agreement.size > 0)) {
    errors.message = "Tell us how we can help, or attach your sale agreement.";
  }
  if (agreement instanceof File && agreement.size > 0) {
    if (agreement.size > MAX_AGREEMENT_BYTES)
      errors.agreement = "The file must be 10 MB or smaller.";
    else if (!AGREEMENT_TYPES.includes(agreement.type)) {
      errors.agreement = "Please attach a PDF, Word document or photo.";
    }
  }
  if (Object.keys(errors).length > 0) {
    return { status: "error", errors };
  }

  const delivered = await deliver("contact", {
    name,
    email,
    phone,
    message,
    agreement:
      agreement instanceof File && agreement.size > 0
        ? { name: agreement.name, size: agreement.size, type: agreement.type }
        : null,
  });
  if (!delivered) return NOT_DELIVERED;

  return {
    status: "success",
    message: "Thank you! Your message has been received. We will be in touch shortly.",
  };
}

export async function submitEmailCapture(_prev: FormState, formData: FormData): Promise<FormState> {
  const email = text(formData, "email");
  const source = text(formData, "source");
  if (!emailPattern.test(email)) {
    return {
      status: "error",
      errors: { email: "Please enter a valid email address." },
      values: { email },
    };
  }

  if (!(await deliver(source || "email", { email })))
    return { ...NOT_DELIVERED, values: { email } };
  return { status: "success", message: "Thank you! We will be in touch." };
}
