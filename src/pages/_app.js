import "../assets/globals.css";
import Head from "next/head";

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
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
