import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";

export const Map = () => {
	const birdsHouseLoc = { lat: 45.38926207900881, lng: 23.459836545225667 };
	const center = useMemo(() => birdsHouseLoc, []);
	return (
		<GoogleMap
			zoom={10}
			center={center}
			mapContainerClassName="min-h-[50vw] w-full lg:min-h-full"
			options={{
				streetViewControl: false,
				mapTypeControl: false,
				fullscreenControl: false,
			}}
		>
			<MarkerF position={birdsHouseLoc} />
		</GoogleMap>
	);
};
