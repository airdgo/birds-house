import { useEffect, useState } from "react";
import Image from "next/image";
import { roomsImages } from "../constants";

export const Modal = ({ imageIndex, isOpen, onClose }) => {
	// useEffect(() => {
	// 	if (isOpen) document.body.style.overflow = "hidden";
	// 	return () => (document.body.style.overflow = "unset");
	// });

	if (!isOpen) return null;

	const slides = roomsImages;
	const [currentIndex, setCurrentIndex] = useState(imageIndex);

	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const goToNext = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<div className="fixed top-0 left-0 z-[200] grid h-screen w-full place-items-center bg-gray-200">
			<div>
				<div
					onClick={goToPrevious}
					className="absolute top-1/2 left-8 z-10 h-12 w-12 -translate-y-1/2 cursor-pointer rounded-full border-2 border-solid border-gray-300 mix-blend-difference"
				>
					<div className="absolute top-1/2 right-[0.85rem] m-auto h-3 w-3 -translate-y-1/2 -rotate-[135deg] border-t-2 border-r-2 border-solid border-inherit" />
				</div>
				<div
					onClick={onClose}
					className="absolute top-1/2 left-1/2 z-10 h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full border-2 border-solid border-gray-300 mix-blend-difference"
				>
					<div className="absolute top-1/2 right-[0.55rem] m-auto h-3 w-3 -translate-y-1/2 -rotate-[135deg] border-t-2 border-r-2 border-solid border-inherit" />
					<div className="absolute top-1/2 left-[0.55rem] m-auto h-3 w-3 -translate-y-1/2 rotate-45 border-t-2 border-r-2 border-solid border-inherit" />
				</div>
				<div
					onClick={goToNext}
					className="absolute top-1/2 right-8 z-10 h-12 w-12 -translate-y-1/2 cursor-pointer rounded-full border-2 border-solid border-gray-300 mix-blend-difference"
				>
					<div className="absolute top-1/2 left-[0.85rem] m-auto h-3 w-3 -translate-y-1/2 rotate-45 border-t-2 border-r-2 border-solid border-inherit" />
				</div>
			</div>

			<div className="relative h-full w-full">
				<Image
					src={slides[currentIndex].imgSrc}
					alt={slides[currentIndex].alt}
					layout="responsive"
					objectFit="cover"
					objectPosition="center"
				/>
			</div>

			<div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 justify-center gap-1">
				{slides.map((slide) => (
					<div
						className="cursor-pointer"
						key={slide.id}
						onClick={() => goToSlide(slide.id)}
					>
						●
					</div>
				))}
			</div>
		</div>
	);
};
