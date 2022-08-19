import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="flex w-full items-center justify-center bg-[#f8f8f8] text-base font-light text-gray-400">
			<ul className="my-16 flex gap-6">
				<li>
					<Link href="/contact">Contact</Link>
				</li>
				<li>
					<Link href="/book-now">Book Now</Link>
				</li>
			</ul>
		</footer>
	);
};
