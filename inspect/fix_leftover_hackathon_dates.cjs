const fs = require('fs');

let eventsCode = fs.readFileSync('src/data/events.js', 'utf8');
eventsCode = eventsCode.replace(/07[–-]08 October 2026/g, '17 & 18 October 2026');
eventsCode = eventsCode.replace(/7[–-]8 October 2026/g, '17 & 18 October 2026');
fs.writeFileSync('src/data/events.js', eventsCode);

let faqCode = fs.readFileSync('src/data/faq.js', 'utf8');
faqCode = faqCode.replace(/07[–-]08 October 2026/g, '17 & 18 October 2026');
faqCode = faqCode.replace(/7[–-]8 October 2026/g, '17 & 18 October 2026');
fs.writeFileSync('src/data/faq.js', faqCode);

console.log('Fixed leftover hackathon dates in events.js and faq.js!');
