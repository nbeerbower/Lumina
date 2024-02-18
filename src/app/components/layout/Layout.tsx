import { Outlet } from 'react-router-dom'

import Footer from './Footer/Footer'
import MenuHeader from './MenuHeader/MenuHeader'

function Layout() {
	return (
		<div>
			<MenuHeader />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout