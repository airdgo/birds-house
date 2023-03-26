import { classNames } from "../utils";

export default function Alert({ visible, error, children }) {
	return (
		<div
			className={classNames(
				visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
				error ? "bg-red-400" : "bg-blue-400",
				"pointer-events-none text-white fixed top-20 left-1/2 -translate-x-1/2 rounded-sm py-4 px-6 font-primary transition-all duration-300 ease-in-out"
			)}
		>
			<i>{children}</i>
		</div>
	);
}
