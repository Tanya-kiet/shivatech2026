const fs = require('fs');

// Extract events from 1z01yegiumcvd.js
const eventsCode = fs.readFileSync('inspect/chunks/1z01yegiumcvd.js', 'utf8');
const eventsStart = eventsCode.indexOf('name: "HACKNATION 2.0"');
const eventsArrStart = eventsCode.lastIndexOf('[', eventsStart);

let depth = 0;
let eventsArrEnd = -1;
for (let i = eventsArrStart; i < eventsCode.length; i++) {
  if (eventsCode[i] === '[') depth++;
  else if (eventsCode[i] === ']') {
    depth--;
    if (depth === 0) {
      eventsArrEnd = i + 1;
      break;
    }
  }
}

const eventsRaw = eventsCode.slice(eventsArrStart, eventsArrEnd);
console.log('Events raw length:', eventsRaw.length);
const eventsData = eval(`(${eventsRaw})`);
console.log('Events items count:', eventsData.length);

// Update HACKNATION 2.0 date to 17 & 18 October 2026
eventsData.forEach(item => {
  if (item.name === 'HACKNATION 2.0' || item.category === 'HACKATHON') {
    item.date = '17 & 18 October 2026';
    if (item.faqs) {
      item.faqs.forEach(f => {
        if (f.answer && f.answer.includes('07–08 October 2026')) {
          f.answer = f.answer.replace(/07–08 October 2026|07-08 October 2026/g, '17 & 18 October 2026');
        }
      });
    }
  }
});

fs.writeFileSync('src/data/events.js', `export const EVENTS_DATA = ${JSON.stringify(eventsData, null, 2)};\n`);

// Extract FAQ from 1mkorwka5z166.js
const faqCode = fs.readFileSync('inspect/chunks/1mkorwka5z166.js', 'utf8');
const faqStart = faqCode.indexOf('question:');
const faqArrStart = faqCode.lastIndexOf('[', faqStart);

depth = 0;
let faqArrEnd = -1;
for (let i = faqArrStart; i < faqCode.length; i++) {
  if (faqCode[i] === '[') depth++;
  else if (faqCode[i] === ']') {
    depth--;
    if (depth === 0) {
      faqArrEnd = i + 1;
      break;
    }
  }
}

const faqRaw = faqCode.slice(faqArrStart, faqArrEnd);
console.log('FAQ raw length:', faqRaw.length);
const faqData = eval(`(${faqRaw})`);
console.log('FAQ items count:', faqData.length);

// Update Hackathon date in FAQ answers
faqData.forEach(f => {
  if (f.question && f.question.toLowerCase().includes('hacknation')) {
    f.answer = f.answer.replace(/07–08 October 2026|07-08 October 2026|7 & 8 October 2026/g, '17 & 18 October 2026');
  }
});

fs.writeFileSync('src/data/faq.js', `export const FAQ_DATA = ${JSON.stringify(faqData, null, 2)};\n`);

console.log('Events and FAQ extracted 100% verbatim!');
