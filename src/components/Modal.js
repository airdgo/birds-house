import { useEffect } from "react";
import { ImageSlider } from "../components";

export const Modal = ({ imageIndex, isOpen, onClose }) => {
	useEffect(() => {
		if (isOpen) document.body.style.overflow = "hidden";
		return () => (document.body.style.overflow = "unset");
	});
	if (!isOpen) return null;

	return (
		<div
			onClick={onClose}
			className="fixed top-0 left-0 z-[200] grid h-screen w-full place-items-center bg-[#1d1d1fb3]"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="relative my-16 grid w-[85%] max-w-5xl bg-secondary px-4 py-4 font-primary sm:px-12 sm:py-8 lg:grid-cols-2 lg:px-20 lg:py-12"
			>
				<ImageSlider index={imageIndex} />
			</div>
		</div>
	);
};
