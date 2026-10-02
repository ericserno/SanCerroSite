const id = "1Aw_I7okts_kHt_KLqjp-fKzdlVVpU0mZIwXXu-3sJgY";
const stamp = Date.now();
const tip = {
  name: "Cursor Retest",
  email: "cursor-retest@example.com",
  category: "other",
  title: `Sheet retest ${stamp}`,
  details:
    "Retesting tip delivery after Apps Script /exec and Anyone access were confirmed. Safe to delete this row.",
  location: "San Cerro",
  whenText: new Date().toISOString(),
  website: "",
};

const before = await (
  await fetch(`https://docs.google.com/spreadsheets/d/${id}/export?format=csv&gid=0`)
).text();
console.log("BEFORE rows", before.trim().split(/\n/).length);

const res = await fetch("https://sancerrosite.vercel.app/api/tips", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(tip),
});
const body = await res.text();
console.log("API", res.status, body);

await new Promise((r) => setTimeout(r, 3000));

const after = await (
  await fetch(`https://docs.google.com/spreadsheets/d/${id}/export?format=csv&gid=0`)
).text();
console.log("AFTER rows", after.trim().split(/\n/).length);
console.log(after);
console.log("FOUND_TITLE", after.includes(`Sheet retest ${stamp}`));
