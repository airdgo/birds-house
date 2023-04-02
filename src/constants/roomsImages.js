import i1 from "../assets/rooms/bedroom-1.jpeg";
import i2 from "../assets/rooms/bathroom-1.jpeg";
import i3 from "../assets/rooms/terrace-1.jpg";
import i4 from "../assets/rooms/livingroom-1.jpeg";
import i5 from "../assets/rooms/5.jpg";
import i6 from "../assets/rooms/6.jpg";
import i7 from "../assets/rooms/7.jpg";
import i8 from "../assets/rooms/8.jpg";

export const roomsImages = [
	{ id: 0, src: i1, alt: "room1", show: true },
	{ id: 1, src: i2, alt: "room2", show: true, position: "bottom" },
	{
		id: 2,
		src: i3,
		alt: "room3",
		class: "sm:col-span-2 md:row-span-2",
		show: true,
	},
	{
		id: 3,
		src: i4,
		alt: "room4",
		class: "sm:col-span-2 md:row-span-2",
		show: true,
	},
	{ id: 4, src: i5, alt: "room1" },
	{ id: 5, src: i6, alt: "room2" },
	{ id: 6, src: i7, alt: "room1" },
	{ id: 7, src: i8, alt: "room2" },
];
