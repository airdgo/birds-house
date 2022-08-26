import Layout from "../layout/Layout";
import Image from "next/image";
import bird from "../assets/bird.svg";
import contactBg from "../assets/contact-bg-2.svg";

export default function Contact() {
	return (
		<Layout>
			<Image
				src={contactBg}
				alt="backgorund"
				layout="fill"
				objectFit="cover"
				style={{ zIndex: "-1" }}
			/>
			<section className="relative grid min-h-screen place-items-center overflow-hidden bg-secondary text-gray-600 md:bg-transparent">
				<div className="mt-32 mb-8 grid w-[90%] max-w-[90rem] grid-cols-1 gap-28 md:mt-0 md:mb-0 md:grid-cols-2 md:grid-rows-2 md:gap-16">
					<div>
						<h1 className="mb-6 text-3xl font-bold md:text-4xl">Find Us</h1>
						<address className="max-w-[10rem] not-italic">
							Strada Alpina nr 1, Petroșani, România
						</address>
					</div>

					<div className="row-start-2">
						<h1 className="mb-6 text-3xl font-bold md:text-4xl">Contact Us</h1>
						<div>+40 734 512 510</div>
						<div>birdshouse@gmail.com</div>
					</div>

					<div className="absolute left-0 top-[31rem] w-full md:hidden">
						<svg
							id="visual"
							viewBox="0 0 800 100"
							width="800"
							height="100"
							xmlns="http://www.w3.org/2000/svg"
							version="1.1"
						>
							<path
								d="M0 69L10.3 64.2C20.7 59.3 41.3 49.7 61.8 47.7C82.3 45.7 102.7 51.3 123.2 54.3C143.7 57.3 164.3 57.7 184.8 58.3C205.3 59 225.7 60 246.2 57.3C266.7 54.7 287.3 48.3 307.8 49.2C328.3 50 348.7 58 369.2 62C389.7 66 410.3 66 430.8 63.2C451.3 60.3 471.7 54.7 492.2 49.8C512.7 45 533.3 41 553.8 43C574.3 45 594.7 53 615.2 56.8C635.7 60.7 656.3 60.3 676.8 61C697.3 61.7 717.7 63.3 738.2 59.2C758.7 55 779.3 45 789.7 40L800 35"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="miter"
								stroke="#1e1e1e"
								strokeWidth="8"
							></path>
						</svg>
					</div>

					<div className="row-span-2 mt-16 md:mt-0">
						<form className="grid grid-cols-2 gap-2">
							<div>
								<label htmlFor="firstName">First Name</label>
								<input
									required
									type="text"
									id="firstName"
									name="firstName"
									className="mt-2 w-full rounded-sm border border-gray-400 bg-transparent px-3 py-2 focus:outline focus:outline-1 focus:outline-gray-600"
								/>
							</div>

							<div>
								<label htmlFor="firstName">Last Name</label>
								<input
									required
									type="text"
									id="lastName"
									name="lastName"
									className="mt-2 w-full rounded-sm border border-gray-400 bg-transparent px-3 py-2 focus:outline focus:outline-1 focus:outline-gray-600"
								/>
							</div>

							<div className="col-span-2 mt-6">
								<label htmlFor="email">Email Address</label>
								<input
									required
									type="email"
									id="email"
									name="email"
									className="mt-2 w-full rounded-sm border border-gray-400 bg-transparent px-3 py-2 focus:outline focus:outline-1 focus:outline-gray-600"
								/>
							</div>

							<div className="col-span-2 mt-6">
								<label htmlFor="message">Message</label>
								<textarea
									required
									id="message"
									name="message"
									rows="4"
									className="mt-2 w-full resize-none rounded-sm border border-gray-400 bg-transparent px-3 py-2 focus:outline focus:outline-1 focus:outline-gray-600"
								></textarea>
							</div>

							<button className="mt-6 flex max-w-[10rem] items-center justify-center gap-1 border-2 border-gray-400 px-3 py-2 font-thin tracking-wide text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 focus:outline focus:outline-1 focus:outline-gray-600">
								Send!
								<div className="relative h-8 w-8">
									<Image src={bird} alt="bird" layout="fill" />
								</div>
							</button>
						</form>
					</div>
				</div>
			</section>
		</Layout>
	);
}
