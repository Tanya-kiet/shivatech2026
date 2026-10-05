const https = require('https');
const fs = require('fs');
const path = require('path');

// 1. Read gallery chunk inspect/chunks/0qw_lu-7neubh.js
const galleryCode = fs.readFileSync('inspect/chunks/0qw_lu-7neubh.js', 'utf8');

// Find all image URLs or string literals with extensions
const imgMatches = [...galleryCode.matchAll(/["'](\/(?:gallery|images|sponsors|assets)[^"']+\.(?:png|jpg|jpeg|webp|svg))["']/g)].map(m => m[1]);
console.log('Unique image paths in gallery chunk:', [...new Set(imgMatches)]);

// Find all HTTP/HTTPS image URLs in gallery chunk
const httpImgMatches = [...galleryCode.matchAll(/["'](https?:\/\/[^"']+\.(?:png|jpg|jpeg|webp|svg))["']/g)].map(m => m[1]);
console.log('HTTP image paths in gallery chunk:', [...new Set(httpImgMatches)]);

// Let's also fetch HTML of https://shivatech2026.vercel.app/gallery
https.get('https://shivatech2026.vercel.app/gallery', (res) => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', () => {
    fs.writeFileSync('inspect/ref_gallery.html', html);
    const htmlImgs = [...html.matchAll(/src="([^"]+)"/g)].map(m => m[1]);
    console.log('Images in ref_gallery.html:', [...new Set(htmlImgs)]);
  });
});

