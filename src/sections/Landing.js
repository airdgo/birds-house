import Image from "next/image";
import Link from "next/link";
import backgroundImage from "../assets/home.jpeg";
import logo from "../assets/logo.svg";
import { ButtonPrimary } from "../components";

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

			<div className="flex h-screen max-w-xl flex-col items-center bg-gradient-to-br from-primary backdrop-blur-[2px]">
				<div className="relative mt-40 mb-4 hidden md:block">
					<Image src={logo} alt="Birds House logo" width="380" height="220" />
				</div>
				<div className="mt-40 mb-4 text-center font-primary md:hidden">
					<h1 className="text-8xl tracking-tighter">BIRDS</h1>
					<h2 className="text-4xl font-light tracking-widest">HOUSE</h2>
				</div>

				<h1 className="hidden font-accent tracking-widest md:block">
					Parâng / Romania
				</h1>

				<Link href="/book-now">
					<a>
						<ButtonPrimary>Book now</ButtonPrimary>
					</a>
				</Link>
			</div>
		</section>
	);
};
