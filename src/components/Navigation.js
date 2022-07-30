import { navigation } from "../constants";

export const Navigation = ({ onClick }) => {
	return (
		<ul className="flex items-center justify-center">
			{navigation.map((nav) => (
				<li key={nav.title} onClick={onClick}>
					<a
						href={nav.link}
						title={nav.title}
						className={nav.class}
						target={nav?.target}
					>
						{nav.content}
					</a>
				</li>
			))}
		</ul>
	);
};
