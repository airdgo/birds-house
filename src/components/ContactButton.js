import { ContactBird } from "../assets/icons/js";
import { Spinner } from "../assets/icons/js";
export const ContactButton = ({ disabled, ...props }) => {
	return (
		<button
			{...props}
			disabled={disabled}
			className="mt-6 border border-gray-400 relative disabled:max-w-[10rem] inline-flex max-w-[9rem] items-center justify-start px-6 py-1 overflow-hidden font-medium transition-all disabled:pointer-events-none rounded group"
		>
			<span className="w-48 h-48 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-disabled:ml-0 group-disabled:mb-32 group-hover:translate-x-0 group-disabled:translate-x-0"></span>
			<span className="relative group-disabled:mr-2 w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white group-disabled:text-white">
				{disabled ? "Sending..." : "Send!"}
			</span>
			<span className="relative h-10 w-10 stroke-black group-hover:stroke-white transition-colors duration-300 ease-in-out">
				{disabled ? <Spinner /> : <ContactBird />}
			</span>
		</button>
	);
};
