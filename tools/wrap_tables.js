const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.startsWith('Lection') && f.endsWith('.html'));

console.log('Found files:', files);

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  let index = 0;
  while ((index = content.indexOf('<table class="sim-table"', index)) !== -1) {
    // Check if it's already wrapped
    let before = content.substring(Math.max(0, index - 50), index);
    if (!before.includes('class="table-responsive')) {
      // Not wrapped! Let's wrap it.
      content = content.substring(0, index) + '<div class="table-responsive">\n' + content.substring(index);
      index += '<div class="table-responsive">\n'.length;
      
      // Find closing table tag
      let endIdx = content.indexOf('</table>', index);
      if (endIdx !== -1) {
        content = content.substring(0, endIdx + 8) + '\n</div>' + content.substring(endIdx + 8);
        index = endIdx + 15;
      }
    } else {
      index += 10;
    }
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log(`Processed ${file}`);
}
