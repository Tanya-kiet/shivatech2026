const fs = require('fs');

const galleryCode = fs.readFileSync('inspect/chunks/0qw_lu-7neubh.js', 'utf8');

// Match all gallery filename patterns or image strings in the code
const matches = [...galleryCode.matchAll(/["'](\/gallery\/[^"']+)["']/g)].map(m => m[1]);
console.log('All gallery image paths found in chunk:', [...new Set(matches)]);

// Let's also check all string literals in the chunk containing DSC or jpg or png
const dscMatches = [...galleryCode.matchAll(/["']([^"']*DSC[^"']*)["']/g)].map(m => m[1]);
console.log('All DSC matches in chunk:', [...new Set(dscMatches)]);

