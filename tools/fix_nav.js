const fs = require('fs');
['Lection1.html', 'Lection2.html', 'Lection3.html'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<nav class="nav-bar" style="[^"]*">/g, '<nav class="nav-bar">');
  fs.writeFileSync(file, content);
  console.log('Fixed ' + file);
});
