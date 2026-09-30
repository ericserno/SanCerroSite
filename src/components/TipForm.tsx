"use client";

import type { ReactNode } from "react";
import { useActionState } from "react";
import { submitTip, type TipFormState } from "@/app/actions/tips";
import { tipCategories } from "@/lib/tips";

const initial: TipFormState = { ok: false, message: "" };

export function TipForm() {
  const [state, action, pending] = useActionState(submitTip, initial);

  if (state.ok) {
    return (
      <div className="place-block tip-success" role="status">
        <span className="eyebrow">Tip received</span>
        <h3 style={{ marginTop: "0.4rem" }}>In the moderation queue</h3>
        <p>{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="place-block tip-form" noValidate>
      <p className="tip-note">
        Tips are reviewed before anything goes live — openings, lost pets, school
        fundraisers, garage sales, and calendar corrections welcome.
      </p>

      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hp-field"
      />

      <div className="tip-grid">
        <Field label="Name" error={state.fieldErrors?.name}>
          <input name="name" required maxLength={80} placeholder="Your name" />
        </Field>
        <Field label="Email" error={state.fieldErrors?.email}>
          <input
            name="email"
            type="email"
            required
            maxLength={120}
            placeholder="you@example.com"
          />
        </Field>
      </div>

      <Field label="Tip type" error={state.fieldErrors?.category}>
        <select name="category" required defaultValue="">
          <option value="" disabled>
            Choose one…
          </option>
          {tipCategories.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Headline" error={state.fieldErrors?.title}>
        <input
          name="title"
          required
          maxLength={120}
          placeholder="e.g. New dumpling spot on the boulevard"
        />
      </Field>

      <div className="tip-grid">
        <Field label="Where (optional)">
          <input
            name="location"
            maxLength={160}
            placeholder="Street, park, or school"
          />
        </Field>
        <Field label="When (optional)">
          <input
            name="whenText"
            maxLength={120}
            placeholder="Date / time if you know it"
          />
        </Field>
      </div>

      <Field label="Details" error={state.fieldErrors?.details}>
        <textarea
          name="details"
          required
          rows={6}
          maxLength={2000}
          placeholder="What should neighbors know? Include links if you have them."
        />
      </Field>

      {state.message && !state.ok ? (
        <p className="tip-error" role="alert">
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        className="button button-primary"
        disabled={pending}
        style={{ justifySelf: "start" }}
      >
        {pending ? "Sending…" : "Submit tip"}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="tip-field">
      <span className="eyebrow">{label}</span>
      {children}
      {error ? <span className="field-error">{error}</span> : null}
    </label>
  );
}
