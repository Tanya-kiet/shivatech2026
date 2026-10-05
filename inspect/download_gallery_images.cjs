const https = require('https');
const fs = require('fs');
const path = require('path');

const galleryCode = fs.readFileSync('inspect/chunks/0qw_lu-7neubh.js', 'utf8');
const matches = [...galleryCode.matchAll(/["'](\/(?:gallery|images|events)\/[^"']+\.(?:png|jpg|jpeg|webp|svg))["']/g)].map(m => m[1]);

console.log('Found gallery image paths count:', matches.length);
console.log('Images:', matches);

fs.mkdirSync('public/gallery', { recursive: true });

async function download(relPath) {
  const url = 'https://shivatech2026.vercel.app' + relPath;
  const localPath = path.join('public', relPath.slice(1));
  fs.mkdirSync(path.dirname(localPath), { recursive: true });
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const stream = fs.createWriteStream(localPath);
        res.pipe(stream);
        stream.on('finish', () => {
          stream.close();
          console.log('Downloaded:', relPath);
          resolve();
        });
      } else {
        console.log(`Failed (${res.statusCode}):`, relPath);
        resolve();
      }
    }).on('error', () => resolve());
  });
}

async function run() {
  const uniqueImages = [...new Set(matches)];
  for (const img of uniqueImages) {
    await download(img);
  }
}

run();
