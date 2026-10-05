const fs = require('fs');

const files = ['team', 'contact', 'schedule', 'gallery', 'events', 'faq'];

files.forEach(f => {
  const code = fs.readFileSync(`src/data/${f}.js`, 'utf8');
  console.log(`=== src/data/${f}.js === size: ${code.length} chars`);
});

