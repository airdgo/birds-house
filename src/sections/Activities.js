import { useRef } from "react";
import { useDragToScroll } from "../hooks";
import Image from "next/image";
import backgroundImage from "../assets/home.jpeg";
import biking from "../assets/biking.svg";
import snowboarding from "../assets/snowboarding.svg";
import hiking from "../assets/hiking.svg";
import birds from "../assets/birds.svg";

export const Activities = () => {
	const ref = useRef();
	const onMouseDown = useDragToScroll(ref);

	const imageArry = [
		{ id: 0, src: biking, alt: "biking icon" },
		{ id: 1, src: backgroundImage, alt: "bg" },
		{ id: 2, src: snowboarding, alt: "snowboarding icon" },
		{ id: 3, src: backgroundImage, alt: "bg" },
		{ id: 4, src: hiking, alt: "hiking icon" },
		{ id: 5, src: backgroundImage, alt: "bg" },
		{ id: 6, src: birds, alt: "birds icon" },
	];

	return (
		<section
			id="activities"
			className="relative grid min-h-screen place-items-center bg-primary"
		>
			<div
				ref={ref}
				onMouseDown={onMouseDown}
				className="flex h-full w-full flex-col items-center overflow-auto no-scrollbar  md:flex-row first:[&>div]:rotate-12 [&:nth-child(3)]:[&>div]:rotate-flip-12 [&:nth-child(5)]:[&>div]:-rotate-flip-12"
			>
				{imageArry.map((image) => {
					const isImageIdEven = image.id % 2 === 0;

					return isImageIdEven ? (
						<div
							key={image.id}
							className="z-10 flex h-[13rem] w-[50rem] shrink-0 justify-center overflow-hidden rounded-3xl md:h-[30rem] md:w-[20rem]"
						>
							<div className="relative flex w-full flex-col justify-center gap-[2px]">
								<Image src={image.src} alt={image.alt} />
								<hr className="border border-secondary" />
							</div>
						</div>
					) : (
						<div
							key={image.id}
							className="relative z-10 h-[20rem] w-full shrink-0 md:h-[30rem] md:w-[40rem]"
						>
							<div className="relative mx-auto h-full w-[90%] overflow-hidden rounded-3xl md:w-full">
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
	);
};
