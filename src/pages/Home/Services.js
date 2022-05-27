import React from "react";
import service1 from "../../assets/Icon/service1.png";
import service2 from "../../assets/Icon/service2.png";
import service3 from "../../assets/Icon/service3.png";
import Service from "./Service";

const Services = () => {
	const services = [
		{
			id: 1,
			name: "Anti Age Face Treatment",
			price: 125,
			description:
				"We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
			img: service1,
		},
		{
			id: 2,
			name: "Hair Color & Styleing",
			price: 110,
			description:
				"Amazing flyers, social media posts and brand representations that would make your brand stand out.",
			img: service2,
		},
		{
			id: 3,
			name: "Skin Care Treatment",
			price: 99,
			description:
				"With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
			img: service3,
		},
	];
	return (
		<div className='px-10 py-16'>
			<h2 className='text-center text-3xl font-bold'>
				Our Awesome <small className='text-primary'>Services</small>
			</h2>
			<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 py-10'>
				{services.map(service => (
					<Service key={service.id} service={service}></Service>
				))}
			</div>
			<div className='text-center'>
				<button className='btn btn-primary'>Explore more</button>
			</div>
		</div>
	);
};

export default Services;
