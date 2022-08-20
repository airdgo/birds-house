import "../assets/globals.css";
import Head from "next/head";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Birds House</title>
				<meta
					name="description"
					content="Birds house is a maountain cabin in Parang Mountains"
				/>
				<meta name="author" content="Vlad Dragoi" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ParallaxProvider>
				<Component {...pageProps} />
			</ParallaxProvider>
		</>
	);
}

export default MyApp;
