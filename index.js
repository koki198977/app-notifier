// In the main process.
const electron = require('electron')
const app = electron.app
const { BrowserView, BrowserWindow } = electron


function createWindow() {

    const win = new BrowserWindow({ width: 800, height: 600 })

    const view = new BrowserView()
    win.setBrowserView(view)
    // win.webContents.openDevTools()
    view.setBounds({ x: 0, y: 0, width: 300, height: 300 })

    win.loadURL('http://localhost:8000')

    // view.webContents.loadURL('https://electronjs.org')
}

app.on('ready', createWindow)