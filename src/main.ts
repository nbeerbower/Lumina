import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';


// TODO: move llama logic
// let model: LlamaModel;
// let context: LlamaContext;
// let chatSession: LlamaChatSession;

async function loadLlamaModel(path: string) {
  console.log('Loading model: ' + path)
  const {LlamaModel, LlamaContext, LlamaChatSession} = await Function('return import("node-llama-cpp")')();
  const model = new LlamaModel({
    modelPath: path
  });
  console.log('Model loaded: ' + model);
  return model;
  // context = new LlamaContext({model});
  // chatSession = new LlamaChatSession({context});
}

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  ipcMain.on('loadModel', (event, path) => {
    console.log('Loading model: ' + path)
    loadLlamaModel(path);
    // model = new LlamaModel({
    //   modelPath: path
    // });
    // context = new LlamaContext({model});
    // chatSession = new LlamaChatSession({context});
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
