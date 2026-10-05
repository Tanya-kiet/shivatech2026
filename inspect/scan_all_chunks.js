const fs = require('fs');
const path = require('path');

const chunksDir = 'inspect/chunks';
const files = fs.readdirSync(chunksDir).filter(f => f.endsWith('.js'));

console.log('Scanning', files.length, 'chunks...');

files.forEach(f => {
  const filePath = path.join(chunksDir, f);
  const code = fs.readFileSync(filePath, 'utf8');

  // Check for dates or target date settings
  const dateMatches = code.match(/(\d{1,2}\s*(?:&|-|to)?\s*\d{0,2}\s+[A-Za-z]+\s+\d{4})/gi) || [];
  const monthMatches = code.match(/(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2}/gi) || [];
  const yearMatches = code.match(/202[4567]/g) || [];
  const timerTarget = code.match(/Date\.parse\([^)]+\)|new Date\([^)]+\)/gi) || [];

  if (dateMatches.length || monthMatches.length || timerTarget.length) {
    console.log(`\n--- ${f} ---`);
    if (dateMatches.length) console.log('  Date matches:', [...new Set(dateMatches)]);
    if (monthMatches.length) console.log('  Month matches:', [...new Set(monthMatches)]);
    if (timerTarget.length) console.log('  Timer targets:', [...new Set(timerTarget)]);
  }
});

