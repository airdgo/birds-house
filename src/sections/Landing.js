import Image from "next/image";
import backgroundImage from "../assets/cabin/home.jpg";
import logo from "../assets/icons/svg/logo.svg";
import { NavLink } from "../components";

export const Landing = () => {
	return (
		<section className="relative z-10 text-secondary">
			<Image
				style={{ zIndex: "-1" }}
				src={backgroundImage}
				alt="Birds House"
				layout="fill"
				objectFit="cover"
				objectPosition="right top"
			/>

			<div className="flex h-screen flex-col items-center bg-gradient-to-br from-primary backdrop-blur-[2px] lg:w-2/5">
				<div className="relative mx-12 mt-48 mb-4">
					<Image
						src={logo}
						alt="Birds House logo"
						width="350"
						height="220"
						priority
						quality={50}
					/>
				</div>

				<h1 className="font-accent tracking-widest">Parâng / Romania</h1>

				<NavLink href="/contact" addClass="lg:hidden mt-12">
					Book now
				</NavLink>
			</div>
		</section>
	);
};
