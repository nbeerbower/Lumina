import './MenuHeader.css'
import MenuItem from '../MenuItem/MenuItem'

function MenuHeader() {
	return (
		<div className="nav-bar">
			<MenuItem route="/" label="Home" />
			<MenuItem route="/model" label="Model" />
			<MenuItem route="/inference" label="Inference" />
			<MenuItem route="/quantization" label="Quantization" />
			<MenuItem route="/settings" label="Settings" />
		</div>
	)
}

export default MenuHeader