const fs = require('fs');
const path = require('path');

fs.mkdirSync('inspect/sources', { recursive: true });

// Function to dump formatted snippets of chunks
const files = fs.readdirSync('inspect/chunks').filter(f => f.endsWith('.js'));

files.forEach(file => {
  const code = fs.readFileSync(path.join('inspect/chunks', file), 'utf8');
  // Write full code to inspect/sources/
  fs.writeFileSync(`inspect/sources/${file}`, code);
});

console.log('Saved all chunk sources into inspect/sources/');
