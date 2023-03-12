export const ContactButton = (props) => {
	return (
		<button
			{...props}
			class="mt-6 border border-gray-400 relative inline-flex max-w-[9rem] items-center justify-start px-6 py-1 overflow-hidden font-medium transition-all rounded group"
		>
			<span class="w-48 h-48 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
			<span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
				Send!
			</span>
			{/* BIRD ICON */}
			<span className="relative h-10 w-10 stroke-black group-hover:stroke-white transition-colors duration-300 ease-in-out">
				<svg
					width="100%"
					height="100%"
					viewBox="0 0 48 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M35.2103 19.45C39.1903 17 30.3003 5.5 29.8103 5.5C29.3203 5.5 20.3703 17.4 24.6903 19.36M27.0003 20.76C27.0003 21.4151 27.2605 22.0433 27.7238 22.5066C28.187 22.9698 28.8152 23.23 29.4703 23.23V23.23C29.9588 23.23 30.4364 23.0851 30.8426 22.8137C31.2488 22.5423 31.5653 22.1566 31.7523 21.7052C31.9392 21.2539 31.9882 20.7573 31.8929 20.2781C31.7975 19.799 31.5623 19.3589 31.2169 19.0134C30.8714 18.668 30.4313 18.4328 29.9522 18.3375C29.4731 18.2422 28.9764 18.2911 28.5251 18.478C28.0738 18.665 27.688 18.9816 27.4166 19.3877C27.1452 19.7939 27.0003 20.2715 27.0003 20.76V20.76ZM34.5703 19.24C32.4603 17.13 28.2303 11.84 22.9403 22.41C14.4903 17.13 21.9403 21.85 9.18031 13.99C6.00031 21.36 11.2803 27.7 15.5003 31.93C14.5003 35.1 11.6103 39.59 10.2203 42.5C16.5603 41.44 34.5303 39.33 35.5903 24.5C39.8203 20.82 36.6503 23.62 39.8203 20.89C36.0803 19.78 39.0003 20.6 34.5303 19.24H34.5703Z"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</span>
		</button>
	);
};
