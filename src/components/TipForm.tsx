"use client";

import type { FormEvent, ReactNode } from "react";
import { useState } from "react";
import type { TipFormState } from "@/lib/tips";
import { tipCategories } from "@/lib/tips";

export function TipForm() {
  const [pending, setPending] = useState(false);
  const [state, setState] = useState<TipFormState>({ ok: false, message: "" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setState({ ok: false, message: "" });

    try {
      const form = event.currentTarget;
      const data = Object.fromEntries(new FormData(form).entries());
      const res = await fetch("/api/tips", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as TipFormState;
      setState(json);
      if (json.ok) form.reset();
    } catch {
      setState({
        ok: false,
        message: "Network error — please check your connection and try again.",
      });
    } finally {
      setPending(false);
    }
  }

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
    <form onSubmit={onSubmit} className="place-block tip-form" noValidate>
      <p className="tip-note">
        Tips are reviewed before anything goes live — openings, lost pets, school
        fundraisers, garage sales, and calendar corrections welcome.
      </p>

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
