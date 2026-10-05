const fs = require('fs');

function extractArray(code, startMarker, endMarker) {
  const startIdx = code.indexOf(startMarker);
  if (startIdx === -1) return null;
  let bracketCount = 0;
  let inArray = false;
  let arrayStart = -1;
  for (let i = startIdx; i < code.length; i++) {
    if (code[i] === '[') {
      if (!inArray) {
        inArray = true;
        arrayStart = i;
      }
      bracketCount++;
    } else if (code[i] === ']') {
      bracketCount--;
      if (inArray && bracketCount === 0) {
        return code.slice(arrayStart, i + 1);
      }
    }
  }
  return null;
}

// 1. FAQ Data
const faqCode = fs.readFileSync('inspect/sources/1mkorwka5z166.js', 'utf8');
const faqArrayStr = extractArray(faqCode, 'question:', ']');
fs.writeFileSync('inspect/extracted_faq.js', 'module.exports = ' + faqArrayStr);
console.log('FAQ Extracted len:', faqArrayStr ? faqArrayStr.length : 0);

// 2. Schedule Data
const schedCode = fs.readFileSync('inspect/sources/3tsx5pa63c-am.js', 'utf8');
const schedArrayStr = extractArray(schedCode, 'pillLabel:', ']');
fs.writeFileSync('inspect/extracted_schedule.js', 'module.exports = ' + schedArrayStr);
console.log('Schedule Extracted len:', schedArrayStr ? schedArrayStr.length : 0);

// 3. Team Data
const teamCode = fs.readFileSync('inspect/sources/3d7hgsq4m82ay.js', 'utf8');
const teamArrayStr = extractArray(teamCode, 'category:', ']');
fs.writeFileSync('inspect/extracted_team.js', 'module.exports = ' + teamArrayStr);
console.log('Team Extracted len:', teamArrayStr ? teamArrayStr.length : 0);

// 4. Contact Data
const contactCode = fs.readFileSync('inspect/sources/2b09h9dbzxvbx.js', 'utf8');
const contactArrayStr = extractArray(contactCode, 'phone:', ']');
fs.writeFileSync('inspect/extracted_contact.js', 'module.exports = ' + contactArrayStr);
console.log('Contact Extracted len:', contactArrayStr ? contactArrayStr.length : 0);

// 5. Gallery Data
const galleryCode = fs.readFileSync('inspect/sources/0qw_lu-7neubh.js', 'utf8');
const galleryArrayStr = extractArray(galleryCode, 'category:', ']');
fs.writeFileSync('inspect/extracted_gallery.js', 'module.exports = ' + galleryArrayStr);
console.log('Gallery Extracted len:', galleryArrayStr ? galleryArrayStr.length : 0);

// 6. Events Data
const eventsCode = fs.readFileSync('inspect/sources/1z01yegiumcvd.js', 'utf8');
const eventsArrayStr = extractArray(eventsCode, 'venue:', ']');
fs.writeFileSync('inspect/extracted_events.js', 'module.exports = ' + eventsArrayStr);
console.log('Events Extracted len:', eventsArrayStr ? eventsArrayStr.length : 0);

