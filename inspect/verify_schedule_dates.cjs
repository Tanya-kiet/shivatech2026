const fs = require('fs');

const schedCode = fs.readFileSync('src/data/schedule.js', 'utf8');
console.log("Schedule days found:");
const matches = [...schedCode.matchAll(/pillLabel:\s*"([^"]+)"/g)];
matches.forEach(m => console.log(' -', m[1]));

