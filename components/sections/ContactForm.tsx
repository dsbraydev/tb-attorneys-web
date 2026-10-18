"use client";

import { useActionState, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { submitContact, type FormState } from "@/lib/forms";

const initialState: FormState = { status: "idle" };

const inputClass =
  "h-14 w-full rounded-lg border border-oliv/[0.32] bg-page p-4 text-ink outline-none placeholder:font-light focus:border-gold";

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex w-full flex-col gap-3">
      <label htmlFor={`contact-${name}`} className="body-regular text-ink-2">
        {label}
      </label>
      {children}
      {error && (
        <p id={`contact-${name}-error`} className="body-small text-danger" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const errors = state.errors ?? {};
  const values = state.values ?? {};

  if (state.status === "success") {
    return (
      <div
        className="flex h-[150px] w-full flex-col items-center justify-center rounded-[32px] bg-navy p-6 text-center text-white landscape:h-auto"
        role="status"
      >
        {state.message}
      </div>
    );
  }

  const describedBy = (name: string) => (errors[name] ? `contact-${name}-error` : undefined);

  return (
    <form
      action={formAction}
      className="flex flex-col gap-5 landscape:gap-4 phone:gap-3"
      noValidate
    >
      <div className="flex w-full items-start gap-4 landscape:flex-col phone:gap-3">
        <Field label="Name" name="name" error={errors.name}>
          <input
            id="contact-name"
            name="name"
            defaultValue={values.name}
            type="text"
            autoComplete="name"
            required
            placeholder="Your full name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={describedBy("name")}
            className={inputClass}
          />
        </Field>
        <Field label="Email" name="email" error={errors.email}>
          <input
            id="contact-email"
            name="email"
            defaultValue={values.email}
            type="email"
            autoComplete="email"
            required
            placeholder="example@youremail.com"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={describedBy("email")}
            className={inputClass}
          />
        </Field>
      </div>
      <div className="flex w-full items-start gap-4 landscape:flex-col phone:gap-3">
        <Field label="Phone" name="phone">
          <input
            id="contact-phone"
            name="phone"
            defaultValue={values.phone}
            type="tel"
            autoComplete="tel"
            placeholder="082 123 4567"
            className={inputClass}
          />
        </Field>
        <Field label="Sale agreement (optional)" name="agreement" error={errors.agreement}>
          <input
            id="contact-agreement"
            name="agreement"
            type="file"
            accept=".pdf,.doc,.docx,image/jpeg,image/png"
            aria-invalid={errors.agreement ? true : undefined}
            aria-describedby={describedBy("agreement")}
            className={`${inputClass} file:mr-3 file:rounded file:border-0 file:bg-navy file:px-3 file:py-1 file:text-sm file:text-white`}
          />
        </Field>
      </div>
      <Field label="Message" name="message" error={errors.message}>
        <textarea
          id="contact-message"
          name="message"
          defaultValue={values.message}
          rows={5}
          placeholder="Tell us about your property transaction"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describedBy("message")}
          className={`${inputClass} h-auto min-h-[140px]`}
        />
      </Field>
      <Button type="submit" disabled={pending} className="self-start phone:self-stretch">
        {pending ? "Sending…" : "Submit"}
      </Button>
    </form>
  );
}
