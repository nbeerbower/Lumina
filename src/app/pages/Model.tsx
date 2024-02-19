import { useRef, useState } from 'react'

// TODO: break into components and style

function Model() {
	const fileInput = useRef(null)
	const [fileIsSelected, setFileIsSelected] = useState(false)
	const [modelPath, setModelPath] = useState(null)

	const handleLoad = () => {
		const file = fileInput.current.files[0]
		setModelPath(file.path)
		console.log('Loading model: ' + file.path)
		window.llama.loadModel(file.path)
	}

	const handleClear = () => {
		fileInput.current.value = ''
		setFileIsSelected(false)
	}

	return (
		<div>
			<h1>Model</h1>
			<p>Select a GGUF model from the disk.</p>
			<input type="file" accept=".gguf" ref={fileInput} onChange={() => setFileIsSelected(fileInput.current.files.length > 0)} />
			<button onClick={handleLoad} disabled={!fileIsSelected}>Load</button>
			<button onClick={handleClear} disabled={!fileIsSelected}>Clear</button>
		</div>
	)
}

export default Model