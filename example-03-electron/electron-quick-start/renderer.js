// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// Renderer-Prozess
'use strict';
const ipc = require('electron').ipcRenderer;
const button = document.getElementById('button')
button.addEventListener('click', () => {
  ipc.send('example-request', 'Hello');
})
ipc.on('example-response', (event, arg) => {
  const message = `Antwort: ${arg}`
  document.getElementById('response').innerHTML = message;
})

// // //

// 'use strict';
// const ipc = require('electron').ipcRenderer;
// const buttonSelectFile = document.getElementById('select-file');
// buttonSelectFile.addEventListener('click', event => ipc.send('open-file-dialog'));
// ipc.on('selected-files', (event, path) => {
//   /* ... */ 
// });
// 
// 'use strict';
// const electron = require('electron');
// const app = electron.app;
// const BrowserWindow = electron.BrowserWindow;
// const ipc = require('electron').ipcMain
// const dialog = require('electron').dialog
// let mainWindow;
// 
// ipc.on('open-file-dialog', event => {
//   dialog.showOpenDialog({
//     properties: ['openFile', 'openDirectory']
//   }, files => {
//     if (files) {
//       event.sender.send('selected-files', files);
//     }
//   })
// })
