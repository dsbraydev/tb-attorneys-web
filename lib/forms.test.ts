import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { submitContact, submitEmailCapture, type FormState } from "@/lib/forms";

const idle: FormState = { status: "idle" };

function form(fields: Record<string, string | File>) {
  const data = new FormData();
  for (const [key, value] of Object.entries(fields)) data.append(key, value);
  return data;
}

let info: ReturnType<typeof vi.spyOn>;

beforeEach(() => {
  info = vi.spyOn(console, "info").mockImplementation(() => {});
  vi.stubEnv("FORMS_DRY_RUN", "true");
});

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("without a delivery provider", () => {
  it("never reports success and never logs personal details", async () => {
    vi.stubEnv("FORMS_DRY_RUN", "");
    const contact = await submitContact(
      idle,
      form({ name: "Thandi", email: "thandi@example.com", phone: "0821234567", message: "Hi" }),
    );
    const email = await submitEmailCapture(idle, form({ email: "thandi@example.com" }));

    expect(contact.status).toBe("error");
    expect(contact.message).toMatch(/contact us directly/);
    expect(email.status).toBe("error");
    expect(JSON.stringify(info.mock.calls)).not.toMatch(/Thandi|thandi@example\.com|0821234567/);
  });
});

describe("submitContact", () => {
  it("requires a name, a valid email and a message or agreement", async () => {
    const state = await submitContact(idle, form({ name: "", email: "nope", message: "" }));
    expect(state.status).toBe("error");
    expect(Object.keys(state.errors ?? {})).toEqual(["name", "email", "message"]);
  });

  it("accepts an agreement upload instead of a message", async () => {
    const agreement = new File(["%PDF"], "otp.pdf", { type: "application/pdf" });
    const state = await submitContact(
      idle,
      form({ name: "Thandi", email: "thandi@example.com", message: "", agreement }),
    );
    expect(state.status).toBe("success");
  });

  it("rejects unsupported and oversized files", async () => {
    const zip = new File(["x"], "otp.zip", { type: "application/zip" });
    const big = new File([new Uint8Array(11 * 1024 * 1024)], "otp.pdf", {
      type: "application/pdf",
    });
    for (const agreement of [zip, big]) {
      const state = await submitContact(
        idle,
        form({ name: "Thandi", email: "thandi@example.com", agreement }),
      );
      expect(state.errors?.agreement).toBeDefined();
    }
  });
});

describe("submitEmailCapture", () => {
  it("validates the email", async () => {
    expect((await submitEmailCapture(idle, form({ email: "x" }))).status).toBe("error");
    expect((await submitEmailCapture(idle, form({ email: "a@b.co" }))).status).toBe("success");
  });
});
