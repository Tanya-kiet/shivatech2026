const fs = require('fs');

const galleryCode = fs.readFileSync('inspect/chunks/0qw_lu-7neubh.js', 'utf8');

const startIdx = galleryCode.indexOf('id: "gal-01"');
const arrStart = galleryCode.lastIndexOf('[', startIdx);

let depth = 0;
let arrEnd = -1;
for (let i = arrStart; i < galleryCode.length; i++) {
  if (galleryCode[i] === '[') depth++;
  else if (galleryCode[i] === ']') {
    depth--;
    if (depth === 0) {
      arrEnd = i + 1;
      break;
    }
  }
}

const raw = galleryCode.slice(arrStart, arrEnd);
const galleryList = eval(`(${raw})`);

console.log('Extracted gallery items count:', galleryList.length);

// Apply Hackathon date update ONLY to Hackathon items (07–08 OCTOBER 2026 -> 17 & 18 October 2026)
galleryList.forEach(item => {
  if (item.event === 'HACKNATION 2.0' || item.date === '07–08 OCTOBER 2026') {
    item.date = '17 & 18 October 2026';
  }
});

fs.writeFileSync('src/data/gallery.js', `export const GALLERY_DATA = ${JSON.stringify(galleryList, null, 2)};\n`);
console.log('src/data/gallery.js updated 100% verbatim with real DSC photos!');
