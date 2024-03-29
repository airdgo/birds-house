import Image from "next/image";
import { locationImages } from "../constants";
import home from "../assets/cabin/cabin-1.jpg";
import { LocationIcon } from "../assets/icons/js";

export const Location = () => {
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
						<a
							href="http://maps.google.com/?q=Birds House Parang Romania"
							target="_blank"
							rel="noreferrer"
						>
							Strada Alpina nr. 1, Petroșani, România{" "}
							<LocationIcon className="inline fill-gray-700 w-6 h-6 md:w-7 md:h-7" />
						</a>
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

					<div className="aspect-video lg:aspect-auto relative">
						<Image
							src={home}
							alt="Birds House cabin"
							layout="fill"
							objectFit="cover"
							placeholder="blur"
						/>
					</div>

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
