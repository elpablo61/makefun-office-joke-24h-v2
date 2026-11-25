import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-Line Office Joke: 24-Hour Sprint — writes one office joke to /output/entry.txt.
// Gate: entry.txt must be UTF-8 text of 1 to 200 characters, one line, one joke.
// The line is a single sentence: setup (9 a.m. standup, 47 minutes, since June)
// pays off in the closing fact (nobody has ever stood up) — no explanation added.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line =
  "Our 9 a.m. standup has lasted 47 minutes every day since June, and nobody has ever stood up.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
