import "server-only";
import { JWT } from "google-auth-library";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

export class SheetsConfigError extends Error {}

let client: JWT | null = null;

function getConfig() {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  // Env vars usually hold the key with literal "\n" sequences; turn them back into newlines.
  const key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const tab = process.env.GOOGLE_SHEET_TAB || "Sheet1";

  if (!sheetId || !email || !key) {
    throw new SheetsConfigError(
      "Missing GOOGLE_SHEET_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_PRIVATE_KEY environment variable.",
    );
  }
  return { sheetId, email, key, tab };
}

/** Append one row to the end of the configured sheet tab. */
export async function appendRow(values: string[]): Promise<void> {
  const { sheetId, email, key, tab } = getConfig();
  client ??= new JWT({ email, key, scopes: SCOPES });

  const range = encodeURIComponent(`'${tab.replace(/'/g, "''")}'!A1`);
  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(sheetId)}/values/${range}:append` +
    // RAW stores exactly what was typed, so a submitted "=FORMULA" is never evaluated.
    `?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;

  await client.request({
    url,
    method: "POST",
    data: { values: [values] },
  });
}
