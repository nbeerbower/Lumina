/*
	This is the main component of the application.
	It imports the router and passes it the main Layout component.
*/

import router from './router'
import Layout from './components/layout/Layout'

function App() {
	return (
		<Layout router={router} />
	)
}

export default App