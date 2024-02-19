export interface ILlamaAPI {
	loadModel: (path: string) => Promise<void>
}

declare global {
	interface Window {
		llama: ILlamaAPI
	}
}
