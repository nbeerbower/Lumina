import { Router } from "@remix-run/router";
import { RouterProvider } from 'react-router-dom'

import Footer from './Footer/Footer'
import MenuHeader from './MenuHeader/MenuHeader'

function Layout({ router }: { router : Router }) {
	return (
		<div>
			<MenuHeader />
			<RouterProvider router={router} />
			<Footer />
		</div>
	)
}

export default Layout