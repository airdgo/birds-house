import { useRef } from "react";
import { useDragToScroll } from "../hooks";

export const Activities = () => {
	const ref = useRef();

	const onMouseDown = useDragToScroll(ref);

	return (
		<section id="activities" className="min-h-screen bg-primary">
			<div
				ref={ref}
				onMouseDown={onMouseDown}
				className="w-full cursor-grab overflow-auto whitespace-nowrap"
			>
				<div className=" inline-block h-[30rem] w-[50rem] bg-red-400"></div>
				<div className=" inline-block h-[30rem] w-[50rem] bg-yellow-400"></div>
				<div className=" inline-block h-[30rem] w-[50rem] bg-green-400"></div>
			</div>
		</section>
	);
};
