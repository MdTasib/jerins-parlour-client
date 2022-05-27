import React from "react";
import { useQuery } from "react-query";
import Loading from "../../shared/Loading";
import Service from "./Service";

const Services = () => {
	const { data: services, isLoading } = useQuery("services", () =>
		fetch("http://localhost:5000/service").then(res => res.json())
	);

	if (isLoading) {
		<Loading />;
	}

	return (
		<section className='px-10 py-16'>
			<h2 className='text-center text-3xl font-bold'>
				Our Awesome <small className='text-primary'>Services</small>
			</h2>
			<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 py-10'>
				{services?.map(service => (
					<Service key={service._id} service={service}></Service>
				))}
			</div>
			<div className='text-center'>
				<button className='btn btn-primary'>Explore more</button>
			</div>
		</section>
	);
};

export default Services;
