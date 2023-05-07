import { Carousel, RoomsImagesWrapper } from "../components";
import { roomsImages } from "../constants";
import { useState } from "react";

export const Rooms = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [imageIndex, setImageIndex] = useState(0);
	const visibleImages = roomsImages.filter((image) => image.show);
	const renderImages = visibleImages.map((image) => (
		<RoomsImagesWrapper
			key={image.id}
			src={image.src}
			alt={image.alt}
			addClass={image?.class}
			position={image?.position}
			onClick={() => {
				setImageIndex(image.id);
				setIsOpen(true);
			}}
		/>
	));

	return (
		<section
			id="rooms"
			className="min-h-screen bg-neutral-50 py-12 font-primary text-neutral-600"
		>
			<div className="mx-auto h-full w-[90%] max-w-[90rem]">
				<div>
					<h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
						Take a peek inside our cozy cabin
					</h1>
				</div>

				<div className="mt-16 grid grid-rows-3 gap-4 sm:grid-cols-2 md:grid-cols-4">
					{renderImages}
				</div>

				<Carousel
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					slides={roomsImages}
					currentIndex={imageIndex}
					setCurrentIndex={setImageIndex}
				/>
			</div>
		</section>
	);
};
