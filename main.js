const { app, BrowserWindow } = require('electron')
const path = require('node:path')

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    }
  })
  mainWindow.loadFile('index.html')
  mainWindow.webContents.openDevTools()

  // setTimeout(() => {
  //   let anotherWindow = new BrowserWindow({
  //     width: 800,
  //     height: 600
  //   });
  //   anotherWindow.loadFile('index2.html')
  //   anotherWindow.webContents.openDevTools();
  //   console.log('anotherWindow : ', anotherWindow)
  // }, 5000)
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})