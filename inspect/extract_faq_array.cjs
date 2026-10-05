const fs = require('fs');

const code = fs.readFileSync('inspect/chunks/1z01yegiumcvd.js', 'utf8');
const matches = [...code.matchAll(/question:\s*"([^"]+)",\s*answer:\s*"([^"]+)"/g)];

console.log('FAQ items found:', matches.length);
const faqData = matches.map(m => ({
  question: m[1],
  answer: m[2]
}));

// Apply Hackathon date update ONLY to Hackathon FAQ answers
faqData.forEach(f => {
  if (f.question.toLowerCase().includes('hacknation') || f.question.toLowerCase().includes('hackathon')) {
    f.answer = f.answer.replace(/07–08 October 2026|07-08 October 2026|7 & 8 October 2026/g, '17 & 18 October 2026');
  }
});

fs.writeFileSync('src/data/faq.js', `export const FAQ_DATA = ${JSON.stringify(faqData, null, 2)};\n`);
console.log('FAQ data saved cleanly!');
