import { Outlet } from 'react-router-dom'
import './AppBody.css'

function AppBody() {
	return (
		<div id="app-body">
			<Outlet />
		</div>
	)
}

export default AppBody