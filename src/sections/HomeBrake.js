import homeBrake from "../assets/home.jpeg";
import Image from "next/image";
import { ParallaxBanner } from "react-scroll-parallax";

export const HomeBrake = () => {
	const image =
		"https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1875&ixid=MnwxfDB8MXxyYW5kb218MHx8TGFuZHNjYXBlfHx8fHx8MTY1OTQ1OTI5Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1500";

	return (
		<section className="relative min-h-screen bg-primary text-secondary">
			<div className="relative h-[140vw] min-h-screen overflow-hidden bg-inherit opacity-40 lg:h-[120vw]">
				<ParallaxBanner
					layers={[{ image: image, speed: 20 }]}
					className="h-full w-full"
				/>
				<div className="absolute inset-0 z-20 m-auto h-[80%] w-4/5 rounded-full shadow-[0_0_0_9999px_#1e1e1e] sm:h-[90%]" />
			</div>

			<div className="absolute top-0 z-30 flex h-full w-full items-center py-10 sm:block md:py-60">
				<div className="top-20 mx-auto w-[90%] sm:sticky md:top-60">
					<h1 className="w-[80%] text-3xl sm:w-1/2 md:text-6xl">
						Sometimes you will never know the value of a moment until it becomes
						a memory.
					</h1>
				</div>
			</div>
		</section>
	);
};
