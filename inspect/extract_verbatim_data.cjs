const fs = require('fs');
const path = require('path');

// Helper to extract a variable array/object definition from a file
function extractVariableDef(filePath, varNamePattern) {
  const code = fs.readFileSync(filePath, 'utf8');
  const regex = new RegExp(`(?:const|let|var|exports|\\[)\\s*(?:${varNamePattern})?\\s*=?\\s*(\\[[\\s\\S]*?\\]);`, 'm');
  const match = code.match(regex);
  if (match) return match[1];
  return null;
}

// 1. Team Data from inspect/chunks/3d7hgsq4m82ay.js
const teamCode = fs.readFileSync('inspect/chunks/3d7hgsq4m82ay.js', 'utf8');
// Find where the array of team members starts
const teamStartIdx = teamCode.indexOf('[{');
const teamEndIdx = teamCode.lastIndexOf('}]') + 2;
const teamRaw = teamCode.slice(teamStartIdx, teamEndIdx);
console.log('Team raw length:', teamRaw.length);
fs.writeFileSync('inspect/verbatim_team.js', 'module.exports = ' + teamRaw + ';');

// 2. Schedule Data from inspect/chunks/3tsx5pa63c-am.js
const scheduleCode = fs.readFileSync('inspect/chunks/3tsx5pa63c-am.js', 'utf8');
const schedStartIdx = scheduleCode.indexOf('[{');
const schedEndIdx = scheduleCode.indexOf('}]') + 2;
// Find the main schedule array which contains pillLabel
const schedArrayStart = scheduleCode.indexOf('[{');
let schedDepth = 0;
let schedArrayEnd = -1;
for (let i = schedArrayStart; i < scheduleCode.length; i++) {
  if (scheduleCode[i] === '[') schedDepth++;
  else if (scheduleCode[i] === ']') {
    schedDepth--;
    if (schedDepth === 0) {
      schedArrayEnd = i + 1;
      break;
    }
  }
}
const scheduleRaw = scheduleCode.slice(schedArrayStart, schedArrayEnd);
console.log('Schedule raw length:', scheduleRaw.length);
fs.writeFileSync('inspect/verbatim_schedule.js', 'module.exports = ' + scheduleRaw + ';');

// 3. Contact Data from inspect/chunks/2b09h9dbzxvbx.js
const contactCode = fs.readFileSync('inspect/chunks/2b09h9dbzxvbx.js', 'utf8');
const contactStartIdx = contactCode.indexOf('[{');
let contactDepth = 0;
let contactEndIdx = -1;
for (let i = contactStartIdx; i < contactCode.length; i++) {
  if (contactCode[i] === '[') contactDepth++;
  else if (contactCode[i] === ']') {
    contactDepth--;
    if (contactDepth === 0) {
      contactEndIdx = i + 1;
      break;
    }
  }
}
const contactRaw = contactCode.slice(contactStartIdx, contactEndIdx);
console.log('Contact raw length:', contactRaw.length);
fs.writeFileSync('inspect/verbatim_contact.js', 'module.exports = ' + contactRaw + ';');

// 4. Gallery Data from inspect/chunks/0qw_lu-7neubh.js
const galleryCode = fs.readFileSync('inspect/chunks/0qw_lu-7neubh.js', 'utf8');
const galleryStartIdx = galleryCode.indexOf('[{');
let galleryDepth = 0;
let galleryEndIdx = -1;
for (let i = galleryStartIdx; i < galleryCode.length; i++) {
  if (galleryCode[i] === '[') galleryDepth++;
  else if (galleryCode[i] === ']') {
    galleryDepth--;
    if (galleryDepth === 0) {
      galleryEndIdx = i + 1;
      break;
    }
  }
}
const galleryRaw = galleryCode.slice(galleryStartIdx, galleryEndIdx);
console.log('Gallery raw length:', galleryRaw.length);
fs.writeFileSync('inspect/verbatim_gallery.js', 'module.exports = ' + galleryRaw + ';');

// 5. FAQ Data from inspect/chunks/1mkorwka5z166.js
const faqCode = fs.readFileSync('inspect/chunks/1mkorwka5z166.js', 'utf8');
const faqStartIdx = faqCode.indexOf('question:');
const faqArrayStart = faqCode.lastIndexOf('[', faqStartIdx);
let faqDepth = 0;
let faqEndIdx = -1;
for (let i = faqArrayStart; i < faqCode.length; i++) {
  if (faqCode[i] === '[') faqDepth++;
  else if (faqCode[i] === ']') {
    faqDepth--;
    if (faqDepth === 0) {
      faqEndIdx = i + 1;
      break;
    }
  }
}
const faqRaw = faqCode.slice(faqArrayStart, faqEndIdx);
console.log('FAQ raw length:', faqRaw.length);
fs.writeFileSync('inspect/verbatim_faq.js', 'module.exports = ' + faqRaw + ';');

// 6. Events Data from inspect/chunks/1z01yegiumcvd.js
const eventsCode = fs.readFileSync('inspect/chunks/1z01yegiumcvd.js', 'utf8');
const eventsStartIdx = eventsCode.indexOf('DEPARTMENTAL TECHNICAL EVENTS');
const eventsArrayStart = eventsCode.lastIndexOf('[', eventsStartIdx);
let eventsDepth = 0;
let eventsEndIdx = -1;
for (let i = eventsArrayStart; i < eventsCode.length; i++) {
  if (eventsCode[i] === '[') eventsDepth++;
  else if (eventsCode[i] === ']') {
    eventsDepth--;
    if (eventsDepth === 0) {
      eventsEndIdx = i + 1;
      break;
    }
  }
}
const eventsRaw = eventsCode.slice(eventsArrayStart, eventsEndIdx);
console.log('Events raw length:', eventsRaw.length);
fs.writeFileSync('inspect/verbatim_events.js', 'module.exports = ' + eventsRaw + ';');

