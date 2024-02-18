import { Outlet, useLocation } from 'react-router-dom'
import './AppBody.css'

import Home from '../../../pages/Home'

function AppBody() {
	const location = useLocation()

	return (
		<div id="app-body">
			{
				location.pathname === '/' ? (
					<Home />
				) : (
					<Outlet />
				)
			}
		</div>
	)
}

export default AppBody