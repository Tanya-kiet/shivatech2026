const fs = require('fs');

function analyzeFile(filePath) {
  console.log('Analyzing', filePath);
  const code = fs.readFileSync(filePath, 'utf8');

  // Find all string literals longer than 15 chars or containing specific keywords
  const strRegex = /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/g;
  let match;
  const strings = new Set();
  while ((match = strRegex.exec(code)) !== null) {
    const str = match[0].slice(1, -1);
    if (str.length > 3 && !str.includes('node_modules') && !str.startsWith('data:image')) {
      strings.add(str);
    }
  }

  return { code, strings: Array.from(strings) };
}

const c2 = analyzeFile('inspect/chunk2.js');
const c3 = analyzeFile('inspect/chunk3.js');

// Search for dates or numbers or time strings
const allStrings = [...c2.strings, ...c3.strings];
console.log("Total unique strings found:", allStrings.length);

const dateLike = allStrings.filter(s => 
  s.toLowerCase().includes('october') || 
  s.toLowerCase().includes('oct') || 
  s.toLowerCase().includes('april') || 
  s.toLowerCase().includes('march') || 
  s.toLowerCase().includes('2026') || 
  s.toLowerCase().includes('2025') ||
  s.toLowerCase().includes('2024') ||
  /\b\d{1,2}\s*(?:&|-|to)\s*\d{1,2}\b/i.test(s)
);

console.log("Date-like strings:", dateLike);

