const https = require('https');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const assets = JSON.parse(fs.readFileSync('inspect/asset_list.json', 'utf8'));

fs.mkdirSync('inspect/chunks', { recursive: true });

async function download(url) {
  const filename = path.basename(url);
  const dest = path.join('inspect/chunks', filename);
  return new Promise((resolve) => {
    https.get('https://shivatech2026.vercel.app' + url, (res) => {
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log('Downloaded:', filename);
        resolve();
      });
    });
  });
}

async function run() {
  for (const a of assets) {
    await download(a);
  }
  console.log('All downloads complete!');
}

run();
