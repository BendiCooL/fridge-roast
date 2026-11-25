// Roast Your Fridge — make.fun entry (u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)
// Writes a single one-line roast of my fridge to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My fridge's crisper drawer is where vegetables go to enter witness protection.";

// Fail loudly instead of submitting an entry the gate would refuse.
const length = [...ENTRY].length;
if (length < 1 || length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${length} is outside the 1-200 character gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to ${outDir}/entry.txt`);
