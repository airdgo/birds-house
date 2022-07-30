import Logo from "../assets/logo.svg";
import { Menu, Navigation } from "../components";
import { useState } from "react";

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	function toggleMenu() {
		setIsOpen((prevState) => !prevState);
	}

	function hideMenu() {
		if (isOpen === false) return;
		setIsOpen(false);
	}

	return (
		<header className="fixed top-0 left-0 z-[100] w-full text-secondary">
			<div className="absolute h-12 w-full bg-[#1e1e1ecc] backdrop-blur" />
			<nav className="relative mx-auto flex h-full w-[85%] max-w-[90rem] items-center">
				<div className="relative z-40 flex h-12 w-full items-center justify-between">
					<div className="md:hidden">
						<a
							href="#"
							title="Home"
							className="focus:outline focus:outline-1 focus:outline-secondary"
						>
							<Logo />
						</a>
					</div>
					<Menu onClick={toggleMenu} isOpen={isOpen} />
				</div>
				<Navigation onClick={hideMenu} isOpen={isOpen} />
			</nav>
		</header>
	);
};
