import { RoomImageContainer } from "../components";
import { roomImages } from "../constants";

export const Rooms = () => {
	return (
		<section className="min-h-screen bg-neutral-50 py-12 font-primary text-neutral-500">
			<div className="mx-auto h-full w-[90%] max-w-[90rem]">
				<div>
					<h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
						Take a peek inside our cozy cabin
					</h1>
				</div>

				<div className="mt-16 grid grid-rows-3 gap-4 sm:grid-cols-2 md:grid-cols-4">
					{roomImages.map((item) => (
						<RoomImageContainer
							key={item.id}
							src={item.imgSrc}
							alt={item.alt}
							addClass={item?.class}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
