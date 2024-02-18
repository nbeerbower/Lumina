import { Link } from 'react-router-dom';

function Error() {
	return (
		<div>
			<h1>Oops!</h1>
			<p>Somehow you navigated somewhere that doesn't exist!</p>
			<p>
				<Link to="/">Go Home</Link>
			</p>
		</div>
	);
}

export default Error;