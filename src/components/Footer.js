import Image from "next/image";
import { roomsImages } from "../constants";
import { useLoadScript } from "@react-google-maps/api";
import { Map } from "../components";

export const Footer = () => {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
	});

	return (
		<footer className="grid min-h-screen place-items-center bg-secondary text-lg text-gray-600">
			<div className="my-20 w-[90%] max-w-[90rem]">
				<h1 className="mb-8 w-full text-3xl font-bold">Location</h1>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
					<address className="not-italic">
						Strada Alpina nr. 1, Petroșani, România
					</address>

					<div className="row-start-3 text-center md:row-start-auto">
						<a
							href="https://instagram.com/birdshouse__?igshid=YmMyMTA2M2Y="
							target="_blank"
						>
							Instagram
						</a>
						<span className="mx-2">/</span>
						<a
							href="https://www.facebook.com/birdshouse_parang-102485455211263"
							target="_blank"
						>
							Facebook
						</a>
					</div>

					{isLoaded ? <Map /> : <div>Loading...</div>}

					<div className="h-full w-full text-center">
						<div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
							{roomsImages.slice(0, 6).map((item) => (
								<div className="relative aspect-square min-h-[1rem]">
									<Image
										src={item.src}
										alt={item.alt}
										layout="fill"
										objectFit="cover"
										objectPosition="center"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
