export const Menu = ({ onClick, isOpen }) => {
	return (
		<button
			className="flex h-7 w-7 items-center justify-center focus:outline focus:outline-1 focus:outline-secondary md:hidden"
			onClick={onClick}
			aria-label="Toggle Menu"
		>
			<span
				aria-hidden="true"
				className={
					"absolute block h-[0.2rem] w-6 transform bg-current transition duration-500 ease-in-out " +
					(isOpen ? "rotate-45" : "-translate-y-1.5")
				}
			></span>

			<span
				aria-hidden="true"
				className={
					"absolute block h-[0.2rem] w-6 transform bg-current transition duration-500 ease-in-out " +
					(isOpen ? "-rotate-45" : "translate-y-1.5")
				}
			></span>
		</button>
	);
};
