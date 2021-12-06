const fs = require('fs');
 
const index = 'index.js';
const app = 'App.js';
const folder_name = [
  'src',
  'src/api',
  'src/assets',
  'src/component',
  'src/containers',
  'src/navigation',
  'src/constants',
  'src/services',
  'src/screens',
  'src/redux',
  'src/store',
];
const noop = () => {};
 
function createFolder(data) {
  return (
    !fs.existsSync(`./${data}/`) &&
    fs.mkdirSync(`./${data}/`, {recursive: true})
  );
}
 
function createFile(data) {
  let file_name;
  if (data == 'src') file_name = app;
  if (data != 'src') file_name = index;
 
  return fs.writeFile(`${__dirname}/${data}/${file_name}`, '', noop);
}
 
folder_name.map(data => createFolder(data));
folder_name.map(data => createFile(data));