const fs = require('fs');
const path = require('path');

const foundImagePaths = new Set();

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  const stat = fs.statSync(dir);
  if (!stat.isDirectory()) {
    const code = fs.readFileSync(dir, 'utf8');
    const matches = [...code.matchAll(/["'](\/(?:team|gallery|images|sponsors|assets)[^"']+\.(?:png|jpg|jpeg|webp|svg|ico))["']/gi)].map(m => m[1]);
    matches.forEach(m => foundImagePaths.add(m));
    return;
  }
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    const fullPath = path.join(dir, f);
    scanDir(fullPath);
  });
}

scanDir('src');
scanDir('index.html');

console.log(`Found ${foundImagePaths.size} unique image references in src/ and index.html:`);

let missingCount = 0;
Array.from(foundImagePaths).sort().forEach(relPath => {
  const localFile = path.join('public', relPath.slice(1));
  if (fs.existsSync(localFile)) {
    console.log(`  [OK] ${relPath} (${fs.statSync(localFile).size} bytes)`);
  } else {
    console.log(`  [MISSING!] ${relPath}`);
    missingCount++;
  }
});

console.log(`\nAudit finished! Missing files: ${missingCount}`);
