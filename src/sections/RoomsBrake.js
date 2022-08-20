import roomsBrake from "../assets/roomsBrake.jpg";
import { ParallaxBanner } from "react-scroll-parallax";

export const RoomsBrake = () => {
	return (
		<section className="relative text-center text-neutral-50">
			<ParallaxBanner
				layers={[{ image: roomsBrake.src, speed: -15 }]}
				className="aspect-[2/1]"
			/>
			<div className="absolute inset-0 flex items-center justify-center">
				<h1 className="w-[90%] max-w-6xl text-3xl font-thin sm:text-6xl md:text-7xl xl:text-8xl">
					Leave the road, take the trails.
				</h1>
			</div>
		</section>
	);
};
