import { useEffect, useState } from "react";
import Image from "next/image";
import { classNames } from "../utils";

export const Carousel = (props) => {
	const { slides, currentIndex, setCurrentIndex, isOpen, onClose } = props;
	const [touchPosition, setTouchPosition] = useState(null);

	useEffect(() => {
		if (isOpen) document.body.style.overflow = "hidden";
		return () => (document.body.style.overflow = "unset");
	});

	useEffect(() => {
		const options = {
			Escape: onClose,
			ArrowLeft: goToPrevious,
			ArrowRight: goToNext,
		};

		const keydown = (e) => {
			options[e.key]?.();
		};

		window.addEventListener("keydown", keydown);
		return () => window.removeEventListener("keydown", keydown);
	}, [currentIndex]);

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

	function handleTouchStart(e) {
		const touchDown = e.touches[0].clientX;
		setTouchPosition(touchDown);
	}

	function handleTouchMove(e) {
		const touchDown = touchPosition;

		if (touchDown === null) return;

		const currentTouch = e.touches[0].clientX;
		const diff = touchDown - currentTouch;

		if (diff > 5) {
			goToNext();
		}

		if (diff < -5) {
			goToPrevious();
		}

		setTouchPosition(null);
	}

	return (
		<div
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			className={classNames(
				isOpen ? "opacity-100" : "pointer-events-none opacity-0",
				"fixed top-0 left-0 z-[200] flex min-h-screen w-full cursor-auto items-center justify-center bg-primary transition-opacity duration-500"
			)}
			onClick={onClose}
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="relative flex w-[90%] flex-col gap-4 md:gap-6"
			>
				<div className="relative z-[-1] h-[80vh] w-full">
					<Image
						src={slides[currentIndex].src}
						alt={slides[currentIndex].alt}
						layout="fill"
						objectFit="contain"
						objectPosition="center"
						quality={100}
						placeholder="blur"
					/>
				</div>

				<div className="flex justify-between text-secondary">
					<div>{`${currentIndex + 1} / ${slides.length}`}</div>
					<div className="flex gap-6">
						<button onClick={goToPrevious}>Previous</button>
						<button onClick={goToNext}>Next</button>
						<button
							onClick={onClose}
							className="absolute right-0 top-0 rounded-bl-lg bg-[rgba(30,30,30,0.8)] px-2 py-1"
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
