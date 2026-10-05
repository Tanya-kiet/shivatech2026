const fs = require('fs');
const path = require('path');

const chunks = [
  '3tsx5pa63c-am.js', // Schedule
  '1z01yegiumcvd.js', // Events
  '3d7hgsq4m82ay.js', // Team
  '2b09h9dbzxvbx.js', // Contact
  '0qw_lu-7neubh.js', // Gallery
  '1mkorwka5z166.js', // FAQ
  '3erkviv8breql.js', // Home part 1
  '2d_cujlkq3q6d.js', // Home part 2
  '3fz-7srow02au.js'  // Layout / Nav / Footer
];

chunks.forEach(file => {
  const p = path.join('inspect/chunks', file);
  if (!fs.existsSync(p)) return;
  const content = fs.readFileSync(p, 'utf8');

  console.log(`\n========================================`);
  console.log(`FILE: ${file}`);
  console.log(`========================================`);

  // Find object/array definitions (data arrays like events, timeline, team, faq, sponsors, prizes)
  const lines = content.split('\n');
  let snippet = [];
  lines.forEach((line, idx) => {
    if (
      line.includes('title:') || 
      line.includes('date:') || 
      line.includes('time:') ||
      line.includes('category:') ||
      line.includes('prize:') ||
      line.includes('question:') ||
      line.includes('answer:') ||
      line.includes('role:') ||
      line.includes('phone:') ||
      line.includes('email:') ||
      line.includes('venue:') ||
      line.includes('rules:') ||
      line.includes('targetDate:') ||
      line.includes('countdown')
    ) {
      snippet.push(`L${idx+1}: ${line.trim()}`);
    }
  });

  console.log(`Found ${snippet.length} data/prop lines.`);
  console.log(snippet.slice(0, 40).join('\n'));
});

