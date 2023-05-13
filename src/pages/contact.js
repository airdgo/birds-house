import Layout from "../layout/Layout";
import Image from "next/image";
import { SocialMedia, ContactForm } from "../components";
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
								href="http://maps.google.com/?q=Birds+House+Parang+Romania"
								target="_blank"
								rel="noreferrer"
							>
								Find Us{" "}
								<LocationIcon className="inline fill-gray-600 w-6 h-6 md:w-8 md:h-8" />
							</a>
						</h1>

						<address className="max-w-[10rem] not-italic">
							<a
								href="http://maps.google.com/?q=Birds+House+Parang+Romania"
								target="_blank"
								rel="noreferrer"
							>
								Strada Alpina nr 1, Petroșani, România
							</a>
						</address>
					</div>

					<div className="row-start-2 [&>a]:block [&>a]:w-max">
						<h1 className="mb-6 text-3xl font-bold md:text-4xl">Contact Us</h1>
						<a href="tel:+40723593424">+40 723 593 424</a>
						<a href="mailto:office@birdshouse.ro">office@birdshouse.ro</a>
						<SocialMedia addClass={"mt-4"} />
					</div>

					<div className="row-span-2 mt-16 md:mt-0">
						<ContactForm />
					</div>
				</div>
			</section>
		</Layout>
	);
}
