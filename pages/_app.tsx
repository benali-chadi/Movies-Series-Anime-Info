import React from "react";
import Script from "../node_modules/next/script";
import NavBar from "../src/components/NavBar";
import "../src/styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Script src="https://kit.fontawesome.com/12a13271bd.js"></Script>
			<NavBar />
			<div className="pt-28 pb-10  md:pt-20">
				<Component {...pageProps} />
			</div>
		</>
	);
}

export default MyApp;
