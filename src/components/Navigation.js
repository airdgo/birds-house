import { navigation } from "../constants";
import { classNames } from "../utils";
import Link from "next/link";

export const Navigation = ({ onClick, isOpen }) => {
	return (
		<div
			className={classNames(
				isOpen ? "translate-y-32 opacity-100" : "-translate-y-full opacity-0",
				"absolute top-0 left-0 flex w-full flex-col items-center justify-center text-sm duration-500 md:static md:translate-y-0 md:flex-row md:justify-between md:opacity-100"
			)}
		>
			<ul className="mb-10 flex flex-col items-center justify-center gap-10 md:mb-0 md:flex-row">
				{navigation.map((nav) => (
					<li key={nav.title} onClick={onClick}>
						<a href={nav.link} title={nav.title} className={nav.class}>
							{nav.content}
						</a>
					</li>
				))}
			</ul>
			<Link href="/book-now">
				<a className="bg-secondary px-4 py-1 text-primary transition-opacity duration-300 hover:opacity-80">
					Book now
				</a>
			</Link>
		</div>
	);
};
