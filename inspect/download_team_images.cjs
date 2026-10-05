const https = require('https');
const fs = require('fs');
const path = require('path');

const teamCode = fs.readFileSync('inspect/chunks/3d7hgsq4m82ay.js', 'utf8');
const imageMatches = [...teamCode.matchAll(/image:\s*"(\/team\/[^"]+)"/g)].map(m => m[1]);

console.log('Found team image paths count:', imageMatches.length);
console.log('Sample images:', imageMatches.slice(0, 10));

fs.mkdirSync('public/team', { recursive: true });

async function download(relPath) {
  const url = 'https://shivatech2026.vercel.app' + relPath;
  const localPath = path.join('public', relPath.slice(1));
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
  const uniqueImages = [...new Set(imageMatches)];
  for (const img of uniqueImages) {
    await download(img);
  }
}

run();
