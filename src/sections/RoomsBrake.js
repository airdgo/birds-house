import roomsBrake from "../assets/roomsBrake.jpg";
import Image from "next/image";

export const RoomsBrake = () => {
	return (
		<section className="relative flex h-[80vh] justify-center pt-[15vh] text-center text-3xl text-neutral-50 sm:text-6xl md:items-center md:pt-0 md:text-7xl xl:text-8xl">
			<Image
				style={{ zIndex: "-1" }}
				src={roomsBrake}
				alt="mountains"
				layout="fill"
				objectFit="cover"
			/>
			<h1 className="w-[90%] max-w-6xl">Leave the road, take the trails.</h1>
		</section>
	);
};
