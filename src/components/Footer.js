import Image from "next/image";
import { roomsImages } from "../constants";

export const Footer = () => {
	return (
		<footer className="grid h-screen place-items-center bg-secondary text-gray-400">
			<div className="grid grid-cols-2 gap-4">
				<h1 className="col-span-2">Location</h1>

				<div>
					<address className="not-italic">
						Strada Alpina nr. 1, Petroșani, România
					</address>
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
