import React from "react";
import Contact from "./Contact";
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
			<Contact />
		</main>
	);
};

export default Home;
