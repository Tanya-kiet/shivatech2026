const fs = require('fs');
const path = require('path');

function search(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      search(full);
    } else if (f.endsWith('.js') || f.endsWith('.jsx') || f.endsWith('.json')) {
      const code = fs.readFileSync(full, 'utf8');
      
      // Check for 5-day
      const fiveDays = code.match(/5-day|5-DAY|5 power-packed days/gi);
      if (fiveDays) {
        console.log(`[5-DAY REF FOUND] ${full}:`, fiveDays);
      }

      // Check for old hackathon dates 07–08 October
      const oldHackDates = code.match(/07[–-]08\s+october\s+2026|7[–-]8\s+october\s+2026/gi);
      if (oldHackDates) {
        console.log(`[OLD HACKATHON DATE FOUND] ${full}:`, oldHackDates);
      }
    }
  });
}

search('src');
console.log('Final date audit completed!');
