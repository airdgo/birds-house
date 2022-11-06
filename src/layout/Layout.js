import { Header, Footer } from "../components";

export default function Layout({ children }) {
	return (
		<div className="scroll-smooth font-primary">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
