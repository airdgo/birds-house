import Image from "next/image";
import { roomsImages } from "../constants";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";

export const Footer = () => {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
	});

	return (
		<footer className="grid h-screen place-items-center bg-secondary text-gray-400">
			<div className="grid grid-cols-2 gap-4">
				<h1 className="col-span-2">Location</h1>

				<div>
					<address className="not-italic">
						Strada Alpina nr. 1, Petroșani, România
					</address>
					{isLoaded ? <Map /> : <div>Loading...</div>}
				</div>

				<div className="text-center">
					<p>Instagram / Facebook</p>
					<div className="grid grid-cols-3 gap-2">
						{roomsImages.slice(0, 6).map((item) => (
							<div className="relative aspect-square min-h-[10rem]">
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
			mapContainerClassName="w-full h-[20rem]"
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
