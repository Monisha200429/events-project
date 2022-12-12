import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Nav.css";

function Nav() {
	const navRef = useRef();
  
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
 
	return (
		<header className="justify-content: space-left">
			<h3>Rapt !</h3>
				<div className="flex-initial">
			<nav ref={navRef} className="align-items-left">
				<a href="/#">Home</a>
				<a href="/#">Events</a>
				<a href="/#">Achievements</a>
				<a href="/#">About us</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
				</div>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Nav;