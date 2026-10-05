const fs = require('fs');
const path = require('path');

const chunksDir = 'inspect/chunks';
const files = fs.readdirSync(chunksDir).filter(f => f.endsWith('.js'));

const urls = new Set();

files.forEach(file => {
  const code = fs.readFileSync(path.join(chunksDir, file), 'utf8');
  const matches = code.match(/https?:\/\/[^\s"']+/gi) || [];
  matches.forEach(u => urls.add(u));
});

console.log('All HTTP/HTTPS URLs found:');
Array.from(urls).forEach(u => console.log(' -', u));

