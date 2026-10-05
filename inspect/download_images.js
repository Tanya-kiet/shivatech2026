const https = require('https');
const fs = require('fs');
const path = require('path');

const chunksDir = 'inspect/chunks';
const files = fs.readdirSync(chunksDir).filter(f => f.endsWith('.js'));

const imageSet = new Set([
  '/images/university_logo.png',
  '/images/acm_logo_cropped.png',
  '/images/cbii_logo.png',
  '/images/shivalik_campus.webp',
  '/images/hero/buildings-back.png',
  '/images/hero/buildings-front.png',
  '/images/hero/web-left.png',
  '/images/hero/web-right.png',
  '/images/hero/character.png',
  '/sponsors/unstop-seeklogo.svg',
  '/favicon.ico',
  '/favicon.png'
]);

files.forEach(file => {
  const code = fs.readFileSync(path.join(chunksDir, file), 'utf8');
  const matches = code.match(/["'](\/(?:images|sponsors|assets|logos)\/[^"']+\.(?:png|jpg|jpeg|webp|svg|ico))["']/gi) || [];
  matches.forEach(m => imageSet.add(m.slice(1, -1)));
});

console.log('Images to download:', Array.from(imageSet));

async function downloadImage(relPath) {
  const url = 'https://shivatech2026.vercel.app' + relPath;
  const localPath = path.join('public', relPath);
  fs.mkdirSync(path.dirname(localPath), { recursive: true });

  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(localPath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log('Successfully downloaded image:', relPath);
          resolve();
        });
      } else {
        console.log(`Failed (Status ${res.statusCode}):`, relPath);
        resolve();
      }
    }).on('error', (err) => {
      console.log('Error downloading', relPath, err.message);
      resolve();
    });
  });
}

async function main() {
  for (const img of Array.from(imageSet)) {
    await downloadImage(img);
  }
}

main();
