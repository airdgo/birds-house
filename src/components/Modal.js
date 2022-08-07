import { useEffect, useState } from "react";
import Image from "next/image";
import { roomsImages } from "../constants";
import { useMousePosition } from "../hooks";
import { classNames } from "../utils";

export const Modal = ({ imageIndex, isOpen, onClose }) => {
	// useEffect(() => {
	// 	if (isOpen) document.body.style.overflow = "hidden";
	// 	return () => (document.body.style.overflow = "unset");
	// });

	if (!isOpen) return null;

	const [currentIndex, setCurrentIndex] = useState(imageIndex);
	const { x, y } = useMousePosition();
	const slides = roomsImages;

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

	function handleNavigation() {
		if (x < (window.innerWidth * 25) / 100) {
			goToPrevious();
		} else if (x > (window.innerWidth * 75) / 100) {
			goToNext();
		} else onClose();
	}

	return (
		<div className="fixed top-0 left-0 z-[200] grid h-screen w-full cursor-none place-items-center bg-gray-200">
			<div>
				<div
					onClick={handleNavigation}
					className={classNames(
						x < (window.innerWidth * 25) / 100
							? "before:hidden after:right-[0.5rem]"
							: "",
						x > (window.innerWidth * 75) / 100 &&
							"before:left-[0.5rem] after:hidden",
						"absolute top-0 left-0 h-12 w-12 rounded-full border-2 border-solid border-gray-300 mix-blend-difference before:absolute before:inset-0 before:right-[0.9rem] before:m-auto before:h-3 before:w-3 before:rotate-45 before:border-t-2 before:border-r-2 before:border-inherit after:absolute after:inset-0 after:left-[0.9rem] after:m-auto after:h-3 after:w-3 after:-rotate-[135deg] after:border-t-2 after:border-r-2 after:border-inherit"
					)}
					style={{ left: `${x - 24}px`, top: `${y - 24}px` }}
				/>
			</div>

			<div className="relative z-[-1] h-full w-full">
				<Image
					src={slides[currentIndex].imgSrc}
					alt={slides[currentIndex].alt}
					layout="responsive"
					objectFit="cover"
					objectPosition="bottom"
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
