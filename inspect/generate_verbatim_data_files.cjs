const fs = require('fs');

// 1. Exact Team Data from 3d7hgsq4m82ay.js
const teamCode = fs.readFileSync('inspect/chunks/3d7hgsq4m82ay.js', 'utf8');

// Extract faculty array n
const nMatch = teamCode.match(/n\s*=\s*(\[\s*\{[\s\S]*?\}\s*\]);/);
// Extract student lead array l
const lMatch = teamCode.match(/l\s*=\s*(\[\s*\{[\s\S]*?\}\s*\]);/);

let faculty = [];
let student = [];

if (nMatch) {
  faculty = eval(`(${nMatch[1]})`);
}
if (lMatch) {
  student = eval(`(${lMatch[1]})`);
}

console.log('Faculty count:', faculty.length);
console.log('Student count:', student.length);

const fullTeamData = {
  faculty,
  student
};

fs.writeFileSync('src/data/team.js', `export const TEAM_DATA = ${JSON.stringify(fullTeamData, null, 2)};\n`);

// 2. Exact Contact Data from 2b09h9dbzxvbx.js
const contactCode = fs.readFileSync('inspect/chunks/2b09h9dbzxvbx.js', 'utf8');
const contactMatch = contactCode.match(/c\s*=\s*(\[\s*\{[\s\S]*?\}\s*\]);/);
let contactList = [];
if (contactMatch) {
  contactList = eval(`(${contactMatch[1]})`);
}
console.log('Contact list count:', contactList.length);
fs.writeFileSync('src/data/contact.js', `export const CONTACT_DATA = ${JSON.stringify(contactList, null, 2)};\n`);

// 3. Exact Schedule Data from 3tsx5pa63c-am.js
const scheduleCode = fs.readFileSync('inspect/chunks/3tsx5pa63c-am.js', 'utf8');
const schedMatch = scheduleCode.match(/d\s*=\s*(\[\s*\{[\s\S]*?\}\s*\]);/);
let scheduleList = [];
if (schedMatch) {
  scheduleList = eval(`(${schedMatch[1]})`);
}
console.log('Schedule days count:', scheduleList.length);

// Apply Hackathon date update ONLY to Hackathon day (Day 2 / Day 3)
scheduleList.forEach(day => {
  if (day.title && day.title.includes('HACKATHON')) {
    day.dateStr = '17 & 18 October 2026';
    day.shortPillLabel = 'D2 & D3 · 17–18 OCT';
    if (day.events) {
      day.events.forEach(e => {
        if (e.date && (e.date.includes('07') || e.date.includes('08'))) {
          e.date = '17 & 18 October 2026';
        }
      });
    }
  }
});

fs.writeFileSync('src/data/schedule.js', `export const SCHEDULE_DATA = ${JSON.stringify(scheduleList, null, 2)};\n`);

// 4. Exact Gallery Data from 0qw_lu-7neubh.js
const galleryCode = fs.readFileSync('inspect/chunks/0qw_lu-7neubh.js', 'utf8');
const galleryMatch = galleryCode.match(/u\s*=\s*(\[\s*\{[\s\S]*?\}\s*\]);/);
let galleryList = [];
if (galleryMatch) {
  galleryList = eval(`(${galleryMatch[1]})`);
}
console.log('Gallery count:', galleryList.length);

// Apply Hackathon date update ONLY to Hackathon gallery items
galleryList.forEach(g => {
  if (g.title && (g.title.includes('HACKNATION') || g.title.includes('HACKATHON') || g.category === 'HACKATHON')) {
    g.date = '17 & 18 October 2026';
  }
});

fs.writeFileSync('src/data/gallery.js', `export const GALLERY_DATA = ${JSON.stringify(galleryList, null, 2)};\n`);

// 5. Exact Events Data from 1z01yegiumcvd.js & 1mkorwka5z166.js
const eventsCode = fs.readFileSync('inspect/chunks/1z01yegiumcvd.js', 'utf8');
const eventsMatch = eventsCode.match(/(\[\s*\{[\s\S]*?id:\s*"hackathon"[\s\S]*?\}\s*\]);/);
let eventsList = [];
if (eventsMatch) {
  eventsList = eval(`(${eventsMatch[1]})`);
}
console.log('Events count:', eventsList.length);

eventsList.forEach(e => {
  if (e.id === 'hackathon' || e.category === 'HACKATHON') {
    e.date = '17 & 18 October 2026';
  }
});

fs.writeFileSync('src/data/events.js', `export const EVENTS_DATA = ${JSON.stringify(eventsList, null, 2)};\n`);

// 6. Exact FAQ Data from 1mkorwka5z166.js
const faqCode = fs.readFileSync('inspect/chunks/1mkorwka5z166.js', 'utf8');
const faqMatch = faqCode.match(/(\[\s*\{[\s\S]*?question:[\s\S]*?\}\s*\]);/);
let faqList = [];
if (faqMatch) {
  faqList = eval(`(${faqMatch[1]})`);
}
console.log('FAQ count:', faqList.length);

faqList.forEach(f => {
  if (f.question && f.question.toLowerCase().includes('hackathon')) {
    f.answer = f.answer.replace(/07–08 October 2026|07-08 October 2026|7 & 8 October 2026/g, '17 & 18 October 2026');
  }
});

fs.writeFileSync('src/data/faq.js', `export const FAQ_DATA = ${JSON.stringify(faqList, null, 2)};\n`);

console.log('ALL VERBATIM DATA FILES GENERATED!');
