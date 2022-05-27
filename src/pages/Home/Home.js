import React from "react";
import Customer from "./Customer";
import Header from "./Header";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
	return (
		<main>
			<Header />
			<Services />
			<Customer />
			<Testimonials />
		</main>
	);
};

export default Home;
