import Layout from "../layout/Layout";
import Image from "next/image";
import { SocialMedia, ContactButton } from "../components";
import { LocationIcon, RoundedLine } from "../assets/icons/js";
import flyingBirds from "../assets/icons/svg/flying-birds.svg";

export default function Contact() {
	return (
		<Layout>
			<section className="relative grid min-h-screen place-items-center overflow-hidden bg-secondary text-gray-600">
				<div className="absolute left-0 top-[32rem] w-full sm:hidden">
					<RoundedLine />
				</div>
				<div className="relative mt-32 mb-8 grid w-[90%] max-w-[90rem] grid-cols-1 gap-28 md:mt-0 md:mb-0 md:grid-cols-2 md:grid-rows-2 md:gap-16">
					<div className="absolute top-0 opacity-25 left-0 md:w-[60vw] md:top-1/2 md:-translate-y-1/2 2xl:-left-16 pointer-events-none">
						<Image src={flyingBirds} alt="flying birds" />
					</div>
					<div>
						<h1 className="mb-6 text-3xl font-bold md:text-4xl w-max">
							<a
								href="http://maps.google.com/?q=Birds House Parang Romania"
								target="_blank"
								rel="noreferrer"
							>
								Find Us{" "}
								<LocationIcon className="inline fill-gray-600 w-6 h-6 md:w-8 md:h-8" />
							</a>
						</h1>

						<address className="max-w-[10rem] not-italic">
							<a
								href="http://maps.google.com/?q=Birds House Parang Romania"
								target="_blank"
								rel="noreferrer"
							>
								Strada Alpina nr 1, Petroșani, România
							</a>
						</address>
					</div>

					<div className="row-start-2 [&>a]:block">
						<h1 className="mb-6 text-3xl font-bold md:text-4xl">Contact Us</h1>
						<a href="tel:+40723593424">+40 723 593 424</a>
						<a href="mailto:birdshouse@gmail.com">birdshouse@gmail.com</a>
						<SocialMedia addClass={"mt-4"} />
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
							<ContactButton type="submit" />
						</form>
					</div>
				</div>
			</section>
		</Layout>
	);
}
