"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";
import { Check } from "@/components/icons";
import s from "./ClaimForm.module.css";

const TEAM_SIZES = ["1 to 5", "6 to 20", "21 to 50", "51 to 200", "200+"];
const ROLES = [
  "Founder or CEO",
  "CTO or Head of Engineering",
  "Engineering manager",
  "Product leader",
  "Other CXO",
  "Developer",
];

export function ClaimForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: send `new FormData(e.currentTarget)` to your CRM / API route.
    setSent(true);
  }

  if (sent) {
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

  return (
    <>
      <div className={s.kicker}>Limited credits available</div>
      <h2 className={s.title}>Claim Your 3 Months of Kiro</h2>
      <p className={s.intro}>Takes 2 minutes. We review every request personally.</p>

      <form onSubmit={handleSubmit} className={s.form}>
        <TextField label="Full name" name="name" placeholder="Priya Sharma" autoComplete="name" required />
        <TextField
          label="Work email"
          name="email"
          type="email"
          placeholder="you@company.com"
          hint="Use an email on your company's own domain"
          autoComplete="email"
          required
        />
        <TextField
          label="Phone number (WhatsApp)"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
          hint="Optional. We'll send your call reminders here."
          autoComplete="tel"
        />
        <div className={s.row}>
          <TextField label="Company" name="company" placeholder="Acme Labs" autoComplete="organization" required />
          <TextField label="Team size" name="team" as="select" options={TEAM_SIZES} />
        </div>
        <TextField label="Your role" name="role" as="select" options={ROLES} />
        <TextField
          label="AWS account ID (optional)"
          name="awsid"
          placeholder="12-digit account ID"
          inputMode="numeric"
          hint="Not on AWS yet? Leave this blank and we will help you set one up."
        />
        <TextField
          label="What do you want to build with Kiro?"
          name="usecase"
          placeholder="e.g. an AI support agent for our app"
        />
        <Button variant="primary" size="lg" type="submit" trailingArrow fullWidth>
          Claim My Free Kiro Credits
        </Button>
        <p className={s.legal}>
          Credits are limited and subject to eligibility. By submitting, you agree to our{" "}
          <a href="#terms">offer terms</a> and <a href="#privacy">privacy policy</a>.
        </p>
      </form>
    </>
  );
}
