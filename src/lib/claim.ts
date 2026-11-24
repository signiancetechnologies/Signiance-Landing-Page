// Shared by the claim form (client) and the /api/claim route (server).

export const TEAM_SIZES = ["1 to 5", "6 to 20", "21 to 50", "51 to 200", "200+"] as const;

export const ROLES = [
  "Founder or CEO",
  "CTO or Head of Engineering",
  "Engineering manager",
  "Product leader",
  "Other CXO",
  "Developer",
] as const;

/** Hidden field real visitors never fill in; bots usually do. */
export const HONEYPOT_FIELD = "website";

export type ClaimFields = {
  name: string;
  email: string;
  phone: string;
  company: string;
  team: string;
  role: string;
  awsid: string;
  usecase: string;
  page: string;
};

export type ClaimResponse = { ok: true } | { ok: false; error: string; fields?: Partial<Record<keyof ClaimFields, string>> };
