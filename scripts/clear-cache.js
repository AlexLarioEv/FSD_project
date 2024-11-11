const fs = require('fs');
const path = require('path');

const fileCache = path.resolve(__dirname, '..', 'node_modules', '.cache') 

fs.rm(fileCache, { recursive: true, force: true }, (err) => {
  if (err) {
    console.error(`Ошибка при удалении папки: ${err.message}`);
    return;
  }
});
