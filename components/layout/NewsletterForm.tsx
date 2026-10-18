"use client";

import { useActionState } from "react";
import { ChevronLargeIcon } from "@/components/ui/icons";
import { submitEmailCapture, type FormState } from "@/lib/forms";

const initialState: FormState = { status: "idle" };

export function NewsletterForm() {
  const [state, formAction, pending] = useActionState(submitEmailCapture, initialState);

  if (state.status === "success") {
    return (
      <div className="max-w-[385px] rounded-lg bg-navy p-4 text-white" role="status">
        {state.message}
      </div>
    );
  }

  return (
    <form action={formAction} className="flex w-full flex-col gap-3">
      <input type="hidden" name="source" value="newsletter" />
      <div className="flex flex-col gap-5">
        <label htmlFor="newsletter-email" className="body-regular text-grey-oliv">
          Subscribe to our newsletter.
        </label>
        <div className="relative h-[60px] w-full max-w-[385px]">
          <input
            id="newsletter-email"
            name="email"
            defaultValue={state.values?.email}
            type="email"
            required
            placeholder="Email"
            autoComplete="email"
            aria-invalid={state.errors?.email ? true : undefined}
            className="h-[60px] w-full rounded-lg bg-[rgba(255,253,246,0.16)] p-4 pr-14 text-grey-100 outline-none placeholder:font-light placeholder:text-[rgba(238,238,238,0.48)] focus:ring-1 focus:ring-gold"
          />
          <button
            type="submit"
            disabled={pending}
            aria-label="Subscribe"
            className="absolute inset-y-0 right-0 flex w-[55px] items-center justify-center text-grey-100 disabled:opacity-50"
          >
            <ChevronLargeIcon />
          </button>
        </div>
      </div>
      {state.errors?.email && (
        <p className="max-w-[385px] rounded-lg bg-danger px-4 py-2 text-center text-grey-100" role="alert">
          {state.errors.email}
        </p>
      )}
      <p className="body-small text-grey-300">
        Your privacy matters to us. We respect your inbox and your information.
      </p>
    </form>
  );
}
