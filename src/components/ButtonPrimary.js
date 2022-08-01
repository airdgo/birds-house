export const ButtonPrimary = ({ children }) => {
	return (
		<button className="bg-secondary px-4 py-1 text-primary transition-opacity duration-300 hover:opacity-80">
			{children}
		</button>
	);
};
