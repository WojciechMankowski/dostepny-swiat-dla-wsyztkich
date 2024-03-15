import { Link } from 'react-router-dom'
const Menu = () => {
	return (
		<nav className="avbar navbar-expand-lg navbar-light ">
			<ul className="navbar-nav mr-auto ">
				<li className="nav-item" id="frist">
					<Link to="/">Strona główna</Link>
				</li>
				<li className="nav-item">
					<Link to="/new">Dodaj nowe miejsce</Link>
				</li>
				<li className="nav-item">
					<Link to="/ruchowa"> Niepełnosprawności ruchowa</Link>
				</li>
				{/* <li className="nav-item">
					<Link to="intelektualna">Niepełnosprawności intelektualna</Link>
				</li> */}
			</ul>
		</nav>
	)
}
export default Menu
