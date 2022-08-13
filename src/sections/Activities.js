import { Carousel } from "../components/Carousel";
import Image from "next/image";
import { roomsImages } from "../constants";

export const Activities = () => {
	return (
		<section className="h-screen bg-primary">
			<Carousel show={3} infiniteLoop={true}>
				{roomsImages.map((item) => (
					<Image src={item.src} alt={item.alt} />
				))}
			</Carousel>
		</section>
	);
};
