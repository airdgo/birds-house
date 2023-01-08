import { ParallaxBanner } from "react-scroll-parallax";
import homeBrake from "../assets/homeBrake3.JPG";

export const HomeBrake = () => {
	const image = homeBrake.src;

	return (
		<section className="relative min-h-screen bg-primary text-secondary">
			<div className="relative h-[140vw] min-h-screen overflow-hidden bg-inherit opacity-80 lg:h-[120vw]">
				<ParallaxBanner
					layers={[{ image: image, speed: 7 }]}
					className="h-full w-full"
				/>
				<div className="absolute inset-0 z-20 m-auto h-[80%] w-4/5 rounded-full shadow-[0_0_0_9999px_#1e1e1e] sm:h-[90%]" />
			</div>

			<div className="absolute top-0 z-30 flex h-full w-full items-center py-10 sm:block md:py-60">
				<div className="top-20 mx-auto w-[90%] sm:sticky md:top-60">
					<h1 className="w-[80%] text-3xl sm:w-1/2 md:text-5xl lg:text-6xl">
						Sometimes you will never know the value of a moment until it becomes
						a memory.
					</h1>
				</div>
			</div>
		</section>
	);
};
