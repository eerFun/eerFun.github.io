import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const projectFile = (name) => new URL(`../${name}`, import.meta.url);

test("home links Full Résumé to the detailed timeline", async () => {
  const home = await readFile(projectFile("index.html"), "utf8");
  const fullResumeLink = home.match(
    /<a\s+href="([^"]+)">Full Résumé<\/a>/,
  );

  assert.ok(fullResumeLink, "Full Résumé link is missing from the home page");
  assert.equal(fullResumeLink[1], "/full-resume");
});

test("generated full timeline matches full-resume.json", async () => {
  const [source, page] = await Promise.all([
    readFile(projectFile("full-resume.json"), "utf8"),
    readFile(projectFile("full-resume.html"), "utf8"),
  ]);
  const resume = JSON.parse(source);
  const renderedWorkEntries = [
    ...page.matchAll(
      /<div class="content-text work-listing education-listing">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/g,
    ),
  ];
  const renderedHighlights = renderedWorkEntries.reduce(
    (total, entry) =>
      total + (entry[1].match(/<p class="highlight">/g) ?? []).length,
    0,
  );

  assert.equal(
    renderedWorkEntries.length - resume.education.length,
    resume.work.length,
    "generated page has the wrong number of work entries",
  );
  assert.equal(
    renderedHighlights,
    resume.work.reduce((total, job) => total + job.highlights.length, 0) +
      resume.education.reduce(
        (total, school) => total + (school.courses?.length ?? 0),
        0,
      ),
    "generated page is stale relative to full-resume.json",
  );
});
