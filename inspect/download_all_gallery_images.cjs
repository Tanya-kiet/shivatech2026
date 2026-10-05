const https = require('https');
const fs = require('fs');
const path = require('path');

const galleryImages = [
  '/gallery/DSC04440.JPG',
  '/gallery/DSC04481.JPG',
  '/gallery/DSC04484.JPG',
  '/gallery/DSC04492.JPG',
  '/gallery/DSC04530.JPG',
  '/gallery/DSC04607.JPG',
  '/gallery/DSC04664.JPG',
  '/gallery/DSC04722.JPG',
  '/gallery/DSC04727.JPG',
  '/gallery/DSC04753.JPG',
  '/gallery/city_skyline_rooftop.jpg'
];

fs.mkdirSync('public/gallery', { recursive: true });

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
          console.log('Successfully downloaded:', relPath, `(Size: ${fs.statSync(localPath).size} bytes)`);
          resolve();
        });
      } else {
        console.log(`Failed download (${res.statusCode}):`, relPath);
        resolve();
      }
    }).on('error', (err) => {
      console.log('Error downloading:', relPath, err.message);
      resolve();
    });
  });
}

async function run() {
  for (const img of galleryImages) {
    await download(img);
  }
}

run();
