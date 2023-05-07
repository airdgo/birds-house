import { bedroomImages } from "./bedroomImages";
import { bathroomImages } from "./bathroomImages";
import { terraceImages } from "./terraceImages";
import { livingroomImages } from "./livingroomImages";

export const roomsImages = [
	...bedroomImages,
	...bathroomImages,
	...terraceImages,
	...livingroomImages,
].map((image, index) => ({ ...image, id: index }));
