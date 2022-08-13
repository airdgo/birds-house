import activitiesBrake from "../assets/activitiesBrake.jpg";
import Image from "next/image";

export const ActivitiesBrake = () => {
	return (
		<section className="relative flex h-[80vh] justify-center pt-[15vh] text-center text-3xl text-neutral-50 sm:text-6xl md:items-center md:pt-0 md:text-7xl xl:text-8xl">
			<Image
				style={{ zIndex: "-1" }}
				src={activitiesBrake}
				alt="mountains"
				layout="fill"
				objectFit="cover"
			/>
			<h1 className="w-[90%] max-w-6xl">There's a whole world out there.</h1>
		</section>
	);
};
