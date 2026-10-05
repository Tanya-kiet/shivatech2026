const fs = require('fs');
const path = require('path');

const chunksDir = 'inspect/chunks';
const files = fs.readdirSync(chunksDir).filter(f => f.endsWith('.js'));

files.forEach(file => {
  const code = fs.readFileSync(path.join(chunksDir, file), 'utf8');
  const lines = code.split('\n');

  lines.forEach((line, idx) => {
    if (
      /october|oct|september|sept|2026|date/i.test(line) &&
      !line.includes('node_modules') &&
      !line.includes('doctor') &&
      !line.includes('numOctaves')
    ) {
      console.log(`[${file}:L${idx+1}] ${line.trim().slice(0, 180)}`);
    }
  });
});
