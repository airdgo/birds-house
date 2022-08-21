import logo from "../assets/logo.svg";
import Image from "next/image";
import { Menu, Navigation } from "../components";
import { useState } from "react";
import { classNames } from "../utils";

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
		<header className="fixed top-0 left-0 z-[100] w-full text-secondary md:mix-blend-difference">
			<div
				className={classNames(
					isOpen ? "translate-y-0" : "-translate-y-[calc(100vh-3rem)]",
					"absolute h-screen w-full bg-primary backdrop-blur duration-500 md:-translate-y-[calc(100vh-3rem)] md:bg-transparent md:backdrop-blur-0"
				)}
			/>
			<nav className="relative mx-auto flex h-12 w-[90%] max-w-[90rem] items-center">
				<div className="relative flex h-12 w-full items-center justify-between md:hidden">
					<a
						href="/"
						title="Home"
						className="flex w-14 items-center focus:outline focus:outline-1 focus:outline-secondary"
					>
						<Image src={logo} alt="Birds House logo" />
					</a>

					<Menu onClick={toggleMenu} isOpen={isOpen} />
				</div>
				<Navigation onClick={hideMenu} isOpen={isOpen} />
			</nav>
		</header>
	);
};
