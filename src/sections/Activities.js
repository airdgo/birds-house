import { useState, useRef } from "react";
import { useDragToScroll } from "../hooks";
import Image from "next/image";
import { Carousel } from "../components";
import { carouselImages, activitiesImages } from "../constants";

export const Activities = () => {
	const ref = useRef();
	const onMouseDown = useDragToScroll(ref);
	const [isOpen, setIsOpen] = useState(false);
	const [imageIndex, setImageIndex] = useState(0);

	return (
		<section
			id="activities"
			className="relative grid min-h-screen place-items-center bg-primary"
		>
			<div
				ref={ref}
				onMouseDown={onMouseDown}
				className="flex h-full w-full flex-col items-center overflow-auto no-scrollbar md:flex-row first:[&>div]:rotate-12 md:first:[&>div]:rotate-0 [&:nth-child(3)]:[&>div]:rotate-flip-12 md:[&:nth-child(3)]:[&>div]:rotate-0 [&:nth-child(5)]:[&>div]:-rotate-flip-12 md:[&:nth-child(5)]:[&>div]:rotate-0 last:[&>div]:[&>span]:mb-7"
			>
				{carouselImages.map((image) => {
					const isImageIdEven = image.id % 2 === 0;

					return isImageIdEven ? (
						<div
							key={image.id}
							className="z-10 flex h-[32vw] min-h-[10rem] w-[50rem] shrink-0 justify-center overflow-hidden rounded-3xl md:h-[30rem] md:w-[20rem]"
						>
							<div className="relative flex w-full flex-col justify-center gap-[2px]">
								<Image src={image.src} alt={image.alt} />
								<hr className="border border-secondary" />
							</div>
						</div>
					) : (
						<div
							key={image.id}
							className="relative z-10 h-[50vw] min-h-[15rem] w-full shrink-0 md:h-[30rem] md:w-[40rem]"
						>
							<div
								onDoubleClick={() => {
									setImageIndex(image.id - 1);
									setIsOpen(true);
								}}
								className="relative mx-auto h-full w-[90%] overflow-hidden rounded-xl md:w-full md:rounded-3xl"
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

				<Carousel
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					slides={activitiesImages}
					currentIndex={imageIndex}
					setCurrentIndex={setImageIndex}
				/>
			</div>
		</section>
	);
};
