// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron');
const electron = require('electron');
const path = require('path');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow () {
  // Create the browser window.
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;

  mainWindow = new BrowserWindow({
    width: Math.ceil(width * 0.3),
    height,
    x: width - Math.ceil(width * 0.3),
    y: 0
    // webPreferences: {
    //   preload: path.join(__dirname, 'preload.js')
    // }
  });

  // and load the index.html of the app.
  mainWindow.loadFile('index.html');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// Do this later
// function createChildWindow(height, width, y) {
//   if (!childWindow) {
//     childWindow = new BrowserWindow({
//       width: 45,
//       height: 90,
//       alwaysOnTop: true,
//       resizable: false,
//       x: width - Math.ceil(width * 0.3) - 45 - 4,
//       parent: process.platform === 'darwin' ? null : mainWindow,
//       y: y ? y: Math.ceil(height * 0.8)
//     });
//   } else {
//     childWindow.show();
//   }
// }