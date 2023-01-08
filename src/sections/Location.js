import Image from "next/image";
import { locationImages } from "../constants";
import { useLoadScript } from "@react-google-maps/api";
import { Map } from "../components";

export const Location = () => {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
	});

	return (
		<section
			id="location"
			className="grid min-h-screen place-items-center bg-secondary text-lg text-gray-700"
		>
			<div className="my-20 w-[90%] max-w-[80rem]">
				<h1 className="mb-8 w-full text-3xl font-bold md:mb-14 md:text-5xl">
					In the mountains
				</h1>

				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
					<address className="not-italic">
						Strada Alpina nr. 1, Petroșani, România
					</address>

					<div className="row-start-3 text-center lg:row-start-auto">
						<a
							href="https://instagram.com/birdshouse__?igshid=YmMyMTA2M2Y="
							target="_blank"
							rel="noreferrer"
						>
							Instagram
						</a>
						<span className="mx-2">/</span>
						<a
							href="https://www.facebook.com/birdshouse_parang-102485455211263"
							target="_blank"
							rel="noreferrer"
						>
							Facebook
						</a>
					</div>

					{isLoaded ? <Map /> : <div>Loading...</div>}

					<div className="h-full w-full text-center">
						<div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
							{locationImages.slice(0, 6).map((item) => (
								<div
									key={item.id}
									className="relative aspect-square min-h-[1rem]"
								>
									<Image
										src={item.src}
										alt={item.alt}
										layout="fill"
										objectFit="cover"
										objectPosition={item.position ? item.position : "center"}
										placeholder="blur"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
				<hr className="mt-16 border-gray-400" />
			</div>
		</section>
	);
};
