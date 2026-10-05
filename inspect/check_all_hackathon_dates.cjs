const fs = require('fs');
const path = require('path');

function searchDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    const fullPath = path.join(dir, f);
    if (fs.statSync(fullPath).isDirectory()) {
      searchDir(fullPath);
    } else if (f.endsWith('.js') || f.endsWith('.jsx') || f.endsWith('.css') || f.endsWith('.html')) {
      const code = fs.readFileSync(fullPath, 'utf8');
      const lines = code.split('\n');
      lines.forEach((line, idx) => {
        if (
          /hackathon|hacknation/i.test(line) &&
          /(07–08|07-08|7–8|7-8|07 & 08|7 & 8)\s*oct/i.test(line)
        ) {
          console.log(`[OLD DATE FOUND] ${fullPath}:L${idx+1}: ${line.trim()}`);
        }
      });
    }
  });
}

console.log("Searching src/ for old hackathon dates...");
searchDir('src');
console.log("Search complete!");
