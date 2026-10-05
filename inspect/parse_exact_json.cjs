const fs = require('fs');

function extractArrayByName(filePath, marker) {
  const code = fs.readFileSync(filePath, 'utf8');
  const idx = code.indexOf(marker);
  if (idx === -1) return [];
  const start = code.lastIndexOf('[', idx);
  let depth = 0;
  let end = -1;
  for (let i = start; i < code.length; i++) {
    if (code[i] === '[') depth++;
    else if (code[i] === ']') {
      depth--;
      if (depth === 0) {
        end = i + 1;
        break;
      }
    }
  }
  if (start !== -1 && end !== -1) {
    const raw = code.slice(start, end);
    try {
      return eval(`(${raw})`);
    } catch (e) {
      console.log('Eval error for marker:', marker, e.message);
      return [];
    }
  }
  return [];
}

// 1. Team: faculty and student arrays in 3d7hgsq4m82ay.js
const faculty = extractArrayByName('inspect/chunks/3d7hgsq4m82ay.js', 'Associate Dean');
const student = extractArrayByName('inspect/chunks/3d7hgsq4m82ay.js', 'Chairperson');
console.log('Faculty count:', faculty.length);
console.log('Student count:', student.length);

const fullTeamData = [...faculty, ...student];
fs.writeFileSync('src/data/team.js', `export const TEAM_DATA = ${JSON.stringify(fullTeamData, null, 2)};\n`);

// 2. Contact: array in 2b09h9dbzxvbx.js
const contact = extractArrayByName('inspect/chunks/2b09h9dbzxvbx.js', '+91 83750 52135');
console.log('Contact count:', contact.length);
fs.writeFileSync('src/data/contact.js', `export const CONTACT_DATA = ${JSON.stringify(contact, null, 2)};\n`);

// 3. Schedule: array in 3tsx5pa63c-am.js
const schedule = extractArrayByName('inspect/chunks/3tsx5pa63c-am.js', 'DAY 01 (05–06 OCT)');
console.log('Schedule count:', schedule.length);
fs.writeFileSync('src/data/schedule.js', `export const SCHEDULE_DATA = ${JSON.stringify(schedule, null, 2)};\n`);

// 4. Gallery: array in 0qw_lu-7neubh.js
const gallery = extractArrayByName('inspect/chunks/0qw_lu-7neubh.js', 'HACKNATION INNOVATION SPRINT');
console.log('Gallery count:', gallery.length);
fs.writeFileSync('src/data/gallery.js', `export const GALLERY_DATA = ${JSON.stringify(gallery, null, 2)};\n`);

// 5. Events: array in 1z01yegiumcvd.js or 1mkorwka5z166.js
const events = extractArrayByName('inspect/chunks/1z01yegiumcvd.js', 'HACKNATION (HACKATHON)');
console.log('Events count:', events.length);
fs.writeFileSync('src/data/events.js', `export const EVENTS_DATA = ${JSON.stringify(events, null, 2)};\n`);

// 6. FAQ: array in 1mkorwka5z166.js
const faq = extractArrayByName('inspect/chunks/1mkorwka5z166.js', 'What is SHIVATECH 2026?');
console.log('FAQ count:', faq.length);
fs.writeFileSync('src/data/faq.js', `export const FAQ_DATA = ${JSON.stringify(faq, null, 2)};\n`);

