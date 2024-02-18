import { useLocation } from 'react-router-dom'

interface MenuItemProps {
	route: string;
	label: string;
}

function MenuItem({ route, label }: MenuItemProps) {
	const location = useLocation()
	const isActive = location.pathname === route

	return (
		<a href={route} className={isActive ? 'active' : ''}>
			{label}
		</a>
	);
}

export default MenuItem;
