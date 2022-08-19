import Image from "next/image";
import { roomsImages } from "../constants";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";

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

function Map() {
	const birdsHouseLoc = { lat: 45.38926207900881, lng: 23.459836545225667 };
	const center = useMemo(() => birdsHouseLoc, []);
	return (
		<GoogleMap
			zoom={10}
			center={center}
			mapContainerClassName="min-h-[14rem] w-full md:min-h-full"
			options={{
				streetViewControl: false,
				mapTypeControl: false,
				fullscreenControl: false,
			}}
		>
			<MarkerF position={birdsHouseLoc} />
		</GoogleMap>
	);
}
