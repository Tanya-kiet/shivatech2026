const fs = require('fs');

const css1 = fs.readFileSync('inspect/chunks/2373vt-6_8ytr.css', 'utf8');
const css2 = fs.readFileSync('inspect/chunks/2ea8hs4vs81d-.css', 'utf8');

console.log('CSS 1 length:', css1.length);
console.log('CSS 2 length:', css2.length);

// Extract keyframe animations or custom font definitions
const keyframes = css1.match(/@keyframes[^{]+\{[^}]+\}/g) || [];
console.log('Keyframes in CSS 1:', keyframes);

