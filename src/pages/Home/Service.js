import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
	const navigate = useNavigate();

	return (
		<div
			onClick={() => navigate(`/booking/${service._id}`)}
			className='card lg:max-w-lg bg-base-100 drop-shadow-md hover:drop-shadow-2xl cursor-pointer'>
			<figure className='px-10 pt-10'>
				<img src={service.img} alt='Shoes' className='rounded-xl w-24' />
			</figure>
			<div className='card-body items-center text-center'>
				<h2 className='text-1xl font-bold'>{service.name}</h2>
				<small className='text-primary font-bold text-xl'>
					$ {service.price}
				</small>
				<small>{service.description}</small>
			</div>
		</div>
	);
};

export default Service;
