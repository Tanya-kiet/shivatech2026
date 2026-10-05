const fs = require('fs');

const f2 = fs.readFileSync('inspect/chunk2_beautified.js', 'utf8');
const f3 = fs.readFileSync('inspect/chunk3_beautified.js', 'utf8');

console.log('=== Chunk 2 size ===', f2.length);
console.log('=== Chunk 3 size ===', f3.length);

// Search for text snippets in chunk2 and chunk3 that look like headers or content
function extractJSXStrings(code, label) {
  console.log(`\n=================== ${label} ===================`);
  // Match lines containing text JSX or text properties
  const lines = code.split('\n');
  const interestingLines = [];
  lines.forEach((line, idx) => {
    if (
      line.includes('children:') ||
      line.includes('title:') ||
      line.includes('description:') ||
      line.includes('date:') ||
      line.includes('time:') ||
      line.includes('location:') ||
      line.includes('name:') ||
      line.includes('prize:') ||
      line.includes('category:') ||
      line.includes('question:') ||
      line.includes('answer:') ||
      line.includes('href:') ||
      line.includes('src:')
    ) {
      interestingLines.push(`${idx + 1}: ${line.trim().slice(0, 150)}`);
    }
  });
  console.log(`Found ${interestingLines.length} interesting lines. Sample:`);
  interestingLines.slice(0, 50).forEach(l => console.log(l));
}

extractJSXStrings(f2, 'Chunk 2');
extractJSXStrings(f3, 'Chunk 3');
