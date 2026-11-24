import { NextResponse } from "next/server";
import { HONEYPOT_FIELD, ROLES, TEAM_SIZES, type ClaimFields, type ClaimResponse } from "@/lib/claim";
import { appendRow, SheetsConfigError } from "@/lib/sheets";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const LIMITS: Record<keyof ClaimFields, number> = {
  name: 120,
  email: 200,
  phone: 40,
  company: 160,
  team: 40,
  role: 60,
  awsid: 20,
  usecase: 2000,
  page: 500,
};

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

function validate(body: Record<string, unknown>) {
  const data = Object.fromEntries(
    (Object.keys(LIMITS) as (keyof ClaimFields)[]).map((k) => [k, str(body[k])]),
  ) as ClaimFields;
  const fields: Partial<Record<keyof ClaimFields, string>> = {};

  for (const [k, max] of Object.entries(LIMITS) as [keyof ClaimFields, number][]) {
    if (data[k].length > max) fields[k] = `Please keep this under ${max} characters.`;
  }
  if (!data.name) fields.name = "Please enter your name.";
  if (!data.company) fields.company = "Please enter your company.";
  if (!EMAIL_RE.test(data.email)) fields.email = "Please enter a valid work email.";
  if (data.team && !(TEAM_SIZES as readonly string[]).includes(data.team)) fields.team = "Please pick a team size.";
  if (data.role && !(ROLES as readonly string[]).includes(data.role)) fields.role = "Please pick a role.";

  const awsDigits = data.awsid.replace(/[\s-]/g, "");
  if (awsDigits && !/^\d{12}$/.test(awsDigits)) fields.awsid = "An AWS account ID is 12 digits.";
  data.awsid = awsDigits;

  return { data, fields };
}

function json(body: ClaimResponse, status: number) {
  return NextResponse.json(body, { status });
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid request." }, 400);
  }
  if (!body || typeof body !== "object") return json({ ok: false, error: "Invalid request." }, 400);

  // Bot filled the hidden field: pretend it worked and store nothing.
  if (str(body[HONEYPOT_FIELD])) return json({ ok: true }, 200);

  const { data, fields } = validate(body);
  if (Object.keys(fields).length > 0) {
    return json({ ok: false, error: "Please check the highlighted fields.", fields }, 422);
  }

  try {
    await appendRow([
      new Date().toISOString(),
      data.name,
      data.email,
      data.phone,
      data.company,
      data.team,
      data.role,
      data.awsid,
      data.usecase,
      data.page,
    ]);
  } catch (err) {
    console.error("[claim] could not write to Google Sheets:", err instanceof SheetsConfigError ? err.message : err);
    return json(
      { ok: false, error: "We couldn't save your request just now. Please try again, or email connect@signiance.com." },
      500,
    );
  }

  return json({ ok: true }, 200);
}
