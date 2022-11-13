import Image from "next/image";
import { Carousel } from "../components";
import { carouselImages, activitiesImages } from "../constants";
import { gsap } from "gsap";
import { useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const Activities = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [imageIndex, setImageIndex] = useState(0);
	gsap.registerPlugin(ScrollTrigger);
	const matchMedia = gsap.matchMedia(),
		breakPoint = 800;

	useEffect(() => {
		const gsapContext = gsap.context(() => {
			matchMedia.add(
				{
					isDesktop: `(min-width: ${breakPoint}px) and (prefers-reduced-motion: no-preference)`,
				},
				(context) => {
					const { isDesktop } = context.conditions,
						trigger = isDesktop ? "#activities" : "";
					if (isDesktop) {
						const tl = gsap.timeline({
							scrollTrigger: {
								trigger: trigger,
								markers: true,
								scrub: 0.5,
								end: "100%",
								pin: true,
							},
						});
						tl.to("#element-to-animate", { x: "-100%" });

						return () => {};
					}
				}
			);
		});
		return () => gsapContext.revert();
	}, []);

	return (
		<>
			<section
				id="activities"
				className="relative flex min-h-[100vh] items-center justify-center overflow-hidden bg-primary"
			>
				<div
					id="element-to-animate"
					className="element top-1/2 left-1/2 flex h-full w-full flex-col items-center overflow-hidden md:flex-row md:overflow-visible first:[&>div]:rotate-12 md:first:[&>div]:rotate-0 [&:nth-child(3)]:[&>div]:rotate-flip-12 md:[&:nth-child(3)]:[&>div]:rotate-0 [&:nth-child(5)]:[&>div]:-rotate-flip-12 md:[&:nth-child(5)]:[&>div]:rotate-0 last:[&>div]:[&>span]:mb-7"
				>
					{carouselImages.map((image) => {
						const isImageIdEven = image.id % 2 === 0;

						return isImageIdEven ? (
							<div
								key={image.id}
								className="z-10 flex h-[32vw] min-h-[10rem] w-[50rem] shrink-0 justify-center overflow-hidden rounded-3xl md:h-[30vw] md:w-[20vw]"
							>
								<div className="relative flex w-full flex-col justify-center gap-[2px]">
									<Image src={image.src} alt={image.alt} />
									<hr className="border border-secondary" />
								</div>
							</div>
						) : (
							<div
								key={image.id}
								className="relative z-10 h-[50vw] min-h-[15rem] w-full shrink-0 md:h-[30vw] md:w-[40vw]"
							>
								<div
									onClick={() => {
										setImageIndex(image.id - 1);
										setIsOpen(true);
									}}
									className="relative mx-auto h-full w-[90%] cursor-pointer overflow-hidden rounded-xl md:w-full md:rounded-3xl"
								>
									<Image
										src={image.src}
										alt={image.alt}
										layout="fill"
										objectFit="cover"
										objectPosition="center"
									/>
								</div>
							</div>
						);
					})}
				</div>
			</section>
			<Carousel
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				slides={activitiesImages}
				currentIndex={imageIndex}
				setCurrentIndex={setImageIndex}
			/>
		</>
	);
};
