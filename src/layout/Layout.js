import { Header, Footer } from "../components";

export default function Layout({ children }) {
	return (
		<div className="overflow-clip scroll-smooth bg-primary font-primary">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
