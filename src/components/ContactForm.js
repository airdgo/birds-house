import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "./Alert";
import { ContactButton } from "./ContactButton";

export const ContactForm = () => {
	const formRef = useRef();
	const [isVisible, setIsVisible] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const alertMessage = error
		? "Ups! Something went wrong!"
		: "Your email has been sent!";

	async function sendEmail(e) {
		e.preventDefault();

		const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
		const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
		const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

		try {
			setLoading(true);
			setError(false);
			await emailjs.sendForm(
				SERVICE_ID,
				TEMPLATE_ID,
				formRef.current,
				PUBLIC_KEY
			);
			formRef.current.reset();
		} catch (error) {
			setError(true);
		}
		displayAlert();
		setLoading(false);
	}

	function displayAlert() {
		setIsVisible(true);

		setTimeout(() => {
			setIsVisible(false);
		}, 2000);
	}
	return (
		<>
			<form
				ref={formRef}
				onSubmit={sendEmail}
				className="grid grid-cols-2 gap-2"
			>
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
				<ContactButton type="submit" disabled={loading} />
			</form>
			<Alert visible={isVisible} error={error}>
				{alertMessage}
			</Alert>
		</>
	);
};
