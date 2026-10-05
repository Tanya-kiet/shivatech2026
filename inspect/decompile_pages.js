const fs = require('fs');

// Extract schedule data from 3tsx5pa63c-am.js
const scheduleCode = fs.readFileSync('inspect/sources/3tsx5pa63c-am.js', 'utf8');

// Extract events data from 1z01yegiumcvd.js
const eventsCode = fs.readFileSync('inspect/sources/1z01yegiumcvd.js', 'utf8');

// Extract team data from 3d7hgsq4m82ay.js
const teamCode = fs.readFileSync('inspect/sources/3d7hgsq4m82ay.js', 'utf8');

// Extract contact data from 2b09h9dbzxvbx.js
const contactCode = fs.readFileSync('inspect/sources/2b09h9dbzxvbx.js', 'utf8');

// Extract gallery data from 0qw_lu-7neubh.js
const galleryCode = fs.readFileSync('inspect/sources/0qw_lu-7neubh.js', 'utf8');

// Extract faq data from 1mkorwka5z166.js
const faqCode = fs.readFileSync('inspect/sources/1mkorwka5z166.js', 'utf8');

console.log('Schedule code size:', scheduleCode.length);
console.log('Events code size:', eventsCode.length);
console.log('Team code size:', teamCode.length);
console.log('Contact code size:', contactCode.length);
console.log('Gallery code size:', galleryCode.length);
console.log('FAQ code size:', faqCode.length);
