import activitiesBrake from "../assets/activitiesBrake2.jpeg";
import { ParallaxBanner } from "react-scroll-parallax";

export const ActivitiesBrake = () => {
	return (
		<section className="relative text-center text-neutral-50">
			<ParallaxBanner
				layers={[{ image: activitiesBrake.src, speed: -15 }]}
				className="aspect-[2/1]"
			/>
			<div className="absolute inset-0 aspect-[2/1] w-full bg-primary opacity-30" />
			<div className="absolute inset-0 flex items-center justify-center">
				<h1 className="w-[90%] max-w-6xl text-3xl font-thin sm:text-6xl md:text-7xl xl:text-8xl">
					There's a whole world out there.
				</h1>
			</div>
		</section>
	);
};
