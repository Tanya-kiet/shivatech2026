const fs = require('fs');

let schedCode = fs.readFileSync('src/data/schedule.js', 'utf8');

// Replace Day 2 date '07 OCTOBER 2026' with '17 OCTOBER 2026'
// Replace Day 3 date '08 OCTOBER 2026' with '18 OCTOBER 2026'
// Replace '07–08 OCTOBER 2026' or '07-08 OCTOBER 2026' with '17 & 18 October 2026' for hackathon items

schedCode = schedCode.replace(/"07 OCTOBER 2026"/g, '"17 OCTOBER 2026"');
schedCode = schedCode.replace(/"08 OCTOBER 2026"/g, '"18 OCTOBER 2026"');
schedCode = schedCode.replace(/07 OCT/g, '17 OCT');
schedCode = schedCode.replace(/08 OCT/g, '18 OCT');
schedCode = schedCode.replace(/"07–08 OCTOBER 2026"/g, '"17 & 18 October 2026"');

fs.writeFileSync('src/data/schedule.js', schedCode);
console.log('Schedule Hackathon dates updated to 17 & 18 October 2026!');
