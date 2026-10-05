const fs = require('fs');
const path = require('path');

const chunksDir = 'inspect/chunks';
const files = fs.readdirSync(chunksDir).filter(f => f.endsWith('.js'));

files.forEach(f => {
  const code = fs.readFileSync(path.join(chunksDir, f), 'utf8');
  // Look for exported pages or route indicators or titles
  const titles = code.match(/["']([A-Z0-9\s|-]{4,50})["']/g) || [];
  const uniqueTitles = [...new Set(titles.map(t => t.slice(1, -1)))].filter(t => 
    t.includes('SHIVATECH') || t.includes('SCHEDULE') || t.includes('EVENTS') || t.includes('GALLERY') || t.includes('TEAM') || t.includes('FAQ') || t.includes('CONTACT') || t.includes('RULES') || t.includes('PRIZE') || t.includes('TRACK') || t.includes('SPONSOR')
  );
  if (uniqueTitles.length) {
    console.log(`\n=== Chunk: ${f} ===`);
    console.log(uniqueTitles);
  }
});

