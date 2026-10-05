const fs = require('fs');

const c2 = fs.readFileSync('inspect/chunk2.js', 'utf8');
const c3 = fs.readFileSync('inspect/chunk3.js', 'utf8');

function findMatches(code, filename) {
  console.log(`=== Matches in ${filename} ===`);
  
  // Search for countdown timer or Date calculations
  const countdownMatches = code.match(/(\w*count\w*|\w*timer\w*|\w*target\w*|\w*date\w*)/gi);
  console.log('Countdown/timer regex count:', countdownMatches ? countdownMatches.length : 0);

  // Search for Date(..) instantiation or numbers that look like timestamps
  const newDateMatches = [...code.matchAll(/new\s+Date\(([^)]+)\)/g)];
  console.log('new Date(...) occurrences:', newDateMatches.map(m => m[0]));

  const dateParseMatches = [...code.matchAll(/Date\.parse\(([^)]+)\)/g)];
  console.log('Date.parse(...) occurrences:', dateParseMatches.map(m => m[0]));

  // Search for hardcoded timestamp numbers like 17... (13 digit timestamp)
  const timestamps = [...code.matchAll(/\b1[6789]\d{11}\b/g)];
  console.log('Timestamps:', timestamps.map(m => m[0]));
}

findMatches(c2, 'chunk2.js');
findMatches(c3, 'chunk3.js');
