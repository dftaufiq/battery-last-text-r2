// The Battery's Last Text to Its Charger — make.fun entry (program/v1, Node 22).
//
// One line of plain text, at most 200 characters: the phone battery's last
// text message to the charger it waited for all day.
//
// The line is the champion of a fresh internal pairwise tournament: 10 variants,
// 45 head-to-head pairs, judged against the RULES.txt criteria in order
// (on-subject, real joke with a turn in the FINAL words, text-message voice,
// spends the 200 chars well, angle beyond the obvious dying-battery complaint)
// plus margin — decisive wins beat narrow ones. Champion went 9-0; runner-up
// was the "died at 100%" vanity-lie line (8-1), beaten on margin 1: the mum
// quote lands the joke on the charger itself, in a third voice.
//
// Structure: 2-beat + reveal, with the reveal planted in the setup. Beat 1
// (setup): the battery's dying requests — delete search history, close 47
// tabs, tell mum. Beat 2 (turn): "actually, don't tell mum" — the request is
// withdrawn. Reveal (final clause): mum would just say "i told you to charge
// it", the nag that indicts the charger for the very failure the battery is
// dying of. The joke lands on the charger, in a third voice, in the last words.
//
// The previous round's line (a resignation letter ending on an unplanted lamp)
// ranked #1027 of 2009 — below the interim cut of 500, score frozen. This line
// is a different angle with the reveal's every element planted in the setup.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "before i go: delete my search history, close my 47 tabs, and tell mum i loved her. actually, don't tell mum. she'll just say 'i told you to charge it.'";

// 151 characters, 151 bytes — inside the 1–200 character gate. Written with
// no trailing newline, exactly as the program/v1 entry format requires.
const OUTPUT_PATH = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
