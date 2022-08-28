import { useRef } from "react";
import { useDragToScroll } from "../hooks";
import Image from "next/image";
import backgroundImage from "../assets/home.jpeg";

export const Activities = () => {
	const ref = useRef();
	const onMouseDown = useDragToScroll(ref);

	return (
		<section
			id="activities"
			className="grid min-h-screen place-items-center bg-primary"
		>
			<div
				ref={ref}
				onMouseDown={onMouseDown}
				className="flex w-full overflow-auto"
			>
				<div className="relative h-[30rem] w-[50rem] shrink-0 overflow-hidden rounded-3xl">
					<Image
						src={backgroundImage}
						layout="fill"
						objectFit="cover"
						objectPosition="center"
					/>
				</div>
				<div className="h-[30rem] w-[50rem] shrink-0 bg-yellow-400"></div>
				<div className="h-[30rem] w-[50rem] shrink-0 bg-green-400"></div>
			</div>
		</section>
	);
};
