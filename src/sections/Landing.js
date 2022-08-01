import Image from "next/image";
import backgroundImage from "../assets/home.jpeg";
import logo from "../assets/logo.svg";

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
				<div className="relative mt-40 mb-4">
					<Image src={logo} alt="Birds House logo" width="380" height="220" />
				</div>

				<h1 className="font-accent tracking-widest">Parâng / Romania</h1>
			</div>
		</section>
	);
};
