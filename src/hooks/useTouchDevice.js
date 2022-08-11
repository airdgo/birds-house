import { useEffect, useState } from "react";

export const useTouchDevice = () => {
	const [isTouchDevice, setIsTouchDevice] = useState();

	useEffect(() => {
		const isTouchDevice = () => {
			return window.matchMedia("(pointer: coarse)").matches;
		};

		setIsTouchDevice(isTouchDevice());
	}, []);

	return isTouchDevice;
};
