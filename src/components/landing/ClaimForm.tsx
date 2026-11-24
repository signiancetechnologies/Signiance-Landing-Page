"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";
import { Check } from "@/components/icons";
import { HONEYPOT_FIELD, ROLES, TEAM_SIZES, type ClaimFields, type ClaimResponse } from "@/lib/claim";
import s from "./ClaimForm.module.css";

type FieldErrors = Partial<Record<keyof ClaimFields, string>>;

export function ClaimForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const payload = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    payload.page = window.location.href;

    setStatus("sending");
    setError(null);
    setFieldErrors({});

    try {
      const res = await fetch("/api/claim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => null)) as ClaimResponse | null;

      if (res.ok && data?.ok) {
        setStatus("sent");
        return;
      }
      setStatus("idle");
      setError(data && !data.ok ? data.error : "Something went wrong. Please try again.");
      if (data && !data.ok && data.fields) setFieldErrors(data.fields);
    } catch {
      setStatus("idle");
      setError("Couldn't reach the server. Check your connection and try again.");
    }
  }

  if (status === "sent") {
    return (
      <div className={s.success} role="status">
        <div className={s.successIcon}>
          <Check size={28} />
        </div>
        <h2 className={s.title}>Request Received</h2>
        <p className={s.successBody}>
          Thanks for applying. Our team will review your request and email your Kiro credits and onboarding link within
          48 hours.
        </p>
        <p className={s.successNote}>While you wait, watch our 2-minute Kiro quickstart video.</p>
        <div>
          <Button variant="secondary" size="md" trailingArrow type="button">
            Watch the Quickstart
          </Button>
        </div>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <>
      <div className={s.kicker}>Limited credits available</div>
      <h2 className={s.title}>Claim Your 3 Months of Kiro</h2>
      <p className={s.intro}>Takes 2 minutes. We review every request personally.</p>

      <form onSubmit={handleSubmit} className={s.form} aria-busy={sending}>
        <TextField
          label="Full name"
          name="name"
          placeholder="Priya Sharma"
          autoComplete="name"
          required
          error={fieldErrors.name}
        />
        <TextField
          label="Work email"
          name="email"
          type="email"
          placeholder="you@company.com"
          hint="Use an email on your company's own domain"
          autoComplete="email"
          required
          error={fieldErrors.email}
        />
        <TextField
          label="Phone number (WhatsApp)"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
          hint="Optional. We'll send your call reminders here."
          autoComplete="tel"
          error={fieldErrors.phone}
        />
        <div className={s.row}>
          <TextField
            label="Company"
            name="company"
            placeholder="Acme Labs"
            autoComplete="organization"
            required
            error={fieldErrors.company}
          />
          <TextField label="Team size" name="team" as="select" options={[...TEAM_SIZES]} error={fieldErrors.team} />
        </div>
        <TextField label="Your role" name="role" as="select" options={[...ROLES]} error={fieldErrors.role} />
        <TextField
          label="AWS account ID (optional)"
          name="awsid"
          placeholder="12-digit account ID"
          inputMode="numeric"
          hint="Not on AWS yet? Leave this blank and we will help you set one up."
          error={fieldErrors.awsid}
        />
        <TextField
          label="What do you want to build with Kiro?"
          name="usecase"
          placeholder="e.g. an AI support agent for our app"
          error={fieldErrors.usecase}
        />

        {/* Honeypot: hidden from people and screen readers, filled in by most bots. */}
        <div className={s.honeypot} aria-hidden="true">
          <label>
            Website
            <input type="text" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" defaultValue="" />
          </label>
        </div>

        {error ? (
          <p className={s.formError} role="alert">
            {error}
          </p>
        ) : null}

        <Button variant="primary" size="lg" type="submit" trailingArrow={!sending} fullWidth disabled={sending}>
          {sending ? "Sending…" : "Claim My Free Kiro Credits"}
        </Button>
        <p className={s.legal}>
          Credits are limited and subject to eligibility. By submitting, you agree to our{" "}
          <a href="#terms">offer terms</a> and <a href="#privacy">privacy policy</a>.
        </p>
      </form>
    </>
  );
}
