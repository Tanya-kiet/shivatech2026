const fs = require('fs');

['team', 'schedule', 'contact', 'gallery', 'events'].forEach(name => {
  const p = `./verbatim_${name}.js`;
  if (fs.existsSync(p)) {
    const code = fs.readFileSync(p, 'utf8');
    fs.writeFileSync(`./verbatim_${name}.cjs`, code);
    try {
      const res = require(`./verbatim_${name}.cjs`);
      console.log(`${name} items count:`, Array.isArray(res) ? res.length : typeof res);
    } catch (e) {
      console.log(`${name} eval error:`, e.message);
    }
  }
});
