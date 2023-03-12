import { ContactBird } from "../assets/icons/js";

export const ContactButton = (props) => {
	return (
		<button
			{...props}
			className="mt-6 border border-gray-400 relative inline-flex max-w-[9rem] items-center justify-start px-6 py-1 overflow-hidden font-medium transition-all rounded group"
		>
			<span className="w-48 h-48 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
			<span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
				Send!
			</span>
			<span className="relative h-10 w-10 stroke-black group-hover:stroke-white transition-colors duration-300 ease-in-out">
				<ContactBird />
			</span>
		</button>
	);
};
