"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/Button";
import { submitEmailCapture, type FormState } from "@/lib/forms";

const initialState: FormState = { status: "idle" };

export function ScheduleCard() {
  const [state, formAction, pending] = useActionState(submitEmailCapture, initialState);

  return (
    <div className="sticky top-[10%] flex w-full max-w-[480px] rounded-[30px] border border-oliv bg-[rgba(172,181,140,0.34)] p-8 landscape:max-w-none tablet:mx-auto tablet:max-w-[80%] phone:p-6">
      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="body-large font-sans">Schedule A Consultation</h2>
          <p className="body-regular text-ink-2">
            Leave your email and we will contact you to book a free 15 minute consultation.
          </p>
        </div>
        {state.status === "success" ? (
          <div className="rounded-2xl bg-navy p-4 text-white" role="status">
            {state.message}
          </div>
        ) : (
          <form action={formAction} className="flex flex-col gap-3">
            <input type="hidden" name="source" value="consultation" />
            <label htmlFor="schedule-email" className="sr-only">
              Email
            </label>
            <input
              id="schedule-email"
              name="email"
              defaultValue={state.values?.email}
              type="email"
              required
              autoComplete="email"
              placeholder="Enter your email"
              aria-invalid={state.errors?.email ? true : undefined}
              className="h-14 w-full rounded-lg border border-oliv/[0.32] bg-page p-4 text-ink outline-none placeholder:font-light focus:border-gold"
            />
            {state.errors?.email && (
              <p className="rounded-2xl bg-[rgba(255,211,213,0.49)] p-3 text-danger" role="alert">
                {state.errors.email}
              </p>
            )}
            <Button type="submit" disabled={pending}>
              {pending ? "Sending…" : "Submit"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
