const https = require('https');
const fs = require('fs');
const path = require('path');

const routes = ['/', '/events', '/schedule', '/gallery', '/team', '/contact', '/faq'];
const assetsToDownload = new Set();

function fetchPage(route) {
  return new Promise((resolve) => {
    https.get('https://shivatech2026.vercel.app' + route, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        fs.writeFileSync(`inspect/page_${route.replace('/', '') || 'home'}.html`, data);
        
        // Find JS script tags and CSS stylesheets
        const scriptMatches = data.match(/\/ _next\/static\/[^\s"'>]+/gi) || [];
        const scriptMatches2 = data.match(/\/ _next\/static\/[^\s"'>]+/gi) || [];
        const srcMatches = data.match(/src="(\/_next\/static\/[^"]+)"/g) || [];
        const hrefMatches = data.match(/href="(\/_next\/static\/[^"]+)"/g) || [];

        [...srcMatches, ...hrefMatches].forEach(m => {
          const url = m.split('"')[1];
          if (url) assetsToDownload.add(url);
        });

        resolve();
      });
    });
  });
}

async function run() {
  for (const r of routes) {
    await fetchPage(r);
  }
  console.log('Total assets to download:', assetsToDownload.size);
  console.log(Array.from(assetsToDownload));

  fs.writeFileSync('inspect/asset_list.json', JSON.stringify(Array.from(assetsToDownload), null, 2));
}

run();
