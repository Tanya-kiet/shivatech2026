const fs = require('fs');

console.log("=== CHECKING ORIGINAL COMPONENT DATA vs OUR DATA ===");

// 1. Team Data in original chunk 3d7hgsq4m82ay.js
const origTeamCode = fs.readFileSync('inspect/sources/3d7hgsq4m82ay.js', 'utf8');
console.log("\n--- ORIGINAL TEAM MEMBERS ---");
const teamMatches = [...origTeamCode.matchAll(/name:\s*"([^"]+)",\s*role:\s*"([^"]+)"/g)];
teamMatches.forEach(m => console.log(`  Name: "${m[1]}" | Role: "${m[2]}"`));

// 2. Contact Data in original chunk 2b09h9dbzxvbx.js
const origContactCode = fs.readFileSync('inspect/sources/2b09h9dbzxvbx.js', 'utf8');
console.log("\n--- ORIGINAL CONTACT MEMBERS ---");
const contactMatches = [...origContactCode.matchAll(/name:\s*"([^"]+)",\s*role:\s*"([^"]+)"/g)];
contactMatches.forEach(m => console.log(`  Name: "${m[1]}" | Role: "${m[2]}"`));

// 3. Events Data in original chunk 1z01yegiumcvd.js or 1mkorwka5z166.js
const origEventsCode = fs.readFileSync('inspect/sources/1z01yegiumcvd.js', 'utf8');
console.log("\n--- ORIGINAL EVENTS TILES ---");
const eventTitles = [...origEventsCode.matchAll(/title:\s*"([^"]+)"/g)];
eventTitles.forEach(m => console.log(`  Event Title: "${m[1]}"`));

// 4. Schedule Data in original chunk 3tsx5pa63c-am.js
const origScheduleCode = fs.readFileSync('inspect/sources/3tsx5pa63c-am.js', 'utf8');
console.log("\n--- ORIGINAL SCHEDULE DAYS ---");
const schedulePills = [...origScheduleCode.matchAll(/pillLabel:\s*"([^"]+)"/g)];
schedulePills.forEach(m => console.log(`  Pill Label: "${m[1]}"`));

// 5. FAQ Data in original chunk 1mkorwka5z166.js
const origFaqCode = fs.readFileSync('inspect/sources/1mkorwka5z166.js', 'utf8');
console.log("\n--- ORIGINAL FAQ QUESTIONS ---");
const faqQuestions = [...origFaqCode.matchAll(/question:\s*"([^"]+)"/g)];
console.log(`  Found ${faqQuestions.length} FAQ questions.`);
faqQuestions.slice(0, 15).forEach(m => console.log(`  - "${m[1]}"`));

