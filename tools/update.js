const fs = require('fs');

let content = fs.readFileSync('Lection3.html', 'utf8');

// 1. Clean up Tables 3.1 and 3.2 inline styles
// Remove all inline style="padding: 1pt 4pt; font-size: 10.5pt; height: 14pt;" from th and td
content = content.replace(/ style="padding: 1pt 4pt; font-size: 10\.5pt; height: 14pt;"/g, '');

// Remove inline zebra coloring (CSS handles it now)  
content = content.replace(/<tr style="background-color: #F2F7FC;">/g, '<tr>');

// 2. Add table-narrow class to Tables 3.1 and 3.2 wrappers
content = content.replace(
  /(<p class="table-caption"><strong>Таблиця 3\.1\.<\/strong>[^<]+<\/p>)\n<div class="table-responsive">/g,
  '$1\n<div class="table-responsive table-narrow">'
);
content = content.replace(
  /(<p class="table-caption"><strong>Таблиця 3\.2\.<\/strong>[^<]+<\/p>)\n<div class="table-responsive">/g,
  '$1\n<div class="table-responsive table-narrow">'
);

// 3. Fix Mermaid syntax: replace -- (double dash link) with --- (triple dash)
// Only within mermaid blocks. The pattern FOBx -- FBTx should be FOBx --- FBTx
content = content.replace(/FOB1 -- FBT1/g, 'FOB1 --- FBT1');
content = content.replace(/FOB2 -- PLC2/g, 'FOB2 --- PLC2');
content = content.replace(/FOB8 -- FBT8/g, 'FOB8 --- FBT8');

// 4. Remove old inline cellspacing/cellpadding/style from calculation tables
content = content.replace(/ cellspacing="0" cellpadding="1" style="border-collapse: collapse;"/g, '');

// 5. Fix the nav container to use 1400px instead of 960px
content = content.replace(/<div style="max-width: 960px;/g, '<div style="max-width: 1400px;');

fs.writeFileSync('Lection3.html', content, 'utf8');
console.log('Lection3.html updated successfully!');

// Also fix Lection1 and Lection2 nav containers if they have 960px
for (const file of ['Lection1.html', 'Lection2.html']) {
  let c = fs.readFileSync(file, 'utf8');
  c = c.replace(/<div style="max-width: 960px;/g, '<div style="max-width: 1400px;');
  fs.writeFileSync(file, c, 'utf8');
  console.log(file + ' nav updated.');
}
