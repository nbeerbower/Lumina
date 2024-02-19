// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('llama', {
	loadModel: async (path: string) => {
		return await ipcRenderer.send('loadModel', path)
	}
})
