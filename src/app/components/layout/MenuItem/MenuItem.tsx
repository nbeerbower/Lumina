import { Link, useLocation } from 'react-router-dom'

interface MenuItemProps {
	route: string;
	label: string;
}

function MenuItem({ route, label }: MenuItemProps) {
	const location = useLocation()
	const isActive = location.pathname === route

	return (
		<Link to={route} className={isActive ? 'active' : ''}>
			{label}
		</Link>
	);
}

export default MenuItem;
