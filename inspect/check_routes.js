const https = require('https');

const routes = ['/', '/events', '/schedule', '/gallery', '/team', '/contact', '/faq'];

routes.forEach(route => {
  https.get('https://shivatech2026.vercel.app' + route, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log(`Route: ${route} -> Status: ${res.statusCode} | Length: ${data.length}`);
    });
  });
});
