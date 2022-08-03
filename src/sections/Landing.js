import Image from "next/image";
import backgroundImage from "../assets/home.jpeg";
import logo from "../assets/logo.svg";
import { NavLink } from "../components";

export const Landing = () => {
	return (
		<section className="relative text-secondary">
			<Image
				style={{ zIndex: "-1" }}
				src={backgroundImage}
				alt="Birds House"
				layout="fill"
				objectFit="cover"
				objectPosition="right"
			/>

			<div className="flex h-screen flex-col items-center bg-gradient-to-br from-primary backdrop-blur-[2px] lg:w-2/5">
				<div className="relative mt-48 mb-4 hidden md:block">
					<Image src={logo} alt="Birds House logo" width="380" height="220" />
				</div>
				<div className="mt-40 mb-4 text-center font-primary md:hidden">
					<h1 className="text-8xl tracking-tighter sm:text-9xl">BIRDS</h1>
					<h2 className="text-4xl font-light tracking-widest sm:text-5xl">
						HOUSE
					</h2>
				</div>

				<h1 className="hidden font-accent tracking-widest md:block">
					Parâng / Romania
				</h1>

				<NavLink href="/book-now" addClass="lg:hidden mt-12">
					Book now
				</NavLink>
			</div>
		</section>
	);
};
