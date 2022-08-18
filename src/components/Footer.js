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
				<div className="grid grid-cols-1 gap-8">
					<div>
						<address className="mb-7 not-italic">
							Strada Alpina nr. 1, Petroșani, România
						</address>
						{isLoaded ? <Map /> : <div>Loading...</div>}
					</div>

					<div className="h-full text-center">
						<p className="mb-7">Instagram / Facebook</p>
						<div className="grid grid-cols-2 gap-2">
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
			mapContainerClassName="w-full min-h-[14rem] aspect-video"
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
