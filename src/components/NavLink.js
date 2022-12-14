import Link from "next/link";
import { classNames } from "../utils";

export const NavLink = ({ children, href, addClass }) => {
	return (
		<Link href={href}>
			<a
				role="button"
				className={classNames(
					addClass,
					"border px-4 py-1 text-secondary transition-opacity duration-300 hover:opacity-80"
				)}
			>
				{children}
			</a>
		</Link>
	);
};
