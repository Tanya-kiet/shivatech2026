const fs = require('fs');

function findArraysWithKey(code, keyName) {
  let idx = 0;
  const results = [];
  while ((idx = code.indexOf(keyName, idx)) !== -1) {
    // Find the enclosing array `[` before this index or start of object array
    let start = code.lastIndexOf('[', idx);
    if (start !== -1) {
      let depth = 0;
      let end = -1;
      for (let i = start; i < code.length; i++) {
        if (code[i] === '[') depth++;
        else if (code[i] === ']') {
          depth--;
          if (depth === 0) {
            end = i;
            break;
          }
        }
      }
      if (end !== -1) {
        results.push(code.slice(start, end + 1));
      }
    }
    idx += keyName.length;
  }
  return results;
}

const files = {
  faq: 'inspect/sources/1mkorwka5z166.js',
  schedule: 'inspect/sources/3tsx5pa63c-am.js',
  team: 'inspect/sources/3d7hgsq4m82ay.js',
  contact: 'inspect/sources/2b09h9dbzxvbx.js',
  gallery: 'inspect/sources/0qw_lu-7neubh.js',
  events: 'inspect/sources/1z01yegiumcvd.js',
  home1: 'inspect/sources/3erkviv8breql.js',
  home2: 'inspect/sources/2d_cujlkq3q6d.js'
};

Object.entries(files).forEach(([name, path]) => {
  const code = fs.readFileSync(path, 'utf8');
  console.log(`=== ${name} ===`);
  const keys = ['question:', 'pillLabel:', 'role:', 'category:', 'prize:', 'venue:', 'date:', 'title:'];
  keys.forEach(k => {
    const arrs = findArraysWithKey(code, k);
    if (arrs.length > 0) {
      console.log(`  Key "${k}": found ${arrs.length} arrays. Max len: ${Math.max(...arrs.map(a => a.length))}`);
      // Save largest array to inspect/data_<name>_<k>.json or js
      const maxArr = arrs.sort((a, b) => b.length - a.length)[0];
      fs.writeFileSync(`inspect/data_${name}_${k.replace(':', '')}.js`, maxArr);
    }
  });
});

