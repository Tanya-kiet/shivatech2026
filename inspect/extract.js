const fs = require('fs');

const files = ['inspect/chunk1.js', 'inspect/chunk2.js', 'inspect/chunk3.js', 'inspect/chunk4.js'];
files.forEach(file => {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  console.log('=== FILE:', file, '===');

  // Dates
  const dates = content.match(/\b(?:\d{1,2}\s*(?:&|-|to)?\s*\d{0,2}\s+[A-Za-z]+|\w+\s+\d{1,2}(?:\s*&\s*\d{1,2})?),?\s*\d{4}\b/gi);
  if (dates) console.log('Dates found:', [...new Set(dates)]);

  // Target dates or Date constructors
  const dateObjs = content.match(/new Date\([^)]*\)/gi) || [];
  const isoDates = content.match(/"\d{4}-\d{2}-\d{2}[^"]*"/gi) || [];
  console.log('Date objects/strings:', [...new Set([...dateObjs, ...isoDates])]);

  // Image URLs
  const images = content.match(/["']([^"']+\.(?:png|jpg|jpeg|svg|webp|ico|gif))["']/gi) || [];
  console.log('Images found:', [...new Set(images)].slice(0, 30));
});
