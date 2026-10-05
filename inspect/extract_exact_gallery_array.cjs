const fs = require('fs');

const code = fs.readFileSync('inspect/chunks/0qw_lu-7neubh.js', 'utf8');

// Find the array `u = [{...}]` in 0qw_lu-7neubh.js
const idx = code.indexOf('id: "hacknation-innovation-sprint"');
if (idx !== -1) {
  const start = code.lastIndexOf('[', idx);
  let depth = 0;
  let end = -1;
  for (let i = start; i < code.length; i++) {
    if (code[i] === '[') depth++;
    else if (code[i] === ']') {
      depth--;
      if (depth === 0) {
        end = i + 1;
        break;
      }
    }
  }

  const raw = code.slice(start, end);
  const galleryItems = eval(`(${raw})`);
  console.log('Extracted gallery items count:', galleryItems.length);
  console.log(galleryItems);

  // Update dates specifically referring to Hackathon to 17 & 18 October 2026
  galleryItems.forEach(item => {
    if (item.date && (item.date.includes('07') || item.date.includes('08') || item.category === 'EVENTS' || item.category === 'SHIVATECH')) {
      if (item.title && (item.title.includes('HACKNATION') || item.title.includes('PROTOTYPING') || item.title.includes('CODING') || item.title.includes('WORKFLOW'))) {
        item.date = '17 & 18 October 2026';
      }
    }
  });

  fs.writeFileSync('src/data/gallery.js', `export const GALLERY_DATA = ${JSON.stringify(galleryItems, null, 2)};\n`);
  console.log('src/data/gallery.js updated cleanly!');
} else {
  console.log('Could not find marker in gallery chunk');
}

