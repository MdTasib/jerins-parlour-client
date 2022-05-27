import React from "react";
import Customer from "./Customer";
import Header from "./Header";
import Services from "./Services";

const Home = () => {
	return (
		<main>
			<Header />
			<Services />
			<Customer />
		</main>
	);
};

export default Home;
