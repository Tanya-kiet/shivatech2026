const http = require('http');

const routes = ['/', '/events', '/schedule', '/gallery', '/team', '/contact', '/faq'];

function checkRoute(route) {
  return new Promise((resolve) => {
    http.get('http://localhost:4173' + route, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        console.log(`Route "${route}" -> Status: ${res.statusCode} | Length: ${data.length}`);
        resolve();
      });
    });
  });
}

async function main() {
  for (const r of routes) {
    await checkRoute(r);
  }
}

main();
