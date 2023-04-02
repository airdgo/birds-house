import Image from "next/image";
import { classNames } from "../utils";

export const RoomsImagesWrapper = ({ addClass, position, ...imageProps }) => {
	return (
		<div
			className={classNames(
				addClass,
				"relative min-h-[12rem] cursor-pointer overflow-hidden"
			)}
		>
			<Image
				className="transition-transform duration-500 ease-out hover:scale-105"
				{...imageProps}
				layout="fill"
				objectFit="cover"
				objectPosition={position ?? "center"}
				placeholder="blur"
			/>
		</div>
	);
};
